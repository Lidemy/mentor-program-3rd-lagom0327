// const submit = document.querySelector('#submit');
const form = document.querySelector('form');
const notation = document.querySelectorAll('.notation');
const section = document.querySelectorAll('.problem');
const redBg = (index) => {
  section[index].style.background = '#fce8e6';
};

form.addEventListener('submit', (e) => {
  let isOk = true;
  const text = document.querySelectorAll('.keyin:not(:last-child)');
  for (let i = 0; i < text.length; i++) {
    if (!text[i].value) {
      isOk = false;
      redBg(i);
      e.preventDefault();
      notation[i].style.display = 'block';
    }
  }
  const select = document.querySelectorAll('input[name=class]');
  if (!select[0].checked && !select[1].checked) {
    isOk = false;
    const selectProblem = document.querySelector('.select_problem');
    selectProblem.style.background = '#fce8e6';
    selectProblem.querySelector('.select__notation').style.display = 'block';
    e.preventDefault();
  }
  // console.log(select[0]);
  if (isOk === true) {
    const input = document.querySelectorAll('input');
    for (let i = 0; i < input.length - 1; i++) {
      if (i === 2 || i === 3) {
        if (input[i].checked) {
          console.log(input[i].closest('section').children[0].innerText,
            input[i].closest('.opt').children[1].innerText);
        }
      } else {
        console.log(input[i].closest('section').children[0].innerText, input[i].value);
      }
    }
    alert('提交成功');
  }
});
