
const lotteryBtn = document.querySelector('.lottery__btn');
const prizes = document.querySelectorAll('.prize');

const dataOfAllPrizes = [
  {
    header: 'FIRST',
    name: '恭喜你中頭獎了！',
    prize: '日本東京來回雙人遊！',
    class: 'first_prize',
    img: 'flight',
  },
  {
    header: 'SECOND',
    name: '二獎！',
    prize: '90 吋電視一台！',
    class: 'second_prize',
    img: 'tv',
  },
  {
    header: 'THIRD',
    name: '恭喜你抽中三獎：',
    prize: '知名 YouTuber 簽名握手會入場券一張知名 YouTuber 簽名握手會入場券一張，bang！',
    class: 'third_prize',
    img: 'youtube',
  },
  {
    header: 'NONE',
    name: '銘謝惠顧',
    class: 'none_prize',
  },
];

const getPositionAtDataOfAllPrizes = (str) => {
  let i;
  for (i = 0; i < dataOfAllPrizes.length; i++) {
    if (str === dataOfAllPrizes[i].header) return 0;
  }
  return i;
};

const probabilityOfShowARandomPrize = (arr) => {
  const num = Math.random();
  if (num > 0.8) return 0;
  if (num > 0.6) return 1;
  if (num > 0.4) return 2;
  return arr.length - 1;
};

const showAPrize = (index) => {
  prizes[index].classList.add('show_prize');
  setTimeout(() => prizes[index].classList.remove('show_prize'), 100);
};

const nonePrize = () => {
  const div = document.createElement('div');
  div.id = dataOfAllPrizes[3].class;
  div.innerHTML = dataOfAllPrizes[3].name;
  document.querySelector('.lottery__app').appendChild(div);
  document.documentElement.setAttribute('theme', 'dark');
};

const otherPrize = (index) => {
  const div = document.createElement('div');
  div.classList.add('win_the_prize');
  div.innerHTML = `<h3>${dataOfAllPrizes[index].name}</h3>
  <p>${dataOfAllPrizes[index].prize}</p>`;
  document.querySelector('.lottery__app').appendChild(div);
  document.querySelector('.lottery__info__wrapper').classList.add('lottery__info_hidden');

  if (index === 0) {
    document.documentElement.setAttribute('theme', 'sky');
  }
  document.querySelector(`.${dataOfAllPrizes[index].img}`).classList.add(`show_${dataOfAllPrizes[index].img}`);
};

const drawLOtsAgain = () => {
  lotteryBtn.classList.remove('lottery__btn__hidden');
  alert('系統不穩定，請再試一次');
};

const showResult = (str) => {
  const position = getPositionAtDataOfAllPrizes(str);
  if (position === 4) drawLOtsAgain();
  else if (position === 3) nonePrize();
  else otherPrize(position);
};

const getResult = () => {
  const request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const data = JSON.parse(response);
      showResult(data.prize);
    } else {
      console.log('else', request.status, request.responseText);
      drawLOtsAgain();
    }
    request.onerror = () => drawLOtsAgain();
  };

  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery', true);
  request.send();
};

const drawLosts = () => {
  for (let i = 0; i < 9; i++) {
    const randomIndex = probabilityOfShowARandomPrize(prizes);

    (() => {
      setTimeout(() => {
        if (i === 8) getResult();
        showAPrize(randomIndex);
      }, 200 * (i + 1));
    })(i);
  }
};

lotteryBtn.addEventListener('click',
  () => {
    lotteryBtn.classList.add('lottery__btn__hidden');
    drawLosts();
  });

const swiper = document.querySelector('.swiper');

swiper.addEventListener('click',
  (e) => {
    if (!e.target.classList.contains('swiper__red_btn')) {
      const swiperBtns = document.querySelectorAll('.swiper__btn');
      swiperBtns[0].classList.toggle('swiper__red_btn');
      swiperBtns[1].classList.toggle('swiper__red_btn');
      document.querySelector('header').classList.toggle('change_bg');
    }
  });
