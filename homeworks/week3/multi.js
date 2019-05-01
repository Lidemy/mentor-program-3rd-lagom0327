const add = require('./hw5_arr');

function multi(a, b) {
  if (a === '0' || b === '0') return '0';
  const arrMult = Array(a.length).fill(0).map(Array(b.length).fill(0));
  // 不用 fill(0) 會出現 [ [ <4 empty items> ], [ <4 empty items> ] ] 後面用push 順序不確定
  // a 為 n 位數形成 n 個陣列 ，兩個陣列相加是答案
  /* 後面的陣列要加 0
     33
    *12
    ----
    066
    33
    ----
    396  */
  for (let i = a.length - 1; i >= 0; i--) {
    let resume = 0;
    for (let j = b.length - 1; j >= 0; j--) {
      const mult = parseInt(a[i], 10) * parseInt((b[j]), 10) + resume;
      if (mult > 9) {
        arrMult[a.length - 1 - i][j] = mult % 10;
        resume = Math.floor(mult / 10);
      } else {
        arrMult[a.length - 1 - i][j] = mult;
        resume = 0;
      }
    }
    if (resume !== 0) arrMult[a.length - 1 - i].unshift(resume);
  }
  /* 後面的陣列補 0
     33
    *12
    ----
     66
    330   */
  for (let i = 1; i <= arrMult.length - 1; i++) {
    for (let j = 0; j < i; j++) arrMult[i].push(0);
  }
  return arrMult.reduce((accu, current) => add(accu, current.join('')), '0');
}

module.exports = multi;
