const body = document.querySelector('.body');
const btn = document.querySelector('.btn');
let startTime;
let endTime;
let result = true;
let succeed = false;

const startChangeColor = () => {
  if (result) {
    body.classList.add('colored');
    startTime = performance.now();
  }
};

function gameStart() {
  const time = Math.floor(Math.random() * 3000);
  setTimeout(() => startChangeColor(), time);
}
body.addEventListener('onload', gameStart());

body.addEventListener('click',
  (e) => {
    endTime = performance.now();
    console.log('end', endTime);
    btn.style.display = 'inline-block';
    if (e.target.classList.contains('btn')) {
      body.classList.remove('colored');
      result = true;
      succeed = false;
      btn.style.display = 'none';
      gameStart();
    }
    if (!body.classList.contains('colored') && !e.target.classList.contains('btn')) {
      result = false;
      alert('還沒變色喔 ~ 失敗!');
    } else if (!succeed && !e.target.classList.contains('btn')) {
      alert(`你的成績 : ${((endTime - startTime) / 1000).toFixed(2)} 秒`);
      succeed = true;
    }
  });
