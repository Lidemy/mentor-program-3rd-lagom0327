const addTodoItem = () => {
  if ($('.todo__add_input').val() === '') return null;
  $('.todo__items').append(`<li class='col-12 todo__item'>
  <label class=''> 
    <input type='checkbox' > <p>${$('.todo__add_input').val()}</p>
    <i class="fas fa-square checkmark"></i>
    <i class="fas fa-check-square checkmark--checked"></i>
  </label>
  <button class="todo__item__delete_btn"><i class="fas fa-times"></i></button>
</li>`);
  $('.todo__add_input').val('');
  return null;
};

const deleteTodoItem = (target) => {
  $(target).closest('.todo__item').remove();
};


$(document).ready(() => {
  $('.todo__add_input ~ button').click(() => {
    addTodoItem();
  });
  $('.todo__add_input').keyup((e) => {
    if (e.keyCode === 13) addTodoItem();
  });
  $('.todo__items').click((e) => {
    if ($(e.target).closest('.todo__item__delete_btn').length) {
      deleteTodoItem(e.target);
    }
  });
});
