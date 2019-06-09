let index = 0;

const showStreams = (data, startIndex) => {
  const container = document.querySelector('.display_streams');
  if (startIndex === 0) container.innerHTML = '';
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

const nav = document.querySelector('.navbar__nav');
nav.addEventListener('click',
  (e) => {
    const li = nav.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) li[i].classList.remove('selected');
    e.target.classList.add('selected');
    index = 0;
    getSteams(e.target.innerText, index, 'new');
  });

const load = () => {
  getSteams('League of Legends', 0, 'new');
  nav.children[0].classList.add('selected');
};


const loadMoreBtn = document.querySelector('.more_streams__btn');
loadMoreBtn.addEventListener('click', () => { getSteams(nav.querySelector('.selected').innerText, index); });

load();
