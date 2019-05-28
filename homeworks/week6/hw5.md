## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
### 1. `<kbt>` HTML Keyboard Input element  鍵盤輸入元素 
為 inline element，表示內容為用戶輸入，瀏覽器的預設字體為 monospace 。 也被分類為 `短語元素` ，短語元素是專門為有特殊意義的文字內容而設。
有些簡體網頁寫 ` <kbd> 标签已废弃，不推荐使用` 但 MDN 的網頁沒有寫關於此標籤是否被廢棄的敘述，其他部落格只有提醒不要只為了想用此標籤視覺效果使用短語元素。

示範 : 
```html
<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
```
> <p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>

將 `<kbt>` 和其他元素一起使用，能更具體顯示使用的場景

#### `<kbt>` (nest) 包在另一個 `<kbt>` 中
表示多次按鍵形成一整組的輸入，可能是實際的按鍵或其他輸入機制。外部 `<kbt>` 表示整體的輸入；內部每次按鍵都會包含在自己的 `<kbt>` 裡。
MDN 示範 : 
```html
<p>您也能使用鍵盤快捷鍵建立新文件
<kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd>.</p>
```
> <p>您也能使用鍵盤快捷鍵建立新文件
> <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd>.</p>

#### `<kbt>` 被包在 ` <samp> ` 元素裡
表示為系統把用戶剛剛的輸入列印出來

```html
<p>如果發生語法錯誤，該工具將輸出您鍵入的初始命令
供您回顧：</p>
<blockquote>
  <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
</blockquote>
```
> <p>如果發生語法錯誤，該工具將輸出您鍵入的初始命令供您回顧：</p>
> <blockquote>
  <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
</blockquote>

#### `<kbt>` 裡包著 `<samp>` 元素
表示為基於系統輸出所做出的輸入，例如 : 調用菜單或按下螢幕上顯示的按鈕

```html
<p>如何建立新文件，請選擇菜單選項
<kbd><kbd><samp>File</samp></kbd>⇒<kbd><samp>New
Document</samp></kbd></kbd>.</p>

<p>輸入新文件的名稱後，請不要忘記點擊 <kbd><samp>OK</samp></kbd> 按鈕進行確認。</p>
```
> <p>如何建立新文件，請選擇菜單選項
> <kbd><kbd><samp>File</samp></kbd>⇒<kbd><samp>New Document</samp></kbd></kbd>.</p>
> <p>輸入新文件的名稱後，請不要忘記點擊 <kbd><samp>OK</samp></kbd> 按鈕進行確認。</p>

