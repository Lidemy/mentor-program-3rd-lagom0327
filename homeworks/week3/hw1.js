function makeStars(n) {
  let str = '';
  for (let i = 0; i < n; i++) str += '*';
  return str;
}
function stars(n) {
  return Array(n).fill(0).map((value, index) => makeStars(index + 1));
}

module.exports = stars;
