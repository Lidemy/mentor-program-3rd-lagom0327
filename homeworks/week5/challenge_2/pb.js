function pb(str, arr) {
  const index = str.indexOf('#');
  const nameFront = str.slice(0, index);
  const nameBack = str.slice(index + 1);
  return arr.map((el) => {
    const guessFront = el.slice(0, index);
    const guessBack = el.slice(el.length - nameBack.length);
    return (guessFront === nameFront && guessBack === nameBack) ? 'POSSIBLE' : 'IMPOSSIBLE';
  });
}
/*
pb('jam#s', ['john', 'james', 'jam', 'jambus']) =>
['IMPOSSIBLE', 'POSSIBLE', 'IMPOSSIBLE', 'POSSIBLE']
pb('sa#', ['sally', 'sa', 'susan']) => ['POSSIBLE', 'POSSIBLE', 'IMPOSSIBLE']
*/
console.log(pb('jam#s', ['john', 'james', 'jam', 'jambus']));
console.log(pb('sa#', ['sally', 'sa', 'susan']));
console.log(pb('p#', ['pizza', 'pig', 'apple', 'equip']));
console.log(pb('a#a', ['aa', 'baaa', 'aaab', 'aaaaaaaaaaaaaaaaaaaaaaa']));
