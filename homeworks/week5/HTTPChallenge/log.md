# HTTP Game
## Lv1
```js
const request = require('request');
request('https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}',(err,res,body) =>{
  console.log(body)
})
```
```sh
啊...好久沒有看到年輕人到我這個圖書館了，我叫做 lib，是這個圖書館的管理員
很開心看到有年輕人願意來幫忙，最近圖書館剛換了資訊系統，我都搞不清楚怎麼用了...
這是他們提供給我的文件，我一個字都看不懂，但對你可能會有幫助：https://gist.github.com/aszx87410/3873b3d9cbb28cb6fcbb85bf493b63ba

先把這文件放一旁吧，這個待會才會用到
你叫做什麼名字呢？用 GET 方法跟我說你的 name 叫做什麼吧！
除了 token 以外順便把 name 一起帶上來就可以了
```
看了之前 week4 hw4 以為要把 name 放在 header 發送 request ，但都不成功，所以只好偷看 hint。

>用 GET 方式傳送的資料會被附在 URL 上面當作，所以傳了 token 就會變 ?token=xxx
現在只要多傳一個 name 就行囉
?token=xxx&name=xxx

```
啊...原來你叫 jk 啊！下一關的 token 是 {HellOWOrld}
```
## Lv2
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}'}, function (e, r, body) {
    console.log(body)
  })
```
```
我前陣子在整理書籍的時候看到了一本我很喜歡的書，可是現在卻怎麼想都想不起來是哪一本...
我只記得那本書的 id 是兩位數，介於 54~58 之間，你可以幫幫我嗎？
找到是哪一本之後把書的 id 用 GET 傳給我就行了。
```
一開始想到 week4 挑戰題的寫法，要使用 Callback 讓程式能夠遞迴，但想要快點闖關玩，而且數字範圍不大，所以直接一個一個搜尋XD
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}&id=56'}, function (e, r, body) {
    console.log(body)
  })
  ```
  ```sh
好像不是這本書耶...
```
```sh
啊！就是這本書，太謝謝你了。下一關的 token 為：{5566NO1}
```
## Lv3
```js
 request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}'}, function (e, r, body) {
    console.log(body)
  })
```
```
真是太感謝你幫我找到這本書了！

剛剛在你找書的時候有一批新的書籍送來了，是這次圖書館根據讀者的推薦買的新書，其中有一本我特別喜歡，想要優先上架。
書名是《大腦喜歡這樣學》，ISBN 為 9789863594475。

就拜託你了。
新增完之後幫我把書籍的 id 用 GET 告訴我。
```

先從 Lv1 給的 github 文件找到圖書館的網址，先確認網址是正確的並且是能列印出書的圖書館。
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/api/books'}, function (e, r, body) {
    console.log(body)
  })
  ```
文件有提示在用 POST 和 PATCH 時要用 form 格式，在 [Simplified HTTP request client](https://github.com/request/request) 裡搜尋 form 就可以看到範例，套用此範例便能成功新增。

```js
request.post({url:'https://lidemy-http-challenge.herokuapp.com/api/books',
   form: {
    name: '大腦喜歡這樣學',
    ISBN: '9789863594475',
   }},
  function (e, r, body) {
    console.log(body);
});
```
response 的 body 便會提示 id 號碼

 ```
 {"message":"新增成功","id":"1989"}
 ```


```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}&id=1989'}, function (e, r, body) {
    console.log(body)
  })
  ```
 ```
 這樣子讀者就能趕快看到這本新書了，謝謝！下一關的 token 為 {LEarnHOWtoLeArn}
 ```
## Lv4
 ```js
 request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}'}, function (e, r, body) {
    console.log(body)
  })
  ```
  ```
  我翻了一下你之前幫我找的那本書，發現我記錯了...這不是我朝思暮想的那一本。
我之前跟你講的線索好像都是錯的，我記到別本書去了，真是抱歉啊。
我記得我想找的那本書，書名有：「世界」兩字，而且是村上春樹寫的，可以幫我找到書的 id 並傳給我嗎？
```
| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 獲取所有書籍 | GET    | /books     | q: 查詢書籍              | /books?q=hello |
| 獲取單一書籍 | GET    | /books/:id | 無                    | /books/10      |
在 node.js 裡查詢書籍如果使用中文的話，返回的結果都是 `undefined`，但如果是輸入英文或數字，body 是 `[]`
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/api/books?q=世界'},
  function (e, r, body) {
    console.log(body)
  })
  ``` 
