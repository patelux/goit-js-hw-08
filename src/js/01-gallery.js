import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const galleryBox = document.querySelector('.gallery');

let items = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
}).join('');

galleryBox.insertAdjacentHTML('beforeend', items);

var images = new SimpleLightbox('.gallery a');
images.on('show.simplelightbox', function () {
    images.options.captionsData = "alt";
    images.options.captionsDelay = 250;
    images.options.scrollZoom = false;
    images.options.scrollZoomFactor = 0;
});