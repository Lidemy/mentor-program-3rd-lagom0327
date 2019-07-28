## Bootstrap 是什麼？
Bootstrap 是前端開發框架，把網頁中常用到的零件(ex: 導覽列、按鈕、彈出式通知 ...)的 CSS 事先寫好，使用時只要使用官網中範例的 html 架構，就能形成想要的視覺效果，不需全部自己手刻介面。有些零件需使用 JavaScript 和使用者進行互動，Bootsrap 也準備好對應的 jQuery 程式。

## 請簡介網格系統以及與 RWD 的關係
網格系統是將要顯示的畫面切成網格，通常分成 12 欄，將畫面分成 12 等份。在 html 標籤裡可決定要幾欄寬。
因為元素不是以 px 決定欄的寬度，而是以比例決定欄的寬度，所以可以在 RWD 中就算顯示器螢幕大小不一樣，元素中的相對位置也不會跑版。


## 請找出任何一個與 Bootstrap 類似的 library
[Materialize](https://materializecss.com/) Google 的 Material Design
[PURE](https://purecss.io/)
[Metro](https://metroui.org.ua/index.html) 微軟 Win 8 後的風格
## jQuery 是什麼？
是由 JavaScript 寫的函式庫 (Library) ，複雜的功能都幫忙寫好，使用者只需要呼叫函式就能輕鬆達成需複雜 JavaScript 才能寫出的功能。
jQuery 的功能是操作 document 、選擇 DOM 元素、AJAX 和處理事件。


## jQuery 與 vanilla JS 的關係是什麼？
vanilla JS 就是只使用 Javascript 不使用任何框架，而 jQuery 是基於 Javascript 寫出的 Library，能讓程式顯得簡潔易懂。
就像寫數學時要寫等加數列一開始寫 
```
1 + 3 + 5 + 7+ 9 + 11 + ... + 97 + 99 + 101 
```  
需要寫 50 個數字。
但學會高階的數學符號們後，知道了 Sigma Σ ，直接寫 $$\sum_{k=0}^{50}2k+1$$ 能寫更少字也能更快理解意思，背後會自動把短短幾個字轉換回上面又臭又長的加法。

如果只是要使用 jQuery 中很少的功能，還是要引入整個 jQuery 框架會造成資源浪費，特別是在網速慢的地區這點很重要。




[網格系統(GRID SYSTEM)](https://tips.zoego.tech/archives/37)
[網頁設計常用格線系統(上)](https://ithelp.ithome.com.tw/articles/10202664)
