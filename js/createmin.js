import { createPhotos } from './data.js';

const pictureTemplate = document.querySelector('#picture').content;

const picturesArray = createPhotos();

const docFragment = document.createDocumentFragment();

picturesArray.forEach(({ url, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').setAttribute(src, url);
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments;
  docFragment.appendChild(pictureElement);
});

document.querySelector('.pictures').appendChild(docFragment);

