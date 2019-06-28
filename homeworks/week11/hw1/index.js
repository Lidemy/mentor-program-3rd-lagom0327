const editeBtn = document.querySelector('.edite_btn');
const hiddenBtn = (div) => {
  const section = div;
  section.querySelector('.message__edite').style.display = 'none';
};
const showEditeFrame = (btn) => {
  const message = btn.closest('.message');
  hiddenBtn(message);
  const text = message.querySelector('p').innerHTML;
  message.querySelector('p').outerHTML = `
  <form method='POST' action='handle_edite.php?id=${btn.dataset.id}'>
    <textarea name='content' rows='10'  required>${text}</textarea>
    <input type='submit' class='btn' value='送出' />
  </form>`;
  console.log(text);
};

editeBtn.addEventListener('click',
  (e) => {
    console.log(e.target);
    showEditeFrame(e.target);
  });
