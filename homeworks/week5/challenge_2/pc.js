function pc(str) {
  const levelArr = str.split(' ');
  const diff = [];
  for (let i = 0; i < levelArr.length - 1; i++) diff.push(levelArr[i + 1] - levelArr[i]);
  return diff.map(el => (el > -1 ? el * 20 : el * -10)).reduce((acu, cur) => acu + cur);
}

/*
pc('2 8 5') => 150
pc('2 9 7 3 4 6 1') => 310
*/
console.log(pc('2 8 5'));
console.log(pc('2 9 7 3 4 6 1'));
