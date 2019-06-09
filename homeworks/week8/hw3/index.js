let index = 0;
const gamesName = [];
const input = document.querySelector('input');
const inputBtn = document.querySelector('.search_btn');
const nav = document.querySelector('.navbar__nav');
const loadMoreBtn = document.querySelector('.more_streams__btn');

const showStreams = (data, startIndex) => {
  input.value = '';
  const container = document.querySelector('.display_streams');
  if (data.length === 0) return alert('No such game');
  if (startIndex === 0) {
    container.innerHTML = '';
    document.querySelector('.game_name').innerHTML = data[0].channel.game;
  }
  for (let i = 0; i < 20; i++) {
    const a = document.createElement('a');
    a.classList.add('each_stream');
    const att = document.createAttribute('href');
    att.value = `${data[i].channel.url}`;
    a.setAttributeNode(att);
    a.innerHTML = `<img class="each_stream__preview" src='https://static-cdn.jtvnw.net/previews-ttv/live_user_${data[i].channel.name}-272x153.jpg'>
    <div class="profile">
      <img class="profile__logo" src="${data[i].channel.logo}">
      <div class="profile__info">
        <div class="profile__status">${data[i].channel.status}</div>
        <div class="profile__display_name">${data[i].channel.display_name}</div>
      </div>
    </div>`;
    container.appendChild(a);
  }
  index += 20;
  return 0;
};

const getSteams = (gameName, startIndex) => {
  const request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const json = JSON.parse(request.responseText);
      console.log(json);
      const data = json.streams;
      showStreams(data, startIndex);
      // console.log(request.responseText);
    } else console.log('err', request.status, request.responseText);
    request.onerror = () => console.log('error');
  };
  // summary?game=Overwatch'
  request.open('GET', `https://api.twitch.tv/kraken/streams?client_id=rjwb8zewf0hx6k2wdskymmxmzy7tpa&game=${encodeURI(gameName)}&offset=${startIndex}`);
  request.send();
};


nav.addEventListener('click',
  (e) => {
    if (e.target.nodeName === 'LI') {
      const li = nav.querySelectorAll('li');
      for (let i = 0; i < li.length; i++) li[i].classList.remove('selected');
      e.target.classList.add('selected');
      index = 0;
      getSteams(e.target.innerText, index);
    }
  });

const getGamesName = (num) => {
  const request = new XMLHttpRequest();
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      const data = JSON.parse(request.responseText).top;
      for (let i = 0; i < data.length; i++) {
        gamesName.push(data[i].game.name);
      }
    } else console.log('err', request.status, request.responseText);
    request.onerror = () => console.log('error');
  };
  request.open('GET', `https://api.twitch.tv/kraken/games/top?client_id=rjwb8zewf0hx6k2wdskymmxmzy7tpa&limit=100&offset=${num}`);
  request.send();
};

const getAllGamesName = (totalNum) => {
  for (let i = 0; i < totalNum / 100; i++) {
    (() => {
      setTimeout(() => {
        getGamesName(i * 100);
      }, 500 * (i + 1));
    })(i);
  }
};

const search = (str, data) => {
  const word = str.toLowerCase();
  const result = [];
  data.map((el) => {
    if (el.slice(0, word.length).toLowerCase() === word) result.push(el);
    return 1;
  });
  return result;
};

const load = () => {
  getSteams('League of Legends', 0);
  nav.children[0].classList.add('selected');
};

// https://blog.csdn.net/IT_DREAM_ER/article/details/53513017
function ScrollEvent() {
  const wScrollY = window.scrollY; // 当前滚动条位置
  const wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
  const bScrollH = document.body.scrollHeight; // 滚动条总高度
  if (wScrollY + wInnerH >= bScrollH - 30) { // 你需要做的动作
    getSteams(nav.querySelector('.selected').innerText, index);
  }
}

loadMoreBtn.addEventListener('click', () => { getSteams(nav.querySelector('.selected').innerText, index); });

input.addEventListener('keyup',
  (e) => {
    if (input.value.length > 2) {
      const result = search(input.value, gamesName);
      if (result.length === 1) input.value = `${result[0]}`;
      if (e.keyCode === 13) {
        if (result.length > 1) alert(`Maybe:\n ${result}`);
        else getSteams(input.value, index = 0);
      }
    }
  });


inputBtn.addEventListener('click',
  () => {
    if (input.value) getSteams(input.value, index = 0);
  });

window.addEventListener('scroll', ScrollEvent, false);

getAllGamesName(700);
load();
