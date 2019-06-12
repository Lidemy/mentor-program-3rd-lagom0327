const numOfMessages = 10;
const swiper = document.querySelector('.swiper');
const commentBtn = document.querySelector('.message_board__comment__board_btn');
const changePage = document.querySelector('.message_board__change_page');

const showMessages = (data, page) => {
  const container = document.querySelector('.message_board__all_messages');
  container.innerHTML = '';
  let i = (page - 1) * numOfMessages;
  let indexOfLast = i + numOfMessages;

  if ((data.length - i) < numOfMessages) indexOfLast = data.length;
  for (i; i < indexOfLast; i++) {
    const section = document.createElement('section');
    section.classList.add('each_message');
    section.innerHTML = `<div class="each_message__id">${data[i].id}</div>
    <div class="each_message__content">${data[i].content}</div>`;
    container.appendChild(section);
  }
};

const pageNum = (method, page, totalPage) => {
  const pageNow = document.querySelector('.page_now');
  const total = document.querySelector('.total_page');
  if (method === 'get') return [pageNow.innerHTML, total.innerHTML];
  pageNow.innerHTML = page < 10 ? `0${page}` : `${page}`;
  total.innerHTML = totalPage < 10 ? `0${totalPage}` : `${totalPage}`;
  return 0;
};

const loadMessages = (page) => {
  const request = new XMLHttpRequest();
  let status = true;
  request.addEventListener('load', () => {
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const data = JSON.parse(response);
      const totalPage = Math.floor((data.length - 1) / numOfMessages) + 1;
      pageNum('updat', page, totalPage);
      showMessages(data, page);
    } else status = false;
    request.onerror = () => { status = false; };
  });
  request.open('GET', 'https://lidemy-book-store.herokuapp.com/posts?_sort=id&_order=asc');
  request.send();
  if (!status) alert('系統不穩定，請刷新頁面');
};

const postComment = (comment) => {
  const request = new XMLHttpRequest();
  let status = true;
  request.open('POST', 'https://lidemy-book-store.herokuapp.com/posts');
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send(`content=${comment}`);
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText);
      status = true;
      loadMessages(Math.floor((data.id - 1) / numOfMessages) + 1);
    } else status = false;
    request.onerror = () => { status = false; };
  };
  return status;
};

swiper.addEventListener('click',
  (e) => {
    if (!e.target.classList.contains('swiper__red_btn')) {
      const swiperBtns = document.querySelectorAll('.swiper__btn');
      swiperBtns[0].classList.toggle('swiper__red_btn');
      swiperBtns[1].classList.toggle('swiper__red_btn');
      document.querySelector('.top').classList.toggle('change_bg');
    }
  });

commentBtn.addEventListener('click',
  () => {
    const comment = document.querySelector('.message_board__comment_board_input');
    console.log(comment);
    if (comment.value) {
      if (postComment(comment.value)) comment.value = '';
      else alert('系統不穩定，請再試一次');
    } else {
      alert('請輸入評論');
    }
  });


changePage.addEventListener('click',
  (e) => {
    if (e.target.id === 'previous_page__btn') {
      if (pageNum('get')[0] === '01') alert('已經在第一頁');
      else loadMessages(pageNum('get')[0] - 1);
    } else if (e.target.id === 'next_page__btn') {
      if (pageNum('get')[0] === pageNum('get')[1]) alert('已經在最後一頁');
      else loadMessages(Number(pageNum('get')[0]) + 1);
    } else if (e.target.id === 'first_page__btn') loadMessages(1);
    else if (e.target.id === 'last_page__btn') loadMessages(Number(pageNum('get')[1]));
  });

loadMessages(1);
