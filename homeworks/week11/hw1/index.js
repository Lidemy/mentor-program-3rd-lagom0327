const messages = document.querySelector('.messages');
const usersTable = document.querySelector('.users_table');

let originTarget;
let originText = '';

const toggleShowBtn = (div) => {
  div.querySelector('.message__edite').classList.toggle('hidden');
};

const printEditeUserForm = (data, selector, btn, text) => {
  const newData = data;
  newData.querySelector(selector[1]).innerHTML = `
  <form class='edite__user' method='POST' action='handle_edite_user.php?id=${btn.dataset.id}'>
    <select name='permissionOption'>
      <option ${(text === 'normal') ? 'selected' : ''} value='normal'>normal</option>
      <option ${(text === 'admin') ? 'selected' : ''} value='admin'>admin</option>
    </select>
    <button type='submit' class='btn edite__send_btn icon' ></button>
  </form>`;
};

const printEditeMessForm = (data, selector, btn, text) => {
  const newData = data;
  newData.querySelector(selector[1]).outerHTML = `
  <form method='POST' action='handle_edite.php?id=${btn.dataset.id}'>
    <textarea name='content' rows='5' class='edite_comment__board' required>${text}</textarea>
    <p>按下 Esc 可取消</p>
    <button type='submit' class='btn edite__send_btn icon' ></button>
  </form>`;
};

const showEditeFrame = (type, btn) => {
  const selector = (type === 'user') ? ['.user_data', '.permission__th'] : ['.message', 'p'];
  const data = btn.closest(selector[0]);
  toggleShowBtn(data);
  const text = data.querySelector(selector[1]).innerHTML;
  if (type === 'user') {
    printEditeUserForm(data, selector, btn, text);
  } else {
    printEditeMessForm(data, selector, btn, text);
  }
  return text;
};

const reverseShowEditeFrame = (type, target, text) => {
  const selector = (type === 'user') ? ['.user_data', '.permission__th'] : ['.message', 'form'];
  const data = target.closest(selector[0]);
  toggleShowBtn(data);
  if (type === 'user') data.querySelector(selector[1]).innerHTML = `${text}`;
  else data.querySelector(selector[1]).outerHTML = `<p>${text}</p>`;
};

const changeForm = (type, e) => {
  if (e.target.classList.contains('edite_btn')) {
    if (originTarget) reverseShowEditeFrame(type, originTarget, originText);
    originTarget = e.target;
    originText = showEditeFrame(type, e.target);
  }
  window.addEventListener('keydown',
    (el) => {
      if (el.keyCode === 27 && originTarget) {
        reverseShowEditeFrame(type, originTarget, originText);
        originTarget = null;
        originText = '';
      }
    });
};

if (messages) {
  messages.addEventListener('click',
    (e) => {
      changeForm('message', e);
    });
} else if (usersTable) {
  usersTable.addEventListener('click',
    (e) => {
      changeForm('user', e);
    });
}
