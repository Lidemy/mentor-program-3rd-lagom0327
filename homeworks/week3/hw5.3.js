function add(a, b) {
  const maxLength = a.length > b.length ? a.length : b.length;
  const arrAdd = [];
  let overflow = 0; // 溢位使用
  for (let i = 0; i < maxLength; i++) {
    let ad = parseInt((a[a.length - 1 - i] ? a[a.length - 1 - i] : '0'), 10) + parseInt((b[b.length - 1 - i] ? b[b.length - 1 - i] : '0'), 10) + overflow;
    // from yakim-shu week3 hw5
    overflow = ad > 9 ? 1 : 0;
    ad %= 10;
    arrAdd.unshift(ad);
  }
  if (overflow === 1) arrAdd.unshift('1');
  return arrAdd.join('');
}

module.exports = add;
