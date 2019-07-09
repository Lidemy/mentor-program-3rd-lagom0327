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

const printAddCommentFram = (target) => {
  toggleShowBtn(target.closest('.message_edite_wrapper'));
  const section = document.createElement('section');
  section.classList.add('comment_board');
  section.innerHTML = `    
  <form method='POST' action ='handle_add_child.php'>
  <div class='comment_board_intput'>
  <input name='parentId' value=${target.dataset.id} >
  <textarea name='content' rows='5' placeholder='What do you want to say ?' required></textarea>
  </div>
  <input type='submit' class='btn' value='Send' />
</form>`;
  target.closest('.message').appendChild(section);
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

const reverseShowAddFrame = (target) => {
  const board = target.closest('.message').querySelector('.comment_board');
  board.outerHTML = '';
  toggleShowBtn(target.closest('.message_edite_wrapper'));
};

const reverseOrigin = (type) => {
  if (originTarget) {
    if (originTarget.classList.contains('edite_btn')) reverseShowEditeFrame(type, originTarget, originText);
    else if (originTarget.classList.contains('add_btn')) reverseShowAddFrame(originTarget);
  }
};

const changeForm = (type, e) => {
  if (e.target.classList.contains('edite_btn')) {
    reverseOrigin(type);
    originTarget = e.target;
    originText = showEditeFrame(type, e.target);
  } else if (e.target.classList.contains('add_btn')) {
    reverseOrigin(type);
    originTarget = e.target;
    printAddCommentFram(e.target);
    originText = '';
  }
  window.addEventListener('keydown',
    (el) => {
      if (el.keyCode === 27) {
        reverseOrigin(type);
        originTarget = null;
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
