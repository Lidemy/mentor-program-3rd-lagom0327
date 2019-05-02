function reverse(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) newStr += str[str.length - 1 - i];
  return newStr;
}
function sort(a, b) {
  return a.length > b.length ? [a, b] : [b, a];
}
function sameLength(num) {
  const newNum = [num[0]];
  newNum[1] = '0'.repeat(num[0].length - num[1].length) + num[1];
  return newNum;
}
function add(a, b) {
  let str = '';
  let num = sort(a, b);
  num = sameLength(num);
  let overflow = 0;
  for (let i = num[0].length - 1; i >= 0; i--) {
    const ad = parseInt(num[0][i], 10) + parseInt((num[1][i]), 10) + overflow;
    if (ad > 9) {
      str += (ad - 10).toString();
      overflow = 1;
    } else {
      str += ad.toString();
      overflow = 0;
    }
  }
  if (overflow === 1) str += '1';
  str = reverse(str);
  return str;
}

module.exports = add;
