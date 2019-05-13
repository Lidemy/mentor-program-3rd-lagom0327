function pd(volume) {
  let remainV = volume;
  const buckets = [27, 9, 3, 1];

  return buckets.reduce((acu, bucket) => {
    const times = Math.floor(remainV / bucket);
    remainV -= bucket * times;
    return acu + times;
  }, 0);
}
// 1 公升、3 公升、9 公升、27 公升
/* pd(1) => 1
pd(29) => 3
pd(100) => 6 */
console.log(pd(1));
console.log(pd(29));
console.log(pd(100));
