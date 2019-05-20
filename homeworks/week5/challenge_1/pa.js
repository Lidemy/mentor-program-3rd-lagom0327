
function pa(arr) {
  const newArr = arr.map(el => el.split(' '));
  if (newArr.map(el => el[2]).filter(el => el < 0).length === 0) return 'Are you kidding me?';
  const sortArr = [...newArr];
  sortArr.sort((a, b) => Number(a[2]) - Number(b[2]));
  if (sortArr[0][2] === sortArr[1][2]) {
    const result = newArr.filter(el => el[2] === sortArr[0][2]);
    return `${result[0][0]} ${result[0][1]}`;
  }
  return `${sortArr[0][0]} ${sortArr[0][1]}`;
}

pa(['TACO hanon 0', 'peggy Penny 74', 'Debbie MeiMei -66']);
