## 什麼是 Ajax？
Asynchronous JavaScript And XML 
主要特色是不需要刷新網頁就能傳送 request 到 server端和接受及處理從 server 端返回的資料，是結合以前已有的技術的新方法，本身並不是一種技術。
處理完的資料可使用非同步的方法使用 JS 更新網頁內容，也不需重新下載整個頁面
X 是指 XML 的資料交換格式，但現在大都使用 JSON的資料交換格式

實現是使用 XMLHttpRequest (XHR) Object (也是 API)和 Server 端溝通，能從指定的 URL取得資料並更新至網頁局部，不會影響使用者的操作體驗。

首先要先用 new 和 XMLHttpRequest() 建構子，建構一個 XMLHttpRequest 物件
```js 
const request = new XMLHttpRequest() 
```
接著宣告接收到 response 後要怎麼處理返回的資料

```js
request.onload = function() { 
if (request.status >= 200 && request.status < 400) {
  // 怎麼處理
} else {
console.log('err')
}
}
request.onerror = function() {
console.log('error')
}
```
然後使用 HTTP request object 的 `open()` `send()`，實際送出 request
```js
request.open('GET', 'https:/google.com', true) 
request.send(); 
```
`open()` 
  - 第一個參數要放入 HTTP request method 且全部都要寫大寫
  - 第二個參數是放請求頁面的 URL，要注意有無 CORS 的要求，如果有的話可能會得到 "permission denied" 的錯誤訊息。
  - 第三個參數是設定是否要同步/非同步操作，預設是 `true` 非同步，非同步的意思是傳出 request 後 response 還沒回來的時候其他程式也能繼續運作。如果設定 `false` 同步的話，整個頁面的就會停住不能使用，必須等 response 返回後才能繼續執行其他程式。

`send()` 的括號裡可放任何想傳給 Server的資料 ，但資料格式要是 Server 端能解析的。

## 用 Ajax 與我們用表單送出資料的差別在哪？
用表單送出資料時必須要重新載入整個頁面，使用者一定會看到畫面有一段時間是空白頁面，傳送完資料網頁會導向新的 URL 網址，瀏覽器會根據這個網址的 html 和 css 重新渲染整個頁面。
使用 Ajax 送出 request 後原本的網頁還可以繼續使用，等到 Server 端返回資料(通常是 Json 格式)， Javascript 處理完資料後動態更新頁面上特定的部分，頁面相同的地方不需重新渲染，瀏覽器只要渲染有改動的部分，可以減省網路流量。但檢視網頁原始碼時只會看到 Javascript 還沒運作前的原始碼，看不到後面由 Ajax 的新增資料。

## JSONP 是什麼？
瀏覽器為了安全性有個同源政策限制，限制 Client 的網址必須要和 Server 是相同協定和相同主機位置(如果有 port 號也要相同)，這樣 Server 傳回的 Response 才不會被瀏覽器阻擋接收。但瀏覽器對於 html 標籤裡有些資料引入沒有這個限制，例如 `<img>` `<script>` 。
所以可以利用 `<script>` 拿到其他網域的資料，要先在 Server 放一個回傳的 Function 裡面會夾帶要傳送的資料，在 Client 端寫一個Funciton 處理 Server 端返回的 Function 夾帶的資料，所以名字要和 Server 返回的一樣。

就像一般在寫 node.js 會習慣先宣告一個 function 名稱，並在裡面寫一些程式來處理等下會帶入的參數。在下方再呼叫這個 Function 帶入實際想處理的引數。JSONP 就像只是將一個 JavaScript 檔案分成兩部分放，client 只負責宣告 Funciton 名並決定如何處理參數。而 Server 端則是呼叫 Funciton 實際運作，並決定實際被處理的資料(引數)是甚麼。所以 client 端的 Function 在被呼叫該來處裡引數時就能得到想從 URL 得到的資料。

```html
<script>
function setData(users) {
console.log(users)
}
</script>
<script src="https://test.com/user.js"></script>
<!-- 
  回傳
setData([
{
id: 1,
name: 'hello'
}, {
id: 2;
}
]) -->
```
## 要如何存取跨網域的 API？
如果瀏覽器都嚴格執行同源政策，只能同網域之間溝通，那就和玩單機遊戲一樣，只能拿到自己電腦上的資料，所以也不需要網路了，那瀏覽器也更不需要存在了。所以還是要開放一些特殊管道不同網域的網站也能溝通，特殊管道的政策就是 CORS (Cross-Origin HTTP request)， Server 端要在自己 Response 的 Header 裡加上 `Access-Control-Allow-Origin` 裡面寫那些 Origin 是 Server 認可可交換資料的，如果是寫 `*` 代表所有網域都能順利得到這個 Server 的 Response。 Server 端返回 Response 後 Client 的瀏覽器會檢查自己的 Origin 有無被寫進 `Access-Control-Allow-Origin` ，如果有的話就順利讓 Client 接收 Response ，沒有的話就把 Response 擋住不讓 Client 接收。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為第四周時是使用 Node.js 發送 Request，沒有使用瀏覽器就沒有同源政策的問題， node.js 也不會主動審查 Origin 是否相同，所以能順利得到 Response。