function pa(price) {
  const priceArr = price.split(' ');
  if (priceArr[0] === priceArr[1]) return 'NO';
  if (priceArr[1] === priceArr[2]) return 'NO';
  if (priceArr[2] === priceArr[0]) return 'NO';
  return 'YES';
}

/* pa('10 10 10') => NO
pa('10 10 20') => NO
pa('20 10 10') => NO
pa('10 30 20') => YES */
console.log(pa('10 10 10') === 'NO');
console.log(pa('10 10 20') === 'NO');
console.log(pa('20 10 10') === 'NO');
console.log(pa('10 30 20') === 'YES');
