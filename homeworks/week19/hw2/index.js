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

const whenError = (obj) => {
  console.log('error', obj.responseText);
  alert('發生錯誤: ', obj.responseText);
};

const render = () => {
  const template = (item) => {
    const checked = item.is_completed ? 'checked="checked"' : '';
    return `<li class='col-12 todo__item' data-id=${item.id}>
      <label class=''> 
      <input type='checkbox' ${checked}> <p>${item.content}</p>
      <i class="fas fa-square checkmark"></i>
      <i class="fas fa-check-square checkmark--checked"></i>
    </label>
    <button class="todo__item__delete_btn"><i class="fas fa-times"></i></button>
  </li>`;
  };

  // 進度條
  // https://jsnwork.kiiuo.com/archives/2468/css-%E9%80%B2%E5%BA%A6%E6%A2%9D%E5%8B%95%E7%95%AB%E8%A8%AD%E8%A8%88/
  const setPbar = (val) => {
    const num = val > 100 ? 100 : val;
    $('.pbar').find('.progress').css('width', `${num}%`);
  };

  // 從 API 利用 session 拿到該使用者的資料
  const getTodoList = () => {
    const url = './todoList.php';
    $.ajax({
      type: 'GET',
      url,
      dataType: 'json',
      error: jqXHR => whenError(jqXHR),
      success: (res) => {
        let list = res;
        if (list.length !== 0) {
          const finishedList = list.filter(e => !e.data.is_deleted && e.data.is_completed);
          setPbar(finishedList.length * 100 / list.length);
        }

        if ($('.pickedTag').data('tag') === 'finished') {
          list = list.filter(item => item.data.is_completed);
        } else if ($('.pickedTag').data('tag') === 'unfinished') {
          list = list.filter(item => !item.data.is_completed);
        }
        $('.todo__items').empty();
        list.forEach((item) => {
          if (item.data.is_completed) $('.todo__items').append(template(item.data));
          else { $('.todo__items').prepend(template(item.data)); }
        });
      },
    });
  };

  getTodoList();
};

const renderTag = (target) => {
  $('.tag button').removeClass('pickedTag');
  $(target).addClass('pickedTag');
};

const addToDoItem = (content) => {
  if (content === '') return;
  const data = {
    userId: getCookie('user_id'),
    content,
  };
  $.ajax({
    type: 'POST',
    url: './todoList.php',
    dataType: 'json',
    data,
    error: jqXHR => whenError(jqXHR),
    success: () => {
      if ($('.pickedTag').data('tag') === 'finished') {
        renderTag($('.tag-all'));
      }
      render();
      $('.todo__add_input').val('');
    },
  });
};

const changeChecked = (id) => {
  $.ajax({
    type: 'POST',
    url: './todoList.php',
    dataType: 'json',
    data: { id },
    error: jqXHR => whenError(jqXHR),
    success: () => {
      render();
    },
  });
};

const deleteToDoItem = (id) => {
  $.ajax({
    type: 'DELETE',
    url: `./todoList.php?id=${id}`,
    dataType: 'json',
    error: jqXHR => whenError(jqXHR),
    success: () => {
      render();
    },
  });
};

const editeToDoItem = (id, content) => {
  $.ajax({
    type: 'POST',
    url: './todoList.php',
    dataType: 'json',
    data: {
      id,
      content,
    },
    error: jqXHR => whenError(jqXHR),
    success: () => {
      render();
    },
  });
};

let timefn = null;
$(document).ready(() => {
  $('.todo').hide();
  if (getCookie('user_id')) {
    render();
    $('.todo').show();
  }

  $('.todo__add_input ~ button').click(() => {
    addToDoItem($('.todo__add_input').val());
  });
  $('.todo__add_input').keyup((e) => {
    if (e.keyCode === 13) addToDoItem($('.todo__add_input').val());
  });

  $('.tag').click((e) => {
    if (e.target.closest('button')) {
      renderTag(e.target.closest('button'));
      render();
    }
  });

  $('.todo__items').on('click', (e) => {
    if ($(e.target).closest('.todo__item__delete_btn').length) {
      deleteToDoItem($(e.target).closest('.todo__item').data('id'));
    } else if (e.target.type === 'checkbox') {
      // 因為用 label 綁定很多元素 input, p, i，點一次會觸發兩次，其中一次一定是 input[type='checkbox']
      // 取消上次單擊時 延時未執行的函式
      clearTimeout(timefn);
      // 單擊事件要執行的功能
      timefn = setTimeout(() => {
        changeChecked($(e.target).closest('.todo__item').data('id'));
      }, 300);
    }
  });
  $('.todo__items').on('dblclick', (e) => {
    if (e.target.nodeName === 'P') {
      // 取消上次單擊時 延時未執行的函式
      clearTimeout(timefn);

      const oldHtml = $(e.target).text();
      const newInput = document.createElement('input');
      const id = $(e.target).closest('.todo__item').data('id');
      newInput.type = 'text';
      newInput.value = oldHtml;
      $(newInput).addClass('todo__item_input-edite');
      $(e.target).replaceWith(newInput);
      newInput.focus();
      newInput.setSelectionRange(0, oldHtml.length);
      const send = () => {
        if (newInput.value !== oldHtml) editeToDoItem(id, newInput.value);
        else render();
      };

      $(newInput).blur(() => {
        send();
      });
      $(newInput).keyup((event) => {
        if (event.keyCode === 13) send();
      });
    }
  });

  $('.navbar__signin').click(() => {
    $('.container.todo').hide();
    $('.container.login').hide();
    $('.container.register').show();
  });
  $('.navbar__login').click(() => {
    $('.container.todo').hide();
    $('.container.register').hide();
    $('.container.login').show();
  });
});


// 登入功能
const sendRequest = (method, target) => {
  const url = $(target).closest('form').attr('action');
  $.ajax({
    type: method,
    url,
    dataType: 'json',
    data: $(target).closest('form').serialize(),
    error: jqXHR => whenError(jqXHR),
    success: (res) => {
      alert(res);
      if (getCookie('user_id')) {
        $('.navbar div').hide();
        $('.navbar__logout').show();
        $('.container.login').hide();
        $('.container.register').hide();
        $('.container.todo').show();
        render();
      } else {
        $('.container.login').show();
        $('.container.register').hide();
        $('.container.login input:not([type="submit"])').val('');
      }
    },
  });
};

$(document).ready(() => {
  $('.container.login form').on('submit', (e) => {
    e.preventDefault();
    sendRequest('POST', e.target);
  });

  $('.container.register form').on('submit', (e) => {
    e.preventDefault();
    sendRequest('POST', e.target);
  });
  if (getCookie('user_id')) {
    $('.navbar div').hide();
    $('.navbar__logout').show();
  }
});
