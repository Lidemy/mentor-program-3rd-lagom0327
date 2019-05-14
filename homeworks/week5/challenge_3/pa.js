function pa(str) {
  const sum = str.split('').map(el => Number(el)).reduce((acu, arr) => acu + arr);
  return (sum > 9) ? pa(sum.toString()) : `${sum}, ${sum === 2 ? 'Yes' : 'No'}`;
}
/*
pa('19950527') => 2, Yes
pa('19971205') => 7, No
pa('19960913') => 2, Yes
*/
console.log(pa('19950527'));
console.log(pa('19971205'));
console.log(pa('19960913'));
