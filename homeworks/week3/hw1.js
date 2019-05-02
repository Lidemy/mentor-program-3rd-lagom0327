function makeStars(n) {
  let str = '';
  for (let i = 0; i < n; i++) str += '*';
  return str;
}
// 製造 * 字串
function stars(n) {
  return Array(n).fill(0).map((value, index) => makeStars(index + 1));
}
// 將 * 字串填入陣列中

module.exports = stars;
