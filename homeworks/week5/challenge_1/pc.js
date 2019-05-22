function pc(str1, str2) {
  return str2.map(el => str1.join('')[el - 1]).join('');
}

console.log(pc(['ab', 'cd', 'ef'], [1, 4])); // => ad
