function capitalize(str) {
  const codeAt0 = str.charCodeAt(0);
  let strNew;
  if (codeAt0 >= 'a'.charCodeAt(0) && codeAt0 <= 'z'.charCodeAt(0)) {
    strNew = str.replace(str[0], String.fromCharCode(codeAt0 - 32));
    return strNew;
  } // 字串不能 = str[0] (array)，str[0] = String.fromCharCode(codeAt0-32) 不能用; 所以用replace
  return str;
}
console.log(capitalize(',hello'));
console.log(capitalize('nick'));
