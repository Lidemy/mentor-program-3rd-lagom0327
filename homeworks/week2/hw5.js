function join(str, concatStr) {
  let i;
  let newStr = '';
  /* set newStr = str[0] => newStr is an array ,
and newStr.concat is for string, so newStr.concat can't be used
set newStr = str.charAt(0) => in "join(["a", "b", "c"], "!")" ,
str is a array, array can't use str.charAt" */
  if (str.length > 1) {
    for (i = 0; i < str.length - 1; i += 1) {
      newStr = newStr.concat(str[i], concatStr);
    }
    newStr = newStr.concat(str[i]);
    return newStr;
  }
  return str;
}

function repeat(str, times) {
  let newStr = '';
  for (let i = 0; i < times; i += 1) newStr = newStr.concat(str);
  return newStr;
}

console.log(join('a', '!')); // string
console.log(join(['a', 'b', 'c'], '!')); // array
console.log(join([1, 2, 3], ''));
console.log(join(['a', 1, 'b', 2, 'c', 3], ','));
console.log(repeat('a', 5));
console.log(repeat('yoyo', 2));
