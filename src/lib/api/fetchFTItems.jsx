import {API_KEY, API_URL} from './apiConfig';

export const fetchFTItems = async () => {
    try {
        const response = await fetch(`${API_URL}`, {
            headers: {
                Authorization: API_KEY
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}