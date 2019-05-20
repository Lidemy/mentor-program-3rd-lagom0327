function pd(str) {
  const arr = str.split(' ');
  const diff = arr.map((el, index) => arr[index + 1] - el);
  diff.pop();
  return diff.indexOf(Math.max(...diff)) + 1;
}

console.log(pd('1 3 6 8 9'));
