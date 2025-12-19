// Request to API
// Production: serverless function on Vercel (/api/items)
// Development: direct API call (CORS issues possible, use vercel dev for testing serverless)
const getApiUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    return '/api/items';
  }
  
  return 'https://fortniteapi.io/v2/items/list?lang=en';
};

export const fetchFTItems = async (limit = 30) => {
    try {
        const apiUrl = getApiUrl();
        const isDev = process.env.NODE_ENV !== 'production';
        
        const headers = isDev ? {
          'Authorization': '97215482-824a16a7-44706666-ee182900'
        } : {};
        
        const response = await fetch(
          isDev ? apiUrl : `${apiUrl}?limit=${limit}`,
          { headers }
        );
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (process.env.NODE_ENV !== 'production' && data.items) {
          return {
            ...data,
            items: data.items.slice(0, limit)
          };
        }
        
        return data;
    } catch (error) {
        console.error('Failed to fetch items:', error);
        throw error;
    }
}