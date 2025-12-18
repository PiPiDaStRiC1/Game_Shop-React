// Serverless function for Vercel

export default async function handler(req, res) {
  // Только GET запросы
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const limit = parseInt(req.query.limit) || 30;
    const API_KEY = process.env.FORTNITE_API_KEY;

    if (!API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Request to fortniteapi.io
    const response = await fetch('https://fortniteapi.io/v2/items/list?lang=en', {
      headers: {
        'Authorization': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();

    // Limit request
    const limitedData = {
      ...data,
      items: Array.isArray(data.items) ? data.items.slice(0, limit) : [],
      _meta: {
        requested: limit,
        returned: data.items?.length || 0,
        limited: true
      }
    };

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

    return res.status(200).json(limitedData);

  } catch (error) {
    console.error('API Error:', error);
    return res.status(502).json({ 
      error: 'Failed to fetch items',
      message: error.message 
    });
  }
}
