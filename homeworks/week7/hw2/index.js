// const submit = document.querySelector('#submit');
const form = document.querySelector('form');
const notation = document.querySelectorAll('.notation');
const section = document.querySelectorAll('.problem');
const redBg = (index) => {
  section[index].style.background = '#fce8e6';
  // console.log(section[index])
};

form.addEventListener('submit', (e) => {
  // console.log('sub');
  const text = document.querySelectorAll('.keyin:not(:last-child)');
  for (let i = 0; i < text.length; i++) {
    if (!text[i].value) {
      redBg(i);
      e.preventDefault();
      // console.log(notation[i])
      notation[i].style.display = 'block';
    }
  }
  const select = document.querySelectorAll('input[name=class]');
  if (!select[0].checked && !select[1].checked) {
    e.preventDefault();
    const selectProblem = document.querySelector('.select_problem');
    selectProblem.style.background = '#fce8e6';
    selectProblem.querySelector('.select__notation').style.display = 'block';
  }
  // alert('提交成功');
});
