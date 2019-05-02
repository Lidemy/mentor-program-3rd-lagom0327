function add(a, b) {
  const maxLength = a.length > b.length ? a.length : b.length;
  const arrAdd = [];
  let overflow = 0; // 溢位使用
  for (let i = 0; i < maxLength; i++) {
    const ad = parseInt((a[a.length - 1 - i] ? a[a.length - 1 - i] : '0'), 10) + parseInt((b[b.length - 1 - i] ? b[b.length - 1 - i] : '0'), 10) + overflow;
    if (ad > 9) {
      arrAdd.unshift(ad % 10);
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
