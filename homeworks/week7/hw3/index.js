
const wrap = document.querySelector('.wrapper');
let dot = false;
// const num = [];
let num1 = '';
let num2 = '';
let operator = '';

const remove0 = (str) => {
  if (str[0] !== '0' || str.length < 2) return str;
  const newStr = str;
  return newStr.slice(1);
};

const numOnScreen = (e, number) => {
  const screen = document.querySelector('#screen');
  let screenNum = number;
  const num = e.target.getAttribute('data-value');
  if (num === '0' && screenNum === '0') console.log('only 0');
  else if (num === '.') {
    if (!dot) screenNum += (e.target.getAttribute('data-value'));
    dot = true;
  } else {
    screenNum += (e.target.getAttribute('data-value'));
  }
  screen.innerText = remove0(screenNum);
};

const clearScreen = () => {
  document.querySelector('#screen').innerText = '0';
  dot = false;
};

const calculate = (a, b, meth) => {
  num1 = Number(a);
  num2 = Number(b);
  if (meth === 'plus') return num1 + num2;
  if (meth === 'minus') return num1 - num2;
  if (meth === 'mult') return num1 * num2;
  return num2 === 0 ? 'Error!' : (num1 / num2).toFixed(5);
};

wrap.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    const screen = document.querySelector('#screen');
    const number = screen.innerText;
    if (e.target.id === 'ac') {
      operator = '';
      clearScreen();
    } else if (e.target.id === 'del') {
      const newnum = number.slice(0, -1);
      if (number.slice(-1) === '.') dot = false;
      screen.innerText = newnum.length > 0 ? newnum : '0';
    } else if (e.target.classList.contains('num')) numOnScreen(e, number);
    else if (e.target.classList.contains('operator')) {
      dot = false;
      if (operator === '') num1 = number;
      operator = e.target.id;
      clearScreen();
    } else if (e.target.id === 'equal') {
      num2 = number;
      console.log('num2', num2);
      console.log('num1', num1);
      console.log('opera', operator);
      dot = false;
      document.querySelector('#screen').innerText = calculate(num1, num2, operator);
    }
  }
});
