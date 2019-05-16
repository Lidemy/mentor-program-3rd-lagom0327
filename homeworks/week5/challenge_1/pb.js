function pb(M, N) {
  const remove0 = str => (str[0] !== '0' ? str : remove0(str.slice(1)));

  const m = remove0(M);
  const n = remove0(N);

  if (m.length > n.length) return 'Unfair';
  if (m.length < n.length) return 'Fair';

  for (let i = 0; i < n.length; i++) {
    if (m[i] < n[i]) return 'Fair';
    if (m[i] > n[i]) return 'Unfair';
  }
  return 'Fair';
}

// console.log(pb('123', '456'));
// console.log(pb('1', '1'));
console.log(pb('00153', '0232'));

module.exports = pb;
