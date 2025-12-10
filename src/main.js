import { getImagesByQuery } from './js/pixabay-api.js'; 
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const searchInput = form.elements['search-text'];

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Please enter a search query.', position: 'topRight' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'No images found. Try another search.',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    console.error(error);
    iziToast.error({
      message: 'Error fetching images.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    searchInput.value = '';
  }
});
