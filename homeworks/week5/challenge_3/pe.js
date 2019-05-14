const newNumBigger = (num, N) => (num % N !== 0 ? num : newNumBigger(num + 1));
function delete0(arr) {
  if (arr.filter(el => el === 0).length === 0) return arr;
  const arr2 = arr;
  const indexOf0 = arr2.indexOf(0);
  const indexOfMax = arr.indexOf(Math.max(...arr2));
  arr2[indexOfMax] -= 1;
  arr2[indexOf0] += 1;
  return delete0(arr2);
}
function deleteN(arr, N, K) {
  const indexN = [];
  arr.forEach((el, index) => {
    if (el % N === 0) indexN.push(index);
  });
  if (indexN.length === 0 || (indexN.length === 1 && arr.length === 2)) return arr;
  if (indexN.length % N === 0) return arr;
  const indexMin = arr.indexOf(Math.min(...arr.filter(el => el % N !== 0)));
  // const indexMin = ... 要放在 function 的一開始(最上面)嗎?
  if (arr[indexMin] === K) return arr; // from test
  const arr2 = arr;
  indexN.forEach((el) => {
    arr2[el] -= 1;
  });
  arr2[indexMin] += indexN.length;
  return deleteN(arr2);
}
function makeArr(lengthOfArr, firstN, N, M, K) {
  const notNLength = newNumBigger(lengthOfArr, N);
  let rest = M;
  const arr = Array(notNLength).fill(0).map((el) => {
    if (rest >= firstN) {
      rest -= firstN;
      return el + firstN;
    } if (rest > 0) {
      const temp = rest;
      rest = 0;
      return el + temp;
    }
    return 0;
  });
  return arr.length === 1 ? arr : deleteN(delete0(arr), N, K); // from test
}

function pe(str) {
  /* [N, M, K] = str.split(' ').map(el => Number(el));
  // npx jest 不能用 因為 Cannot find module '@babel/helper-plugin-utils' */
  const strToArr = str.split(' ').map(el => Number(el));
  const N = strToArr[0];
  const M = strToArr[1];
  const K = strToArr[2];

  if (N === 1) return 'IMPORTANT'; // condition !!!! 我以為N >=2
  if (N === 2 && M % 2 === 0) return 'IMPORTANT';
  if (K === 1 && M % N === 0) return 'IMPORTANT'; // test

  const num = M < K ? M : K;
  const length = Math.ceil(M / num);
  const arr = makeArr(length, num, N, M, K);

  const checkN = array => ((array.filter(el => el % N === 0).length === 0)
    ? array.length : checkN(makeArr(array.length + 1, array[0], N, M, K)));

  return checkN(arr);
}

console.log(pe('1174 53431949 1175'));

module.exports = pe;
