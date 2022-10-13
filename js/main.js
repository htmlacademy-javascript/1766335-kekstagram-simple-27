function getRandomInt(min, max) {
  if (
    typeof min === 'number' &&
    typeof max === 'number' &&
    min >= 0 &&
    max >= 0
  ) {
    if (max < min) {
      const temp = min;
      min = max;
      max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return NaN;
  }
}

getRandomInt(1, 10);

function checkLengthString(string, maxLength) {
  const strLength = string.length;
  return strLength <= maxLength;
}

checkLengthString('Hqweqweello', 5);
