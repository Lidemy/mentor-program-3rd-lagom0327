const form = document.querySelector('form');
const email = document.querySelector('#q1');
const changeStyle = (text) => {
  const section = text.closest('section');
  if (!section.classList.contains('select_problem')) section.querySelector('.keyin').classList.add('red_line');
  section.classList.add('red_bg');
  section.querySelector('.notation').classList.add('show_notation');
};
const cancelStyle = (text) => {
  const section = text.closest('section');
  if (!section.classList.contains('select_problem')) section.querySelector('.keyin').classList.remove('red_line');
  section.classList.remove('red_bg');
  section.querySelector('.notation').classList.remove('show_notation');
};
// by https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/274717/

function isEmail(strEmail) {
  if (strEmail.search(/^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/) !== -1) {
    cancelStyle(email);
    return true;
  }
  changeStyle(email);
  email.closest('section').querySelector('.notation').innerText = '請輸入有效的電子郵件地址'; // 應要用 classList.add()
  return false;
}

const ifValue = (input) => {
  if (input.id && input.id === 'other');
  else if (!input.value) changeStyle(input);
  else if (input.value) cancelStyle(input);
};
let lastClickInput = '';
form.addEventListener('click',
  (e) => {
    if (e.target.nodeName !== 'INPUT' && lastClickInput !== '') {
      ifValue(form.querySelector(`#${lastClickInput}`));
    }
    if (e.target.nodeName === 'INPUT') {
      if (e.target.id !== lastClickInput && lastClickInput !== '') {
        if (lastClickInput === 'q1') isEmail(email.value);
        else ifValue(form.querySelector(`#${lastClickInput}`));
        if (e.target.id !== 'other') {
          e.target.addEventListener('input',
            (event) => {
              if (e.target.id === 'q1') {
                isEmail(email.value);
              } else ifValue(event.target);
            });
        }
      }
      lastClickInput = e.target.id;
    }
  });

form.addEventListener('submit', (e) => {
  let isOk = true;
  const problem = form.querySelectorAll('input');
  for (let i = 0; i < problem.length - 2; i++) {
    if (i < 2 || i > 3) {
      if (!problem[i].value) {
        isOk = false;
        changeStyle(problem[i]);
      }
    }
  }
  if (problem[0].vaule !== '') {
    if (!isEmail(problem[0].value)) isOk = false;
  }
  if (!problem[2].checked && !problem[3].checked) {
    isOk = false;
    changeStyle(problem[2]);
  }
  if (isOk === true) {
    for (let i = 0; i < problem.length - 1; i++) {
      if (i === 2 || i === 3) {
        if (problem[i].checked) {
          console.log(problem[i].closest('section').children[0].innerText,
            problem[i].closest('.opt').children[1].innerText);
        }
      } else {
        console.log(problem[i].closest('section').children[0].innerText, problem[i].value);
      }
    }
    alert('提交成功');
  } else {
    lastClickInput = '';
    e.preventDefault();
  }
});
