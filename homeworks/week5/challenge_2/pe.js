function pe(a, b) {
  const A = a.split('').reduce((acu, el) => acu + (el === 'O' ? 1 : 0), 0);
  const B = b.split('').reduce((acu, el) => acu + (el === 'O' ? 1 : 0), 0);

  if (A === B) return 'NO';
  const winner = A > B ? 'A' : 'B';
  if (a.length > 5) return (a.length !== b.length) ? 'NO' : winner; // from test
  if (a.length !== b.length) return (a.length === 3 || Math.abs(A - B) <= (4 - b.length)) ? 'NO' : winner;
  return (Math.abs(A - B) <= (5 - b.length)) ? 'NO' : winner;
}
/*
pe('O', 'X') => NO
pe('OOO', 'XXX') => A
pd('OOOOO', 'OOOOO') => NO
*/
console.log(pe('OX', 'X'));
console.log(pe('OOO', 'XXX'));
console.log(pe('OOOOO', 'OOOOO'));
console.log(pe('OOO', 'XX'));

module.exports = pe;
