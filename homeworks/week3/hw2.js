function alphaSwap(str) {
  return str.split('').map(char => char[(char >= 'a' && char <= 'z') ? 'toUpperCase' : 'toLowerCase']()).join('');
}

module.exports = alphaSwap;
