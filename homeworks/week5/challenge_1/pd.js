function pd(score) {
  const average = score.reduce((acc, cur) => acc + cur) / score.length;
  return score.filter(el => el < average).length;
}
console.log(pd([1, 3, 5])); // 1
