function add0(a, lengthdiff) {
  if (lengthdiff < 0) for (let i = 0; i > lengthdiff; i--) a.unshift('0');
  return a;
}
function add(a, b) {
  const length = a.length > b.length ? a.length : b.length;
  const arrA = add0(a.split(''), a.length - b.length);
  const arrB = add0(b.split(''), b.length - a.length);
  const arrAdd = [];
  let overflow = 0;
  for (let i = length - 1; i >= 0; i--) {
    const ad = parseInt(arrA[i], 10) + parseInt((arrB[i]), 10) + overflow;
    if (ad > 9) {
      arrAdd.unshift(ad - 10);
      overflow = 1;
    } else {
      arrAdd.unshift(ad);
      overflow = 0;
    }
  }
  if (overflow === 1) arrAdd.unshift('1');
  return arrAdd.join('');
}

module.exports = add;
