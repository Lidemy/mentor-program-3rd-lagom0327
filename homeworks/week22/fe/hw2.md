## React Router 背後的原理你猜是怎麼實作的？
進到 `index.html` 載入後，因為 `react-router` 會使用 `history` library，此 library 會網址列加上監聽事件監聽 URL 的變化，並將 `history` object 作為 `＜Router />` 的 props。 
![image](https://user-images.githubusercontent.com/49493665/69769798-532c6480-11c1-11ea-8758-ff9d2dd0c8f7.png)
按下導覽列 `PostList`按鈕後，從中找到 L 中 props 為 to 的字串 `/react-blog/post`。 
![image](https://user-images.githubusercontent.com/49493665/69767149-d6e05400-11b5-11ea-9915-e0ebe3cc16c0.png)

由 `history` 動態在網址根目錄後加上 `/react-blog/post` 字串，不會 reload 頁面，Server 並不會去找在根目錄下的路徑有無檔案。
`history` 改變後 `<Router />` 的 props 也跟著改變，造成頁面要根據 props 重新渲染。從  `history.location.pathname` 拿到目前的路徑 `/react-blog/post` 和各個 `＜Route />` 中 `props` 的 `path` 比對。有比對成功的話，再 render 出 `props` 中 `component` 的 `PostList`
![image](https://user-images.githubusercontent.com/49493665/69767452-49056880-11b7-11ea-8b80-c201cc931a51.png)

## SDK 與 API 的差別是什麼？
API（Application Programming Interface）是程式溝通的接口，要溝通的方式已經被規定好，要使用時必須遵造廠商的規定。
SDK (Software Development Kit)，是為了能方便快速使用 API 的套件，幫忙處理使用 API 時要注意的細節。
像 Web API 規定要發送 Request 時必須建立 XMLHttpRequest（XHR）物件，拿到 Response 後還要自行判斷 HTTP status code 是否為成功。每次要拿資料至少要寫 10 行程式碼。

```js
  const request = new XMLHttpRequest();
    if (request.status >= 200 && request.status < 400) {
      const response = request.responseText;
      const data = JSON.parse(response);
      console.log('data', data);
    } else console.log('error');
  request.onerror = () => { console.log('error'); };
  request.open('GET', 'https://qootest.com/posts?_sort=id&_order=desc&&_limit=200&_page=1');
  request.send();
```
但使用了 axios library 之類 SDK 只需要寫三四行程式， axios 背後就會自動執行 Wep API 規定的 XMLHttpRequest 細節。


```js
axios.get('https://qootest.com/posts?_sort=id&_order=desc&&_limit=200&_page=1')
      .then((res) => console.log(res.data))
      .catch((error) => console.log('error'))
```


## 在用 Ajax 的時候，預設是不會把 Cookie 帶上的，要怎麼樣才能把 Cookie 一起帶上？
前端 : Request 設定 `withCredentials: ture`
後端 :  Response 設定 `Access-Control-Allow-Credentials = true`，且 `Access-Control-Allow-Origin` 不能為 `*`


### 參考資料
- [JavaScript系列——探索history原始碼之hashHistory的實現](https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/29508/)
- [react-router 中的history](https://zhuanlan.zhihu.com/p/20799258)
- [API & SDK Design #2, 設計專屬的 SDK](https://columns.chicken-house.net/2016/10/23/microservice4/)
- [跨域Ajax請求時是否帶Cookie的設定](https://www.itread01.com/content/1546724906.html)