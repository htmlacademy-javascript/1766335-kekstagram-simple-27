function getRandomInt(min, max) {
  if (
    typeof min === "number" &&
    typeof max === "number" &&
    min >= 0 &&
    max >= 0
  ) {
    if (max < min) {
      let temp = min;
      min = max;
      max = temp;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return NaN;
  }
}

getRandomInt(1, 15);

function checkLengthString(string, maxLength) {
  let strLength = string.length;
  if (strLength <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkLengthString("Hello", 5);