要看正確的瀏覽器渲染效果請至 MDN [The Keyboard Input element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd#Representing_keystrokes_within_an_input) 查看。

### 2. `<address>` 
依功能分類為 Content sectioning elements (內容分區元素) 能讓文件依內容做分類，使用這些元素能創造出頁面的大綱。
`<address>` 元素是提供一個區塊用來說明此區塊內容的創作者聯絡資訊，內容預設為斜體字。
- 通常位於 `<footer>` 裡。如果位於 `<body>` 區塊中，代表整個網頁的聯絡資訊；如果位於 `<article>` 內，代表為這篇文章作者的連絡資訊。
- 如果要表示不是聯絡資訊的地址請用 `<p>`，而不是用 `<article>`。
- 裡面不要放和聯絡訊息無關的內容。例如 : 出版時間。

### 3. `<area>`
使圖片上的某個區域( hot-spot region )可被點擊，點擊後會連接到超文件鏈接。必須位於`<map>` 區塊內。

其屬性如下 :
- `alt` : 圖片沒有顯示時會替代顯示的文字
- `shape` : 指定可被點擊區域的形狀，分為 `circle` 圓形區域, `rect` 長方形區域， `poly` 多邊形區域，和 `default` 沒有被指定到的區域，通常被用於指向整張圖片背景，`default` 要放在 `map` 區域裡的最下面。
- `coords` : 和 `sharp` 搭配使用，用來指定點擊區域的範圍
  - 當 `sharp="circle"` : 只需輸入三個數字 `"x, y, r"` ，x, y 代表圓心的座標，r 為半徑
  - 當 `sharp="rect"` : 需輸入四個數字 `"x1, y1, x2, y2"`，代表方形左上角的座標和右下角的座標
  - 當 `sharp="poly"` : 輸入偶數個數字 `"x1, y1, x2, y2, x3, y3..."，每對數字代表多邊每個角的座標
  - `default` 不用指定 `coords` ， `poly` 和 `default` 的使用範例請看 [<area shape=""> HTML Attribute](https://html.com/attributes/area-shape/)裡的紅鶴圖片
- `target` 屬性預設為 `_self`，不開啟新分頁，直接在現在的區塊(有時一個頁面不只一個 frame)打開超連結。也可用教過在新分頁開啟的方法，把 `target="_self"`。 還有其他兩種設定值 `_parent` 和 `_top`，此兩種和父級 frame 有關，如果沒有 父級 frame ，作用和 `_self` 一樣
- `href` : area 的超連接，值為一個 URL ` 
- `downloa` : 此屬性存在代表是下載 URL ，而不是導航到 URL 的頁面。如果有值，此值為下載時預設的文件名稱。

## 請問什麼是盒模型（box model）
![box model](https://sabe.io/classes/css/css-box-model-padding-border-margin/css-box-model.png)
每對 html 標籤(markup) 都是一個元素 (element)，每個元素在 CSS 中都被視為一個長方體的盒子，是網頁製作排版的基礎。可在瀏覽器打開 Dev tool 看到每個元素自己的 box model，方便觀察網頁版面配置。每對標籤 tag 間的內容(文字、圖片、其他標籤)都為 Box model 中最內部的 content，外層還有 padding 、 border 、 margin 三個屬性，但大部分元素這三者值預設為 0 。
- `content` : 可設定 `height` 和 `width` 值，使高和寬固定
- `padding` : border 到 content 的距離，使用時會有元素的背景色。
- `margin` : border 和其他元素的 border 外部的距離，有值的話此區域不會有設定的背景顏色
  - padding 和 margin 設定值的用法
    - 4 個值 : 上 右 下 左
    - 3 個值 : 上 (左右) 下
    - 2 個值 : (上下) (左右)
    - 1 個值 : (上下左右)
- `border` : 預設的顏色為該元素的文字顏色 
但設定了下面三種屬性， box model 的高寬就不是一開始設定的高寬。因為預設的 box-sizing 屬性值為 `cotten-box`，其高和寬只計算 cottent 的；將值設定為 `boder-box` ，設定的總高寬為計算 cottent + padding + border 的值，設定 padding 和 border 值後系統會自動計算 cottent 的高或寬值。在製作網頁時通常都將 `box-sizing` 設定為 `border-box`。

#### 巢狀元素 (Nesting elements) 
把元素放進另一個元素的區塊內，但不是所有元素都可以這麼做
元素分為 :
 - `block-level elements` : 產生自己的一整行， html 標籤有 `<div>` `<section>` `<nav>` `<footer>` 等
 - `inline elements` : 不會產生新的一行，通常出現在一行字中，html 標籤有 `<a>` `<em>` `<strong>` `<mark>` 等。

`block-level elements` 裡可以包裹另一個 `block-level element` 或 `inline element`。但 `inline element` 裡不能放置 `block-level element`。
所以 Box-model 裡的 content 也可是另一個 Box-model。
## 請問 display: inline, block 跟 inline-block 的差別是什麼？
以下面的 html 和 CSS 比較
```html
<div class="wrap">
  <div id="box1"> box1</div>
  <div id="box2"> box2</div>
    <div> box3</div>
  <div> box4</div>
</div>
```

```css
.wrap {
  background: pink;
}
.wrap > div {
  box-sizing: border-box;
  display: block | inline-block | block ;
  border: 1px solid;
}
#box1 {
  background: red;
  /*   width: 40px; */
/*   height:30px; */
/*   padding: 20px; */
/*   border:3px solid; */
/*   margin: 30px; */
}
```

調整 box1 屬性 | inline | inline-block | block
   ---|---|---|--
`width`　| X　|O|O
`height` | X | O | O
`margin` | 只有左右可調|O|O
`padding` | O |O |O
`border` | O |O |O
`padding` 或 `boder` 高度超過一行高| wrap 的高度固定(圖一)| wrap 的高度會自動調整(圖二)|  每個 box 原本就自己一行
wrap 寬度小於所有 box 寬度加起來| 多餘的 box 會自動跳到下一行，但上下的 `boder` 會連在一起(圖三)|多餘的 box 會自動跳到下一行，可設定上下 `margin` 使 `border` 分離| 每個 box 原本就自己一行

(圖一) `padding` 和 `boder` 超出 wrap 範圍
![inline_boder](https://raw.githubusercontent.com/lagom0327/Markdownphotos/week6/week6/dispaly_inline_bolder_padding.png)
(圖二)
![inline_block](https://raw.githubusercontent.com/lagom0327/Markdownphotos/week6/week6/dispaly_inline_block_bolder_padding.png)
(圖三)![inline-less-thanwidth](https://raw.githubusercontent.com/lagom0327/Markdownphotos/week6/week6/dispaly_inline_margin.png)
`inline` 可使所有元素位於同一個水平線上，在顯示器寬度小於所有 `inline` 元素加起來的寬度時， `inline` 元素會自動跳到下一行，但上下的行的元素沒有 `margin` ，可能會連在一起；水平線的高度也不會隨 `padding` 或 `boder` 高度自動調整，永遠在同一高度上

。所以可以利用 `display: inline-block;` 結合 `block` 的優點可設定上下 `margin` ，當有兩行時可以有行距，且又有 `inline` 優點，當只有一行時所有元素的 content 在同一個水平線上。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position 的預設值為 `static` ，根據 `Normal Document Flow` (常規位置)決定位置。

Normal Document Flow 說明根據[CSS定位机制之一：普通流](https://swordair.com/css-positioning-schemes-normal-flow/) 
> Rainbo Design: 当浏览器开始渲染 HTML 文档，它从窗口的顶端开始，经过整个文档内容的过程中，分配元素需要的空间。除非文档的尺寸被 CSS 特别的限定，否则浏览器垂直扩展文档来容纳全部的内容。每个新的块级元素渲染为新行。行内元素则按照顺序被水平渲染直到当前行遇到了边界，然后换到下一行垂直渲染。这个过程被成为普通文档流。
> -- CSS定位机制之一：普通流



position| static | relative | absolute | fixed |sticky
--- |---|---|---|---|----
可設定 `top` `bottom` `left` `right` 偏移值/<br>與可見區域(viewport) 距離| X|O|O|O|O
位置|常規位置|根據常規位置偏移| 根據最近的非 static 元素定位，再偏移|根據 viewport 決定位置 | 到達上面設定值之前為 `relative` 屬性，到達後為 `fixed` 屬性
預留空位(其他元素排版和 `static` 一樣) | - | O | X| X |O