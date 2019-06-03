// const submit = document.querySelector('#submit');
const form = document.querySelector('form');
// const section = document.querySelectorAll('.problem');
const changeStyle = (text) => {
  const section = text.closest('section');
  if (!section.classList.contains('select_problem')) section.querySelector('.keyin').classList.add('red_line');
  section.classList.add('red_bg');
  // e.preventDefault();
  section.querySelector('.notation').classList.add('show_notation');
};

form.addEventListener('submit', (e) => {
  let isOk = true;
  // const problem = document.querySelectorAll('input');
  const problem = form.querySelectorAll('input');
  for (let i = 0; i < problem.length - 2; i++) {
    if (i < 2 || i > 3) {
      if (!problem[i].value) {
        isOk = false;
        changeStyle(problem[i]);
      } // e.preventDefault() // notation[i].style.display = 'block';
    }
  }
  // const select = document.querySelectorAll('input[name=class]');
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
  } else e.preventDefault();
});