所以我在瀏覽器上輸入上方的 url ，發現正常運作
https://lidemy-http-challenge.herokuapp.com/api/books?q=%E4%B8%96%E7%95%8C"
此網址複製到 js 裡會發現 `世界` 變成了 `%E4%B8%96%E7%95%8C` ，原來是轉碼的原因。
```
[{"id":2,"name":"當我想你時，全世界都救不了我","author":"肆一","ISBN":"5549173495"},{"id":27,"name":"從你的全世界路過","author":"張嘉佳","ISBN":"8426216529"},{"id":79,"name":"世界末日與冷酷異境","author":"村上春樹","ISBN":"9571313408"},{"id":90,"name":"文學的40堂公開課：從神話到當代暢銷書，文學如何影響我們、帶領我們理解這個世界","author":"約翰．薩德蘭","ISBN":"7978376866"}]
```

  ```js
   request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}&id=79'}, function (e, r, body) {
    console.log(body)
  })
  ```
  ```
  沒錯！這次我很確定了，就是這本！下一關的 token 為 {HarukiMurakami}
  ```
## Lv5
  ```js
  request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv5?token={HarukiMurakami}'}, function (e, r, body) {
    console.log(body)
  })
  ```
  HarukiMurakami = 村上春樹的日文
  ```
  昨天有個人匆匆忙忙跑過來說他不小心捐錯書了，想要來問可不可以把書拿回去。
跟他溝通過後，我就把他捐過來的書還他了，所以現在要把這本書從系統裡面刪掉才行。

那本書的 id 是 23，你可以幫我刪掉嗎？
```

```js
request.delete({url:'https://lidemy-http-challenge.herokuapp.com/api/books/23'},
  function (e, r, body) {
    console.log(r.statusCode)
    console.log(body)
  })
  ```
  ```
  200
{"message":"\n咦...是刪掉了沒錯，但總覺得哪裡怪怪的，算了，先這樣吧！下一關的 token 為 {CHICKENCUTLET}\n"}
```
使用 GET 查看圖書館，發現沒刪掉 id: 23 的資料，而且詳細資料為
 `{"id":23,"name":"鄭家純 2018泰國個人寫真書","author":"鄭家純","ISBN":"4717480186860"}`
原來是這本書啊 ~ 難怪要拿回去，不過圖書館進書竟然沒有審查機制XDD
CHICKENCUTLET = 雞排 ，雖然知道不是指吃的雞排，但 GOOGLE 這單字出來是吃的，深夜看到這些圖片很餓QQ
## Lv6
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}'}, function (e, r, body) {
    console.log(body)
});
 ```

```
我終於知道上次哪裡怪怪的了！

照理來說要進入系統應該要先登入才對，怎麼沒有登入就可以新增刪除...
這太奇怪了，我已經回報給那邊的工程師了，他們給了我一份新的文件：https://gist.github.com/aszx87410/1e5e5105c1c35197f55c485a88b0328a。

這邊是帳號密碼，你先登入試試看吧，可以呼叫一個 /me 的 endpoint，裡面會給你一個 email。
把 email 放在 query string 上面帶過來，我看看是不是對的。

帳號：admin
密碼：admin123
```
GOOGLE 完 `http basic authorization` 還是不知道要怎麼做，所以換 google `http basic authorization js` 找到一個 [blog](https://www.cnblogs.com/QLeelulu/archive/2009/11/22/1607898.html) 有提供各種程式語言的範例。
node_modules 資料夾裡有 atob 的 module 可解碼 base64，但沒有可將字串轉換 base64 的 module，所以要自己寫或安裝。


```js
const request = require('request');
const Base64 = require('js-base64').Base64;
function make_basic_auth(user, password) {
    var tok = user + ':' + password;
    var hash = Base64.encode(tok);
    return "Basic " + hash;
  } 
  
  var auth = make_basic_auth('admin','admin123');
  console.log(auth)
  var url = 'https://lidemy-http-challenge.herokuapp.com/api/v2/me'; 

  request({
    url : url,
    headers : { Authorization: auth }
},(err,res,body) => {
    console.log(res.statusCode)
    console.log(body)
}); 
```
```Basic YWRtaW46YWRtaW4xMjM=
200
{"username":"admin","email":"lib@lidemy.com"}
```

```js
  request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}&email=lib@lidemy.com'}, function (e, r, body) {
    console.log(body)
  })
  ```
  
  ```
  對對對，就是這個，這樣才對嘛！下一關的 token 為 {SECurityIsImPORTant}
  ```
## Lv7
  ```js
  request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv7?token={SECurityIsImPORTant}'}, function (e, r, body) {
    console.log(body);
})
  ```
  ```
  那邊的工程師說系統整個修復完成了，剛好昨天我們發現有一本書被偷走了...
