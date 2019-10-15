const render = (list) => {
  const template = (item) => {
    const checked = item.isChecked ? 'checked="checked"' : '';
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

  let newList = list.filter(item => !item.isDeleted);
  const totalItem = newList.length;
  if ($('.pickedTag').data('tag') === 'finished') {
    newList = newList.filter(item => item.isChecked);
  } else if ($('.pickedTag').data('tag') === 'unfinished') {
    newList = newList.filter(item => !item.isChecked);
  }
  $('.todo__items').empty();
  newList.forEach((item) => {
    if (item.isChecked) $('.todo__items').append(template(item));
    else { $('.todo__items').prepend(template(item)); }
  });
  setPbar(list.filter(item => !item.isDeleted && item.isChecked).length * 100 / totalItem);
};

const renderTag = (target) => {
  $('.tag button').removeClass('pickedTag');
  $(target).addClass('pickedTag');
};

class List {
  constructor(listName) {
    this.index = 0;
    this.list = [];
    this.listName = listName;
    if (this.listName === 'o') {
      this.index = 3;
      this.list = [
        {
          id: 1, createdAt: new Date(), content: 'hw1', isChecked: false, isDeleted: false,
        }, {
          id: 2, createdAt: new Date(), content: 'hw2', isChecked: true, isDeleted: false,
        }, {
          id: 3, createdAt: new Date(), content: 'hw3', isChecked: true, isDeleted: true, deletedAt: new Date(),
        },
      ];
    }
    render(this.list);
  }

  getList() {
    console.log('list', this.list);
  }

  addToDoItem(content) {
    if (content === '') return;
    const item = {
      id: this.index += 1,
      createdAt: new Date(),
      content,
      isChecked: false,
      isDeleted: false,
    };
    this.list.push(item);
    if ($('.pickedTag').data('tag') === 'finished') {
      renderTag($('.tag-all'));
    }
    render(this.list);
    $('.todo__add_input').val('');
  }

  deleteToDoItem(id) {
    this.list = this.list.map(item => (
      item.id !== id ? item : {
        ...item,
        isDeleted: true,
        deletedAt: new Date(),
      }));
    render(this.list);
  }

  changeChecked(id) {
    this.list = this.list.map(item => (
      item.id !== id ? item : {
        ...item,
        isChecked: !item.isChecked,
      }
    ));
    render(this.list);
  }
}

const ori = new List('o');
ori.addToDoItem('ddd');

$(document).ready(() => {
  render(ori.list);
  $('.todo__add_input ~ button').click(() => {
    ori.addToDoItem($('.todo__add_input').val());
  });
  $('.tag').click((e) => {
    if (e.target.closest('button')) {
      renderTag(e.target.closest('button'));
      render(ori.list);
    }
  });
  $('.todo__add_input').keyup((e) => {
    if (e.keyCode === 13) ori.addToDoItem($('.todo__add_input').val());
  });
  $('.todo__items').click((e) => {
    if ($(e.target).closest('.todo__item__delete_btn').length) {
      ori.deleteToDoItem($(e.target).closest('.todo__item').data('id'));
    } else if ($(e.target.closest('label'))) {
      ori.changeChecked($(e.target).closest('.todo__item').data('id'));
    }
  });
});
