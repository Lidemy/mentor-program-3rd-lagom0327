const messages = document.querySelector('.messages');
const changePageSession = document.querySelector('.page_btn__section');
let originTarget;
let originText = '';

const toggleShowBtn = (div) => {
  div.querySelector('.message__edite').classList.toggle('hidden');
};

const showEditeFrame = (btn) => {
  const message = btn.closest('.message');
  toggleShowBtn(message);
  const text = message.querySelector('p').innerHTML;
  message.querySelector('p').outerHTML = `
  <form method='POST' action='handle_edite.php?id=${btn.dataset.id}'>
    <textarea name='content' rows='5' class='edite_comment__board' required>${text}</textarea>
    <p>按下 Esc 可取消</p>
    <button type='submit' class='btn edite__send_btn icon' ></button>
  </form>`;
  return text;
  // console.log(text);
};


const reverseShowEditeFrame = (target, text) => {
  const message = target.closest('.message');
  toggleShowBtn(message);
  message.querySelector('form').outerHTML = `<p>${text}</p>`;
};


const changePage = (page) => {
  window.location = `./index.php?page=${page}`;
};

messages.addEventListener('click',
  (e) => {
    if (e.target.classList.contains('edite_btn') && !originTarget) {
      originText = showEditeFrame(e.target);
      originTarget = e.target;
      // isEditNow = true;
    } else if (e.target.classList.contains('edite_btn') && originTarget) {
      reverseShowEditeFrame(originTarget, originText);
      originTarget = e.target;
      originText = showEditeFrame(e.target);
      // isEditNow = false;
    } else if (e.target.nodeName === 'TEXTAREA') {
      e.target.addEventListener('keydown',
        (el) => {
        // console.log(el.keycode)
          if (el.keyCode === 27) {
            reverseShowEditeFrame(originTarget, originText);
            originTarget = null;
            originText = '';
          }
        });
    }
  });

changePageSession.addEventListener('click',
  (e) => {
    if (e.target.classList.contains('page_btn')) changePage(e.target.dataset.page);
  });