這本書我們已經買第五次了，每次都被偷走，看來這本書很熱門啊。
我們要把這本書從系統裡面刪掉，就拜託你了。

對了！記得要用新的系統喔，舊的已經完全廢棄不用了。

書的 id 是 89。
```
```js
var url = 'https://lidemy-http-challenge.herokuapp.com/api/v2/books/89'; 
request.delete({...});
```
```
{"message":"\n希望下一次進這本書的時候不會再被偷走了。下一關的 token 為 {HsifnAerok}\n"}
```
用 get 拿可取 id:89的資料，還是沒有真的刪掉。P.S.這裡有彩蛋

```
{"id":89,"name":"跟著月亮走：韓國瑜的夜襲精神與奮進人生","author":"韓國瑜","ISBN":"9789571376882"}
```
## Lv8
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv8?token={HsifnAerok}'}, function (e, r, body) {
    console.log(body)
});
```

```
我昨天在整理書籍的時候發現有一本書的 ISBN 編號跟系統內的對不上，仔細看了一下發現我當時輸入系統時 key 錯了。
哎呀，人老了就是這樣，老是會看錯。

那本書的名字裡面有個「我」，作者的名字是四個字，key 錯的 ISBN 最後一碼為 7，只要把最後一碼改成 3 就行了。
對了！記得要用新的系統喔，舊的已經完全廢棄不用了。
```
又遇到國字要轉碼，竟然遇到第二次了那就不該繼續偷吃步用瀏覽器幫忙轉，查了轉碼的資料發現 URL 中文的地方使用 UTF-8 編碼，UTF-8 的特色就是以 `%字母數字` 規律出現。在 JavaScipt 中可使用 `encodeURI` 將字串轉換成 UTF-8，此方法不會轉換對 URI 有特殊意義的字元，所以下方的字母和標點符號不會被轉成 UTF-8 格式。
[[Guide] 瞭解網頁中看不懂的編碼：Unicode 在 JavaScript 中的使用](https://pjchender.blogspot.com/2018/06/guide-unicode-javascript.html)
```js
const url = encodeURI('https://lidemy-http-challenge.herokuapp.com/api/v2/books?q=我'); 

request.get({
    url : url,
    headers : { Authorization: auth }},(err,res,body) => {
    console.log(res.statusCode)
    console.log(body)
}); 
```


```sh
200
[{"id":2,"name":"當我想你時，全世界都救不了我","author":"肆一","ISBN":"5549173495"},{"id":3,"name":"我殺的人與殺我的人","author":"東山彰良","ISBN":"9262228645"},{"id":7,"name":"你已走遠，我還在練習道別","author":"渺渺","ISBN":"3722233689"},{"id":9,"name":"你是我最熟悉的陌生人","author":"Middle","ISBN":"9765734253"},{"id":22,"name":"我輩中人：寫給中年人的情書","author":"張曼娟","ISBN":"7241428897"},{"id":38,"name":"我和我追逐的垃圾車","author":"謝子凡","ISBN":"7797349452"},{"id":57,"name":"我的櫻花戀人","author":"宇山佳佑","ISBN":"2947749939"},{"id":60,"name":"你走慢了我的時間","author":"張西","ISBN":"8811544334"},{"id":66,"name":"我是許涼涼","author":"李維菁","ISBN":"8389193464"},{"id":72,"name":"日日好日：茶道教我的幸福15味【電影書腰版】","author":"森下典子","ISBN":"9981835427"},{"id":90,"name":"文學的40堂公開課：從神話到當代暢銷書，文學如何影響我們、帶領我們理解這個世界","author":"約翰．薩德蘭","ISBN":"7978376866"},{"id":95,"name":"我想吃掉你的胰臟【電影珍藏版】","author":"住野夜","ISBN":"2615985356"},{"id":100,"name":"慢情書：我們會在更好的地方相遇嗎？","author":"林達陽","ISBN":"7418527246"}]
```


`{"id":72,"name":"日日好日：茶道教我的幸福15味【電影書腰版】","author":"森下典子","ISBN":"9981835427"}`

使用肉眼可搜尋到 id:72 的資料是題目要找的，可再利用 PATCH 更改此資料的 ISBN 。也可全部寫成一個程式如下，這裡要注意一件事，因為我使用 `import` ，其為 ES6 的語法，原生的 node.js 不支持，要使用 `npx babel-node lv8.js` 來執行
```js
const request = require('request');
import {auth} from './auth'

const search = (str, authorsLength, lastNumOfISBN, callback) => {
  const url = encodeURI(`https://lidemy-http-challenge.herokuapp.com/api/v2/books?q=${str}`); 
  request.get({
    url : url,
    headers : { 
      Authorization: auth,}},(err,res,body) => {
    const json = JSON.parse(body)
    const result = json.filter(el => el.author.length === authorsLength && el.ISBN[el.ISBN.length - 1] === lastNumOfISBN.toString());
    if (result.length !== 1) return console.log('Error! 不只一筆符合搜尋結果或沒有符合搜尋條件的資料')
    callback(result); 
  },callback); 
};

