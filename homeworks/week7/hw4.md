## 什麼是 DOM？
Document Object Model(文件物件模型) ，把一份 HTML 文件當成之前學過的一個大型 Object 物件，可利用類似取 Object 裡面的值或 Object，一份簡單的 HTML 文件例如這周的 hw1 ，寫成 Object 如下，每個 DOM 的名稱一定是 `document`。
```js
var  document = {
  head: {
    title: 'Week7 hw1',
    meta: {
      charset: 'utf-8',
      name: 'viewport',
      content: 'width=device-width,initial-scale=1.0',
    },
    link: {
      rel: 'stylesheet',
      href: './style.css',
    },
  },
  body: {
    section: {
      class: 'bg',
      section: {
        class: 'container',
        article: {
          id: text,
          Text: '畫面變色請點擊',
          button: {
            class: 'btn',
            Text: '再玩一次',
          },
        },
      },
    },
    script: {
      src: 'index.js',
    },
  },
};
```



如果還是覺得結構太複雜的話，畫成[樹狀圖](https://coggle.it/diagram/XPODHtAsCCtgU3iP/t/document/e5d436c3e776d173299329ccea06f8149f953d01f77c4e31d8008303f856a4cc)就比較直觀看出結構

!['TreeForHtml"](https://coggle-downloads-production.s3.eu-west-1.amazonaws.com/1c7f5fa4e7b75dbf292309673e93128944ee40bc45121564cdc5b47fad319af1/Document.png?AWSAccessKeyId=ASIA4YTCGXFHG2IWR62S&Expires=1559486180&Signature=lsqys%2BZouJPMsfK1gIo7oeuRc%2FU%3D&x-amz-security-token=AgoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMSJGMEQCIBwnkMV0Br%2FqjF0qbVRtt3hLKAmKkwVoSC5KwopFXMHhAiBmnmHcMu%2F2BAnBMeV6G0vHaKwrGjwBdaNRty9qXrvMkCqcAgi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDg3NzQ1MzAzMTc1OCIM6ttz%2BQeuPYStly9CKvABpKF6vDS3QCGVfC5A6RjVmZuRXe4pWs3wk%2BxEO3qE5b%2Fyr3Z6R9HWzzPyhzrzgqeoAcIDKpWp2%2FO6rE%2FEHIsFMoguPEPSg3aWV%2F9nXcAU8BBypgnkMaygvJgIUy6x7VLxRMSNGvIHP4UuCaoiBS0JP%2BFX4oBv7uMQmy84H2plW1LqOuFqjL2C828Lo8AvGZdDvxfQ7lNtplYsBbVYKXsHn%2Fj%2FZVeVXI4FezTI02YLV%2BCwj95aXpLF3mrj5RFcX0TSJ%2BucrssyyI%2BIGM6gbqZftaiSXCTPclg7NVIjTqSSNcV34Xo8SJZEgtjclhpBPg0kMNX4zecFOrUBQ1Rwf2FXsQqWOQ%2B30YWiK4gSnG63vWKUVD9OP1K03mbmsLa7ptAOvrs5948UZ2eDPEfIBpHfZIXKOeOUZ4IJp%2Ffj8lVlTYSWGCYj%2FeuTHUqm0tz22%2FBAl%2FS7JbOWWeuT49GILxcsn2saXP0Q1%2BiNQm3DUPiS8KEW4wCk%2BluZ7RyEF1TyxRG%2FJjVosI9xCi0pgFfWElj3bDBnS6jZ64xi4GfCUOuoJyElwfT41u7iZZ%2Bwyj4OPg%3D%3D)
每個方塊都是一個節點(node)，node 分為四類
  - ### `Document` 
    圖中的灰色有凸起方塊。
    一定為樹狀圖的 root node，代表整份文件，此類節點在整份文件只會存在一個。使用 DOM 方法必定是從這開始尋找下面的子節點(child)。
  - ### `Element`
    圖中綠色和橘色有凸起方塊。
    HTML 的標籤(makeup) 都是屬於 element，例如常用的 `<div>` `<head>` `<body>` `<p>` `<span>`。可能會有子節點
  - ### `Attribute`
    圖中矩形方塊。
    各個 `element` 個相關屬性，雖然屬性有很多種(id, class,type,name)，但每個 `element` 對應的 `attribute` node 只有一個，此類 node 不會有子節點。
  - ### `Text`
    圖中圓角方塊
    被標籤包起來的純文字。

但原本如果將 HTML 當純只是當作 Object 來使用，要取到按鈕這個節點中的內容必須要打非常長的程式
```js
console.log(document.body.section.section.article.button);
```
在比較複雜 HTML 文件，寫程式時是不可能記得每個節點的名稱是甚麼。所以用 JavaScript 透過 DOM API ，只要打出想找的 tag 名稱、class名稱或 id 名，此 API 就會幫忙從 `document` 這個 root node 往下開始尋找資料並回傳結果。
DOM 抓取 node 的方式主要有四種方法

- ### `document.getElementById('idName')`
  尋找各個 `element` node 其對應 `Attribute` node 中的 id 屬性值為  `idName` ，找到後回傳對應的 element
  如果得到 `<article>` 這個標籤的內容，因為已經幫此標籤加上 `id="text"` 所以只要使用 `document.getElementById('text')`就能得到此 element 的 OuterHTML `<article id="text">畫面變色請點擊</article>`
- ### `document.getElementByClass('className')`
  尋找class 名稱等於 "className" 的所有 element，集合成 HTMLcollection 格式回傳結果。
  使用 `document.getElementByClass('bg')` 回傳結果如下，第二行和第四行還可展開看詳細資料。
  ```
  HTMLCollection [section.bg.colored]
  > 0: section.bg.colored
    length: 1
  > __proto__: HTMLCollection 
  ```
- ### `document.getElementsBytagName('tag')`
  tag 名稱一樣的元素，集合成 HTMLCollection 格式回傳，
  `document.getElementsByTagName('section')`
  ```
  HTMLCollection(2) [section.bg, section.container]
  > 0: section.bg.colored
  > 1: section.container
  length: 2
  > __proto__: HTMLCollection
  ```
  HTMLCollection 類似 Array ，如果只取第二個 `document.getElementsByTagName('section')[1]`
```
  <section class="container">
    <article id="text">畫面變色請點擊</article>
    <button class="btn">再玩一次</button>
  </section>
```
會得到在 HTML 上原本的內容，沒有詳細資料了。

- ### `document.querySelector('selector')`
用法和 CSS 選擇器一樣，但找到第一個符合條件的 element 就回傳 element 的 outerHTML
` document.querySelector('.bg')`
```html
    <section class="bg" >
      <section class="container">
        <article id="text">畫面變色請點擊</article>
        <button class="btn">再玩一次</button>
      </section>
    </section>
```

- ### `document.querySelectorAll('selector')`
會檢查完整份文件，將所有結果集合成  NodeList

```
NodeList [section.bg]
> 0: section.bg.colored
length: 1
> __proto__: NodeList
```
NodeList 和 HTMLCollection 的差別是前者 node 種類集合在裡面，後者只能放 element 類的 node。
但使用 `querySelectorAll()` 回傳的也只有 element 集合。

使用 DOM 拿到資料後可以修改或刪除 node 裡的資料。
如要修改 element 中的內文有三種方法，只要在剛剛取 node 的方法後面加上 outerHTML 、 innerHTML 或 innerText

### outerHTTML
  `document.getElementById('text').outerHTML = 'outer'` 
  此方法會造成連原本就外面的標籤、class 名稱所有東西 `<article id="text">畫面變色請點擊</article>` 都被 'outer' 取代掉，所以非常不建議使用。

### innerHTML， innerText
innerHTML 不包含該元素標籤，但包含子元素的所有內容。innerText 返回也不包含該元素標籤，但子元素的內容只會顯示純文字的部分。
使用這兩個修改 html 的差別是識別賦值字串型態的不同，innerText 會把標籤也視為純文字加在 HTML裡，但 innerHTML 可正確識別標籤。
```js
document.getElementById('text').innerHTML = '<div>inner</div>'
document.getElementById('text').innerText = '<div>inner</div>'
```

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
因為是父元素包住子元素，當事件發生時最外層的父元素是第一個知道的，而裡面的子元素如果想要知道事件已經發生，必須要靠父元素傳遞訊息告訴子元素。
事件捕獲的傳遞就像客人打電話到一家大公司想問問題(事件)。假設這是一家奇怪的公司，沒有分機，而且不能跨部門或階層溝通，所以就算客人已經知道是哪個部門的某個人負責的也只能打給客服(父元素)，客服先把事件記下來後，把事件轉該部門(子元素)，該部門主管(職員的父元素)收到這個事件後看到上面寫要給哪個職員，再把事件送給該職員(主管的子元素)。在事件送到職員前都屬於 `Capture Phase`，傳到職員身上時為 `Target Phase`。另外這家公司有個更奇怪的規定，職員收到事件後還要把事件傳遞給原本一開始收到的客服 `Bubbling Phase` ，所以傳遞事件的順序為 `客服` => `主管` => `職員` => `主管` => `客服`

如果公司規定每個人在捕獲階段(true)經手這件事都要在 Line 說一聲 `發大財~`，所以會在 Line 看到
> 客服 : 發大財~
> 主管 : 發大財~
> 職員 : 發大財~

但如果公司是規定冒泡階段(false)執行這個規定，那 Line 會看到
> 職員 : 發大財~
> 主管 : 發大財~
> 客服 : 發大財~

後來公司老闆覺得每天都在 Line 看到一堆 `發大財~` 很煩，他只想知道事情有沒有傳遞到目標身上，所以規定只要在冒泡階段才需要說 `發大財~`，而且說完就不用把事件傳遞下去。所以最後只剩下職員一個人孤單的喊 `發大財~` 了。

## 什麼是 event delegation，為什麼我們需要它？
因為按鈕有很多個，在每個按鈕上都要監聽，有幾個按鈕就要創造監聽事件，非常浪費記憶體。因為由事件傳遞機制知道外層的父元素也會經手事件，並將事件傳到正確的位置，所以使用事件代理只要監聽那些按鈕的父級元素，只需寫一個監聽事件 Function。且按鈕有新增或刪除的話，不用手動再新增或刪除監聽新按鈕的事件

網路上有一個很好的比喻是公司櫃檯代收包裹的故事，只要原本就在一樓的櫃檯去負責簽收包裹，不需要叫每個要收包裹的員工離開工作崗位到一樓。
也可以比喻成公司裡電話通常是分機，如果每個人都要一台總機，但電信公司必須分別把不同電話號碼的線路佈到電話的位置，如果要有 300 台電話，那就必須有 300 條電話線從電信公司的電箱接出來，大樓預留管線的位置就塞爆，而且電話號碼每台都不一樣很難記。所以只要一台總機，電信公司只要牽一條線到公司的總機，再由總機的數據機分配線路到各樓層部門。
## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？

event.preventDefault() 是取消事件的預設行為例如像 `<a>` 標籤的默認事件點擊導向連結的新頁面，但如果在 `<a>` 放一個監聽事件函式，監聽事件為 `click` 裡面使用 
e.prventDefault()，就會阻止導向新頁面。另外如果在最外層的父層使用了 event.preventDefault()，內層元素的預設行為也會被阻止。像下面程式碼會阻止所有預設事件。

```js
	window.addEventListener('click', function(e) {
	e.preventDefault();
}, true)
```

event.stopPropagation() 是阻止事件傳遞，事件不會在被傳到下一個節點。就像上面舉的公司傳遞事件的例子，最後老闆規定只有在冒泡階段才需喊 `發大財~`，且喊完就不需把事件傳遞到下一個人。因為第一個冒泡是 target phase 那個元素，所以最後只會有一個 node 執行監聽事件裡的函式。