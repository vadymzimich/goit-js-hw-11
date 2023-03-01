const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');

export function removeGallery() {
  gallery.innerHTML = '';
  pageNumber = 1;
  btnLoadMore.style.display = 'none';
}