const changeISBN = (result) => {
  const isbn = result[0].ISBN - 4;

  request.patch({
    url : `https://lidemy-http-challenge.herokuapp.com/api/v2/books/${result[0].id}`,
    headers : { Authorization: auth,},
    form: { ISBN : isbn,}},(err,res,body) => {
      console.log(res.statusCode)
      console.log(body)
    });
};

search('我', 4, 7, changeISBN)
```

```
200
{"message":"\n希望之後他們能引進語音輸入系統，我就只要講講話就好。下一關的 token 為 {NeuN}\n"}
```
## Lv9
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}'}, function (e, r, body) {
  console.log(body)
});
```
```
API 文件裡面有個獲取系統資訊的 endpoint 你記得嗎？
工程師跟我說這個網址不太一樣，用一般的方法是沒辦法成功拿到回傳值的。

想要存取的話要符合兩個條件：
1. 帶上一個 X-Library-Number 的 header，我們圖書館的編號是 20
2. 伺服器會用 user agent 檢查是否是從 IE6 送出的 Request，不是的話會擋掉

順利拿到系統資訊之後應該會有個叫做 version 的欄位，把裡面的值放在 query string 給我吧。
```
搜尋 `pretend ie6 request js` ，從 [stackover](https://stackoverflow.com/questions/27652543/how-to-use-python-requests-to-fake-a-browser-visit)中的問題找到物件 `User Agent` 的格式，接下來的問題就是要如何找到 IE6.0 的版本。
在 [MDN User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) 中看到**Internet Explorer UA string**這個關鍵字，用 `The IE6 User-Agent String` 搜尋就可以找到 IE6.0 的 UA string。
看資料的時候發現 IE6.0 原來是 Window XP 預設的瀏覽器，這兩個都是時代的眼淚啊。


```js
  var url = encodeURI('https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info'); 
request.get({
    url : url,
    headers : { 
        Authorization: auth,
        'X-Library-Number': 20,
        'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)',// IE6.0 (released in 2001). Was the default browser in Windows XP.
    },
},(err,res,body) => {
    console.log(res.statusCode)
    console.log(body)
  }
); 
```
```
200
{"message":"success","version":"1A4938Jl7","owner":"lib","createdAt":"121290329301"}
```
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}&version=1A4938Jl7'}, function (e, r, body) {
  console.log(body)
});
```
```
限制這麼多都被你突破了，真有你的。要不要考慮以後來我們圖書館當工程師啊？下一關的 token 為 {duZDsG3tvoA}
```
## Lv10
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}'}, function (e, r, body) {
  console.log(body)
});
```
```
時間過得真快啊，今天是你在這邊幫忙的最後一天了。

我們來玩個遊戲吧？你有玩過猜數字嗎？

出題者會出一個四位數不重複的數字，例如說 9487。
你如果猜 9876，我會跟你說 1A2B，1A 代表 9 位置對數字也對，2B 代表 8 跟 7 你猜對了但位置錯了。

開始吧，把你要猜的數字放在 query string 用 num 當作 key 傳給我。
```
這應該只是單純的猜數字遊戲吧 ? 還是還要寫一個程式來猜數字 ? 不管了，當作單純的猜數字遊戲 ~~
看到老師在別同學作業的回應，單純是遊戲
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&num=9613'}, function (e, r, body) {
  console.log(body)
});
```
```
很開心在這裡的時光能有你一起陪伴，讓我的生活不再那麼一成不變，很開心認識你，下次有機會再一起玩吧！

