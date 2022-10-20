const PHOTO_INFO_COUNT = 25;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function checkLengthString(string, maxLength) {
  const strLength = string.length;
  return strLength <= maxLength;
}

checkLengthString(2, 5);

const createPhotoInfo = () => ({
  id: getRandomPositiveInteger(1, 25),
  url: `photos/${getRandomPositiveInteger(1, 25)}.jpg`,
  description: 'Лучшее фото в мире',
  likes: getRandomPositiveInteger(15, 200),
  comments: getRandomPositiveInteger(0, 200),
});

const infoPhotos = Array.from({ length: PHOTO_INFO_COUNT }, createPhotoInfo);

console.log(infoPhotos);
