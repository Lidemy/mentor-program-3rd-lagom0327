function reverse(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) newStr += str[str.length - 1 - i];
  return newStr;
}
function sort(a, b) {
  if (a.length > b.length) return [a, b];
  return [b, a];
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
  let resume = 0;
  for (let i = num[0].length - 1; i >= 0; i--) {
    const ad = parseInt(num[0][i], 10) + parseInt((num[1][i]), 10) + resume;
    if (ad > 9) {
      str += (ad - 10).toString();
      resume = 1;
    } else {
      str += ad.toString();
      resume = 0;
    }
  }
  if (resume === 1) str += '1';
  str = reverse(str);
  return str;
}

module.exports = add;