The End，恭喜破關！

author: huli@lidemy.com
https://www.facebook.com/lidemytw/

附註：
原本遊戲只規劃到這邊，第十關就是最後一關。
後來我有加了一些新關卡但難度較高，如果你還想挑戰看看，下一關的 token 為 {IhateCORS}
```
## Lv11
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv11?token={IhateCORS}'}, function (e, r, body) {
  console.log(body)
});
```
token = I hate CORS 原來token 有提醒關鍵字，破完才發現 QwQ
```
嘿！很開心看到你願意回來繼續幫忙，這次我們接到一個新的任務，要跟在菲律賓的一個中文圖書館資訊系統做串連
這邊是他們的 API 文件，你之後一定會用到：https://gist.github.com/aszx87410/0b0d3cabf32c4e44084fadf5180d0cf4。

現在就讓我們先跟他們打個招呼吧，只是我記得他們的 API 好像會限制一些東西就是了...
```
> https://lidemy-http-challenge.herokuapp.com/api/v3/hello
> 您的 origin 不被允許存取此資源，請確認您是從 lidemy.com 送出 request。


直接把出現的錯誤訊息拿去 google ， 查到的文章也是老師撰寫的[輕鬆理解 Ajax 與跨來源請求](https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/)裡面有提到 簡單請求的 MDN ，看完 CORS 的 MDN 其實就找到 Origin 如何使用。事實上的 google 的第一筆資料就是 CORS 的 MDN，但我那時完全忽略掉他了。

```js
const request = require('request');

const url = encodeURI('https://lidemy-http-challenge.herokuapp.com/api/v3/hello'); 
request.get({
  url : url,
  headers : { 
    // https://blog.techbridge.cc/2017/05/20/api-ajax-cors-and-jsonp/
    //https://developer.mozilla.org/zh-TW/docs/Web/HTTP/CORS#%E7%B0%A1%E5%96%AE%E8%AB%8B%E6%B1%82
    Origin: 'lidemy.com',
    },},(err,res,body) => {
    console.log(res.statusCode)
    console.log(body)
  }
); 
```
```
Hello! 下一關的 token 為 {r3d1r3c7}
```
## Lv12
```js
request.get({url:'https://lidemy-http-challenge.herokuapp.com/lv12?token={r3d1r3c7}'}, function (e, r, body) {
  console.log(body)
});
```
```
打完招呼之後我們要開始送一些書過去了，不過其實運送沒有你想像中的簡單，不是單純的 A 到 B 而已
而是像轉機那樣，A 到 C，C 才到 B，中間會經過一些轉運點才會到達目的地...算了，我跟你說那麼多幹嘛

現在請你幫我把運送要用的 token 給拿回來吧，要有這個 token 我們才能繼續往下一步走
```
獲取運送 token	GET	/deliver_token


> 我已經把運送要用的 token 給你囉，請你仔細找找

'https://lidemy-http-challenge.herokuapp.com/api/v3/deliver_token'

不知道要去哪裡找，所以只好把 response 印出來大概看完，但還是沒有看到 token 在哪，不過有發現後面出現的網址變成 result 。
> hint : 你會發現你呼叫 API 以後它並沒有直接回傳結果，而是轉址到其他地方（或許中間還經歷不只一個地方）
仔細研究這些地方吧！

使用 node.js 能看的東西我都看完了，根據提示，只好使用 Chrome DevTools 看到底轉址中發生甚麼事，才發現原來轉了兩次網址，中間網址的 headers 有 token `X-Lv13-Token: {qspyz}`。奇怪的是使用 node.js 得到的 response 不是全部的內容嗎 ? 只有用 Chrome DevTools 才能看到全部的 headers 。

## Lv13
> https://lidemy-http-challenge.herokuapp.com/lv13?token={qspyz}

