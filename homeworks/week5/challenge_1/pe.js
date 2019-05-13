function sumOfFactor(n) {
  let m = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      m += i;
      m += n / i;
    }
  }
  return m;
}
function pe(n) {
  // if (n < 2 && n > 1000000) return '0'
  const m = sumOfFactor(n);
  if (m === n) return `=${n}`;
  if (sumOfFactor(m) === n) return m.toString();
  return '0';
}

module.exports = pe;
