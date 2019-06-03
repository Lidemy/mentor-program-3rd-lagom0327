const bg = document.querySelector('.bg');
// console.log('id=text', document.getElementById('text'));
// document.getElementById('text').outerHTML = '<div> outer </div>';
// document.getElementById('text').outerHTML = 'outer';
// console.log('class=bg', document.getElementsByClassName('bg'));
// console.log('select=.bg', document.querySelector('.bg').innerText);
const bg22 = document.querySelector('.bg');
bg22.innerHTML = '<div>button</div>';
// document.querySelector('.bg').innerText = 'inner';
// const allbg = document.querySelectorAll('.bg');
// console.log('selectALL=.bg', allbg );
// console.log('tag=section', document.getElementsByTagName('section')[1]);
const btn = document.querySelector('.btn');
let startTime;
let endTime;
let result = true;
let succeed = false;

const changeColor = () => {
  if (result) {
    bg.classList.add('colored');
    startTime = performance.now();
  }
};

function gameStart() {
  const time = Math.floor(Math.random() * 3000);
  setTimeout(() => changeColor(), time);
}

bg.addEventListener('onload', gameStart());

bg.addEventListener('click',
  (e) => {
    endTime = performance.now();
    console.log('end', endTime);
    btn.style.display = 'inline-block';
    if (e.target.classList.contains('btn')) {
      bg.classList.remove('colored');
      result = true;
      succeed = false;
      btn.style.display = 'none';
      gameStart();
    }
    if (!bg.classList.contains('colored') && !e.target.classList.contains('btn')) {
      result = false;
      alert('還沒變色喔 ~ 失敗!');
    } else if (!succeed && !e.target.classList.contains('btn')) {
      alert(`你的成績 : ${((endTime - startTime) / 1000).toFixed(2)} 秒`);
      succeed = true;
    }
  });
