// Single source: serverless endpoint
const API_URL = '/api/items';

export const fetchFTItems = async (limit = 30) => {
  try {
    const response = await fetch(`${API_URL}?limit=${limit}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch items:', error);
    throw error;
  }
};