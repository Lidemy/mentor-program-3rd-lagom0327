// from array.method
// const search = (arr, n) => arr.indexOf(n);
const search = (arr, n) => {
  let i = 0;
  const maxTimes = Math.floor(Math.log2(arr.length)) + 1;// >> can't be used
  let range = Math.floor(arr.length / 2);// remained range will be used
  let index = range;// index of first time
  while (arr[index] !== n && i <= maxTimes) {
    range = Math.floor(range / 2);
    // console.log('array[',index,'] = ', arr[index])
    if (range === 0) range = 1;// range can not be 0
    if (n > arr[index]) index += range;// the index will be check at next loop
    else index -= range;
    i += 1;
  }
  if (i <= maxTimes) return index;
  return -1;
};

const arr = [];
for (let i = 0; i < 1900000; i += 1) arr.push(i);
// const arr2 = [1, 6 , 11,13,14,16,17,30,32,32,34,36,40,40,41,42,47];
console.time('Loop time');
for (let j = 0; j < 1000; j++) {
  for (let i = 0; i < 5000; i++) {
    // search(arr2, 16);
    // search(arr2, 18);
    search(arr, 16);
    search(arr, 10000003);
    // search([1, 3, 10, 14, 39], 1);
    // search([1, 3, 10, 14, 39], 7);
  }
}
console.log('my function');
console.timeEnd('Loop time');
// console.log(search(arr, 16));
// console.log(search(arr, 10000003));
// console.log(search([1, 3, 10, 14, 39], 1));
// console.log(search([1, 3, 10, 14, 39], 299));
