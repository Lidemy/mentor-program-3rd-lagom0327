function pf(str) {
  const arr = str.split(' ').map(el => Number(el));
  return ((arr[3] - arr[1]) * (arr[4] - arr[0]) / (arr[2] - arr[0]) + arr[1]) === (arr[5]) ? 'NO' : 'YES';
}
/*
pf('1 3 2 6 3 9') => NO
pf('55 -25 0 0 1 2') => YES
pf('1 1 -4 16 4 -8') => NO
*/
console.log(pf('1 3 2 6 3 9'));
console.log(pf('55 -25 0 0 1 2'));
console.log(pf('1 1 -4 16 4 -8'));
