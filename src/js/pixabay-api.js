import axios from 'axios';

const PIXABAY_KEY = '53658397-297125985b6b4c55411510f4b';
const BASE_URL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: PIXABAY_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
