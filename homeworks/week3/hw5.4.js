function reverse(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) newStr += str[str.length - 1 - i];
  return newStr;
}
function add(a, b) {
  let str = '';
  let overflow = 0;
  const length = a.length > b.length ? a.length : b.length;
  for (let i = 0; i < length; i++) {
    const ad = parseInt((a[a.length - 1 - i] ? a[a.length - 1 - i] : '0'), 10) + parseInt((b[b.length - 1 - i] ? b[b.length - 1 - i] : '0'), 10) + overflow;
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
