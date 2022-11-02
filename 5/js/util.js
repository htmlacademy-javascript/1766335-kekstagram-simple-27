const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const checkLengthString = (string, maxLength) => string.length <= maxLength;

checkLengthString(2, 5);

export { getRandomPositiveInteger };
