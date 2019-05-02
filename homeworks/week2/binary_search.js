// https://blog.techbridge.cc/2016/09/24/binary-search-introduction/
function search(array, target) {
  let L = 0;
  let R = array.length - 1;
  while (L <= R) {
    const M = Math.floor((L + R) / 2);
    if (array[M] === target) {
      return M;
    } if (array[M] > target) {
      R = M - 1;
    } else {
      L = M + 1;
    }
  }
  return -1;
}

const arr = [];
for (let i = 0; i < 1900000; i += 1) arr.push(i);
// const arr2 = [1, 6, 11, 13,14,16,17,30,32,32,34,36,40,40,41,42,47];
console.time('Loop time');
for (let j = 0; j < 1000; j++) {
  for (let i = 0; i < 5000; i++) {
    search(arr, 16);
    search(arr, 10000003);
    // search(arr, 16);
    // search(arr, 100003);
    // search([1, 3, 10, 14, 39], 1);
    // search([1, 3, 10, 14, 39], 7);
  }
}
console.log('normal function');
console.timeEnd('Loop time');
// console.log(search(arr, 10000003));
// console.log(search([1, 3, 10, 14, 39], 1));
// console.log(search([1, 3, 10, 14, 39], 299));
