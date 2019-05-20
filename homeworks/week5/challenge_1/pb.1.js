function pb(M, N) {
  if (M.length > N.length) return 'Unfair';
  if (M.length < N.length) return 'Fair';

  const { length } = M.length;
  let result = '';
  let front = 0;
  for (let i = 0; i < length; i++) {
    let dif = Number(M[length - 1 - i]) + front - Number(N[length - 1 - i]);
    front = 0;
    if (dif < 0) {
      dif += 10;
      front = -1;
    }
    result = dif + result;
  }
  result = front + result;
  if (result <= 0) return 'Fair';
  return 'Unfair';
}

console.log(pb('123', '456'));
console.log(pb('3', '3'));
console.log(pb('4550', '456'));
console.log(pb('455', '456'));
console.log(pb('065', '106'));

module.exports = pb;
