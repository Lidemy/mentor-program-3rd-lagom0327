 ## CSS 預處理器是什麼？我們可以不用它嗎？
以特定語法撰寫不是正規的 CSS 程式碼，可使用變數、函式、迴圈等加快寫或修改 CSS 的速度，經由預處理器處理後產生正規的 CSS 程式碼。

可以不用，但如果網頁太複雜時全部寫在同一份 CSS 文件中，之後很難找到要修改的部分。
## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。
- public :  資料可以存在所有 cache ， 例如 : 代理伺服器 、Client 端
- privae : 資料只能存在 Client 端 (瀏覽器)
- no-store : 完全不使用 Cache
- no-cache : 要先發送一個 Request 到 Server 檢查資料是否有變更 ，來決定是否使用已經被 Cache 的資源
- max-age : 資料新鮮度，在可使用的時間長度(秒)內不會發送任何 Request 到 Server
- ETag : 和 `If-None-Match` 搭配來檢查資料是某有更新，Client 端先發送一個附 ETag 的 hash 值的 Request 到 Server ， 如果有變更，回傳新資料 (200) 到 Client； 沒有變更的話回傳 `304`

## Stack 跟 Queue 的差別是什麼？
Stack(堆疊) : 是只有單一個出入口的盒子，要拿裡面的東西時要先把後進去的物件拿出後才能拿到先進去的物件 (後進先出)
Queue (佇列) : 是分別有專門的出口和入口的管子，先進去的物件要先出去。(先進先出)

## 請去查詢資料並解釋 CSS Selector 的權重是如何計算的（不要複製貼上，請自己思考過一遍再自己寫出來）
- `universal selector` ex: `*, +, >, ~` 的權重為 `0-0-0-0`
- 一個 `element` 為 `0-0-0-1`
  - 如果同時出現兩個 `element` 例如 : `li > ul` 或 `body div` ，權重可相加為 `0-0-0-2`

- `class` 、 `psuedo-class(偽類)` 和 `attribute（屬性選擇器）` 權重都為 `0-0-1-0`
  - `:not()` 為 `negation pseudo-class` 沒有權重 ，所以 `input[type]:not(.class)` 有 1 個 `element` 、 1 個 `class` 和 1 個 `attribute` 權重為 `0-0-2-1`
- `id` 的權重為 `0-1-0-0`
- `inline style attribute` 為直接寫在 html 裡的，權重為 `1-0-0-0`
  ```html
  <div style="color:red">
    inline style attribute
  </div>
  ```
- 可以蓋過所有權重可用法為 `!important`
  ```css
  .product{
    width: 200px;!important
  }
  ```

- 權重相同的時候，套用後寫的 CSS 

### 參考資料
- [那些大家常忽略的 Cache-Control](https://www.slideshare.net/kewang/cachecontrol)
- [強烈推薦收藏好物 – CSS Specificity (CSS 權重一覽)](https://muki.tw/tech/css-specificity-document/)
- [Day20：小事之 CSS 權重 (css specificity)](https://ithelp.ithome.com.tw/articles/10196454)