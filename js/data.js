import { getRandomPositiveInteger } from './util.js';

const PHOTO_INFO_COUNT = 25;
const LIKE_MIN = 15;
const LIKE_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 200;
let idNumber = 1;
let photoNumber = 1;

const createPhoto = () => ({
  id: idNumber++,
  url: `photos/${photoNumber++}.jpg`,
  description: 'Лучшее фото в мире',
  likes: getRandomPositiveInteger(LIKE_MIN, LIKE_MAX),
  comments: getRandomPositiveInteger(COMMENTS_MIN, COMMENTS_MAX),
});

const createPhotos = () => Array.from({ length: PHOTO_INFO_COUNT }, createPhoto);

export { createPhotos };
