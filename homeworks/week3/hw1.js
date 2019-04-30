const makeStars = (n) => {
  let str = '';
  for (let i = 0; i < n; i++) str += '*';
  return str;
};
function stars(n) {
  return Array(n).fill(0).map((value, index) => makeStars(index + 1));
  /* let arr = [];
  for ( let i = 1; i <= n; i++) {
    arr[i -1 ]= makeStars(i);
  }
  return arr; */
}

// console.log(stars(3));
module.exports = stars;