> 太好了！自從你上次把運送用的 token 拿回來以後，我們就密切地與菲律賓在交換書籍
可是最近碰到了一些小問題，不知道為什麼有時候會傳送失敗
我跟他們反映過後，他們叫我們自己去拿 log 來看，你可以幫我去看看嗎？
> 從系統日誌裡面應該可以找到一些端倪

> https://lidemy-http-challenge.herokuapp.com/api/v3//logs
此 request 不是來自菲律賓，禁止存取系統資訊。


看到提示要來自菲律賓，想到應該是要使用 VPN 參考了[Node.js - Programmatically Connect to a VPN or route HTTP Requests via VPN](https://stackoverflow.com/questions/32048832/%20node-js-programmatically-connect-to-a-vpn-or-route-http-requests-via-vpn) 中的解答，在 headers 中加 `localAddress: 'ip'` 。 

> hint: 你有聽過代理伺服器 proxy 嗎？

node.js request 沒有付 ip 那 header

```js
var proxy = 'http://203.177.135.133:8080';

request.get({
    url : url,
    proxy: proxy, 
```
```
[
 { logType: 'token', value: '{SEOisHard}' }
]
```

## Lv14
https://lidemy-http-challenge.herokuapp.com/lv14?token={SEOisHard}
跟那邊的溝通差不多都搞定了，真是太謝謝你了，關於這方面沒什麼問題了！
不過我老大昨天給了我一個任務，他希望我去研究那邊的首頁內容到底是怎麼做的
為什麼用 Google 一搜尋關鍵字就可以排在第一頁，真是太不合理了

他們的網站明明就什麼都沒有，怎麼會排在那麼前面？
難道說他們偷偷動了一些手腳？讓 Google 搜尋引擎看到的內容跟我們看到的不一樣？
算了，還是不要瞎猜好了，你幫我們研究一下吧！
一開始以為改 就可以了Origin: 'googlebot.com/bot.html',

>hint: 伺服器是怎麼辨識是不是 Google 搜尋引擎的？仔細想想之前我們怎麼偽裝自己是 IE6 的

https://devco.re/blog/2014/06/19/client-ip-detection/

http://enter3017sky.tw/article.php?id=124
從這偷看同學的思路，所以看了一堆SEO 文章，後來直接看 wiki 的頁面 有斗蓬法（cloaking) 和題目情況相符，搜尋 "how to Cloaking" 想要知道在程式中要怎麼實際使用斗蓬法引導 googlebot 看到不一樣的網站，但都看不太懂。
介紹 SEO 和 Cloaking 文章裡但都有介紹 googlebot，想到關鍵字 "fake googlebot" 結果第一筆就是解答了。
雖然一開始有想到"fake google"這個關鍵字，但應該是覺得這個字太籠統了最後沒有查，繞了一些路看如何針對 SEO　優化網頁內容的文章，但也從裡面了解的以後要如何架網站，以及從中想到googltbot 這個關鍵字。
https://log-hero.com/docs/detect-fake-googlebots
其實 User Agent 英文版的維基百科有稍微介紹 Googlebot，中文版沒有介紹。
> Format for automated agents (bots)
Automated web crawling tools can use a simplified form, where an important field is contact information in case of problems. By convention the word "bot" is included in the name of the agent[citation needed]. 
>For example:
Googlebot/2.1 (+http://www.google.com/bot.html)

```js
'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
```
```
<html>
    <h1>I Love Google</h1>
    <p>Google please rank our website higher, PLEASE!</p>
    <!-- token for lv15：{ILOVELIdemy!!!}  -->
  </html>

  還真的是我猜的那樣...不過還是要謝謝你幫我們完成這麼多任務！
今天是我在這職位的最後一天啦，之後我要升官了，應該就不用處理這麼多小事情了
這段期間感謝你的幫忙，我們以後有緣再相見啦！

The End，恭喜破關！
這次是真的破關了，這是最後一關，感謝你願意參與這個遊戲
也希望這遊戲是有趣的，希望你在玩的時候有學到東西
也歡迎把這個遊戲分享給親朋好友們
感謝！

也感謝所有幫我測試的朋友們

Author: huli@lidemy.com
https://www.facebook.com/lidemytw/
```
熟悉 Headers 的使用
GOOGLE 能力
了解網頁如何運作