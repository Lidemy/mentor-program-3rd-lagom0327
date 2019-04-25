// from array.method
// const search = (arr, n) => arr.indexOf(n);
const search = (arr, n) => {
  let i = 1;
  const maxTimes = Math.floor((arr.length / 2)) + 1;// >> can't be used
  let range = Math.floor(arr.length / 2);// remained range will be used
  let index = range;// index of first time
  while (arr[index] !== n && i <= maxTimes) {
    range = Math.floor(range / 2);
    if (range === 0) range = 1;// range can not be 0
    if (n > arr[index]) index += range;// the index will be check at next loop
    else index -= range;
    i += 1;
  }
  if (i <= maxTimes) return index;
  return -1;
};

console.log(search([1, 3, 10, 14, 39], 14));
console.log(search([1, 3, 10, 14, 39], 299));
