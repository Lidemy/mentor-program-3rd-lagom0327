function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) newStr += str[i];
  console.log(newStr);
}

reverse('hello');
reverse('yoyoyo');
reverse('1abc2');
reverse('1,2,3,2,1');
