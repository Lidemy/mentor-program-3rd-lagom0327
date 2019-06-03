const bg = document.querySelector('.bg');
const btn = bg.querySelector('.btn');
let startTime;
let endTime;
let ifFall = false;
let succeed = false;
let ifColored = false;
const name = ['金在奐', 'TWICE', 'DreamNote', '尹智聖', 'EXID', 'GFRIEND', 'OH MY GIRL'];
const colorCollection = [['#48A9C5', '#A0D1CA', '#B4B5DF'], ['#FF5FA2', '#ECCBA6'], ['#00B0A3', '#FFCB05'], ['#5DDBD3', '#DDE4E6', '#EEBAE9'], ['#7474C1', '#E06287', '#F1E6B2'], ['#5F4B8B', '#00ABC0', '#F0EEE9'], ['#F4A6D7', '#9ADBE8', '#EEE29F']];
// https://www.dcard.tw/f/entertainer/p/229848093
const func = [
  ['-webkit-linear-gradient', ['left', 'right', 'left top', 'left bottom', 'right top', 'right bottom']],
  ['-webkit-radial-gradient', ['circle', 'ellipse']]];


const selectColor = () => {
  const numForColor = Math.floor(Math.random() * colorCollection.length);
  const numForFunc = Math.floor(Math.random() * func.length);
  const numForType = Math.floor(Math.random() * func[numForFunc][1].length);
  return [`${func[numForFunc][0]}(${func[numForFunc][1][numForType]}, ${colorCollection[numForColor]})`, colorCollection[numForColor][0], colorCollection[numForColor][1], numForColor];
};

console.log(selectColor('btn-bg'));
console.log(selectColor('border-bg'));

const changeColor = (color) => {
  if (!ifFall) {
    // bg.classList.add('colored');
    bg.style.background = `${color[0]}`;
    startTime = performance.now();
    ifColored = true;
    bg.querySelector('.who').innerText = `這是 ${name[color[3]]} 的應援色`;
  }
};

function gameStart() {
  const time = Math.floor(Math.random() * 3000);
  const colorResult = selectColor();
  // const who = document.createTextNode(`這是 ${name[colorResult[3]]} 的應援色`);
  btn.style.background = `${colorResult[1]}`;
  btn.style.borderColor = `${colorResult[2]}`;
  setTimeout(() => changeColor(colorResult), time);
  bg.querySelector('.who').innerText = '';
}

bg.addEventListener('onload', gameStart());

bg.addEventListener('click',
  (e) => {
    endTime = performance.now();
    btn.classList.add('show_btn');
    if (e.target.id === 'btn') {
      ifFall = false;
      succeed = false;
      ifColored = false;
      bg.style.background = 'grey';
      btn.classList.remove('show_btn');
      gameStart();
    }
    if (!ifColored && e.target.id !== 'btn') {
      ifFall = true;
      alert('還沒變色喔 ~ 失敗!');
    } else if (!succeed && e.target.id !== 'btn') {
      alert(`你的成績 : ${((endTime - startTime) / 1000).toFixed(2)} 秒`);
      succeed = true;
    }
  });
