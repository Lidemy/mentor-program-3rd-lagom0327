function checkLength(arr, N) {
  const arr2 = arr;
  if (arr.length % N === 0) {
    arr2.push(1);
    arr2[arr2.indexOf(Math.max(arr2))] -= 1;
  }
  return arr2; // from test
}
function deleteN(arr, N, K) {
  const arr2 = arr;
  const indexN = [];
  arr.forEach((el, index) => (el % N === 0 ? indexN.push(index) : null));

  if (arr2[arr2.length - 1] + indexN.length > K) return arr; // from test

  indexN.forEach((el) => { // TLE 的重要原因 不要一次只減一個
    arr2[el] -= 1;
  });
  arr2[arr2.length - 1] += indexN.length;
  return arr2;
}
function makeArr(N, M, K) {
  const num = M < K ? M : K;
  const arr2 = Array(Math.ceil(M / num)).fill(0)
    .map((el, index) => ((index <= Math.floor(M / num) - 1) ? el + num : el + (M % num)));
  return deleteN(checkLength(arr2, N), N, K); // from test
}
function longArr(arr, N, K) {
  const arr2 = arr;
  arr2.push(1);
  arr2[0] -= 1;
  return deleteN(checkLength(arr2, N), N, K);
}
function pe(str) {
  /* [N, M, K] = str.split(' ').map(el => Number(el));
  // 解構不能用 npx jest  因為 Cannot find module '@babel/helper-plugin-utils' */
  const strToArr = str.split(' ').map(el => Number(el));
  const N = strToArr[0];
  const M = strToArr[1];
  const K = strToArr[2];

  if (N === 1 || K === 0) return 'IMPORTANT'; // condition !!!! 我以為N >=2..
  if (N === 2 && M % 2 === 0) return 'IMPORTANT';
  if (K === 1 && M % N === 0) return 'IMPORTANT'; // test

  const arr = makeArr(N, M, K);
  const checkN = array => ((array.filter(el => el % N === 0).length === 0)
    ? array.length : checkN(longArr(arr, N, K)));
  return checkN(arr);
}

console.log(pe('1174 53431949 1175'));

module.exports = pe;
