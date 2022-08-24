function mergeSort(array) {
  if (!Array.isArray(array)) return;
  if (array.length === 1) return array;

  // divide
  const midPoint = Math.floor(array.length / 2);
  const arrayLeft = mergeSort(array.slice(0, midPoint));
  const arrayRight = mergeSort(array.slice(midPoint));

  // conquer
  const sortedArray = [];

  while (arrayLeft.length > 0 && arrayRight.length > 0) {
    if (arrayLeft[0] < arrayRight[0]) {
      sortedArray.push(arrayLeft[0]);
      arrayLeft.shift();
    } else {
      sortedArray.push(arrayRight[0]);
      arrayRight.shift();
    }
  }

  if (arrayLeft.length > 0) {
    sortedArray.push(...arrayLeft);
  } else if (arrayRight.length > 0) {
    sortedArray.push(...arrayRight);
  }

  return sortedArray;
}

console.log(mergeSort([912, 654, 321, 242, 888]))