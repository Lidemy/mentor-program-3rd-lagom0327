const messages = document.querySelector('.messages');
const usersTable = document.querySelector('.users_table');
let originTarget;
let originText = '';

function getCookie(cname) {
  const name = cname.concat('=');
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

const userId = Number(getCookie('user_id'));

const toggleShowBtn = (div) => {
  $(div).find('.message__edite:first').toggleClass('hidden');
};

const printAddCommentFram = (target) => {
  toggleShowBtn(target.closest('.message_edite_wrapper'));
  const section = document.createElement('section');
  $(section).addClass('comment_board');
  section.innerHTML = `    
  <form method='POST' action ='handle_add_child.php'>
  <div class='comment_board_intput'>
  <input type='hideen' name='parentId' value=${target.dataset.id} >
  <textarea name='content' rows='5' placeholder='What do you want to say ?' required></textarea>
  </div>
  <input type='submit' class='add_sub_commit_btn btn' value='Send' />
</form>`;
  target.closest('.message').appendChild(section);
};

const changeEditeFrame = (type, e) => {
  const showEditeFrame = (btn) => {
    const printEditeUserForm = (data, selector, text) => {
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

    const printEditeMessForm = (node, selector, text) => {
      const newNode = node;
      newNode.querySelector(selector[1]).outerHTML = `
      <form method='POST' action='handle_edite.php?id=${btn.dataset.id}'>
        <textarea name='content' rows='5' class='edite_comment__board' required>${text}</textarea>
        <p>按下 Esc 可取消</p>
        <button type='submit' class='btn edite__send_btn icon' ></button>
      </form>`;
    };

    const selector = (type === 'user') ? ['.user_data', '.permission__th'] : ['.message', 'p'];
    const data = btn.closest(selector[0]);
    toggleShowBtn(data);
    const text = data.querySelector(selector[1]).innerHTML;
    if (type === 'user') {
      printEditeUserForm(data, selector, text);
    } else {
      printEditeMessForm(data, selector, text);
    }
    return text;
  };

  const reinstate = () => {
    const reverseShowEditeFrame = (target, text) => {
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

    if (!originTarget) return null;
    if (originTarget.classList.contains('edite_btn')) return reverseShowEditeFrame(type, originTarget, originText);
    if (originTarget.classList.contains('add_btn')) return reverseShowAddFrame(originTarget);
    return null;
  };

  if (e.target.classList.contains('edite_btn')) {
    reinstate(type);
    originTarget = e.target;
    originText = showEditeFrame(type, e.target);
  } else if (e.target.classList.contains('add_btn')) {
    reinstate(type);
    originTarget = e.target;
    printAddCommentFram(e.target);
    originText = '';
  }
  window.addEventListener('keydown',
    (el) => {
      if (el.keyCode === 27) {
        reinstate(type);
        originTarget = null;
      }
    });
};

const whenError = (obj) => {
  console.log('error', obj);
  alert('發生錯誤: ', obj.status);
};

const showAlert = (message) => {
  const div = `<div class="alert">${message}</div>`;
  $('body').prepend(div);
};

const hiddenAlert = () => {
  $('.alert').remove();
};

const reRenderMessages = () => {
  const page = $('.page_btn.active').data('page');

  const createEditeSectionHtml = (data) => {
    if (data.user_id !== userId) return '';
    return `
    <div class="message__edite">
    <button class="edite_btn btn icon" title="edite" data-id="${data.id}"></button>
    <button title="delete" class="btn delete_btn icon" data-id="${data.id}" data-type="comment"></button>
    </div>`;
  };

  const createChildMessHtml = (nthData, parentId) => {
    let str = '';
    if (!nthData.sub) return str;
    nthData.sub.forEach((e) => {
      const sameAuthor = e.user_id === parentId ? 'author' : '';
      str += `
      <div class="child_message message ${sameAuthor}">
      <header>
      <h4 class="message__nickname">From: ${e.nickname}</h4>
      <h4 class="message__time">${e.created_at}</h4>
      </header>
      <p>${e.content}</p>
      ${createEditeSectionHtml(e)}
      </div>`;
    });
    return str;
  };

  const replaceMessages = (data) => {
    $('.messages > .message').each((index, el) => {
      const str = `
      <header>
        <h3 class="message__nickname">From: ${data[index].main.nickname}</h3>
        <h4 class="message__time">${data[index].main.created_at}</h4>
      </header>
      <p>${data[index].main.content}</p>
      ${createEditeSectionHtml(data[index].main)}
      ${createChildMessHtml(data[index], data[index].main.user_id)}
      <div class="message_edite_wrapper">
        <div class="message__edite">
          <button class="add_btn btn icon" title="Add Comment" data-id="${data[index].main.id}"></button>
        </div>
      </div>`;
      $(el).html(str);
    });
  };

  $.ajax({
    type: 'GET',
    url: `./get_comments.php?page=${page}`,
    dataType: 'json',
    error: jqXHR => whenError(jqXHR),
    success: (data) => {
      replaceMessages(data);
      originTarget = null;
      originText = '';
      hiddenAlert();
    },
  });
};

const deleteMess = (target) => {
  const id = $(target).data('id');
  const url = './handle_delete_comment.php?id='.concat(id);
  $.ajax({
    type: 'DELETE',
    url,
    dataType: 'json',
    data: 'id',
    error: jqXHR => whenError(jqXHR),
    success: () => {
      showAlert('Under processing');
      reRenderMessages();
    },
  });
};

const addChildMess = (target) => {
  $.ajax({
    type: 'POST',
    url: './handle_add_child.php',
    dataType: 'json',
    data: $(target).closest('form').serialize(),
    error: jqXHR => whenError(jqXHR),
    success: () => {
      showAlert('Sending ...');
      reRenderMessages();
    },
  });
};

if (messages) {
  messages.addEventListener('click',
    (e) => {
      if ($(e.target).hasClass('delete_btn')) deleteMess(e.target);
      else if ($(e.target).hasClass('add_sub_commit_btn')) {
        e.preventDefault();
        addChildMess(e.target);
      }
      changeEditeFrame('message', e);
    });
} else if (usersTable) {
  usersTable.addEventListener('click',
    (e) => {
      changeEditeFrame('user', e);
    });
}

$('.comment_board_btn').click((e) => {
  const addMainMess = () => {
    $.ajax({
      type: 'POST',
      url: './handle_add.php',
      dataType: 'json',
      data: $('.comment_board form').serialize(),
      error: jqXHR => whenError(jqXHR),
      success: () => {
        $('.comment_board_text').val('');
        showAlert('Sending ...');
        reRenderMessages();
      },
    });
  };

  e.preventDefault();
  addMainMess();
});
