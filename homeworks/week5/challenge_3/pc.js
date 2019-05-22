function pc(str) {
  const arr = str.split(' ').map(el => Number(el)).sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) if (arr[i + 1] - arr[i] !== arr[i + 2] - arr[i + 1]) return 'No';
  return 'Yes';
}
console.log(pc('2 3 1 4'));
console.log(pc('2 3 1 5'));
