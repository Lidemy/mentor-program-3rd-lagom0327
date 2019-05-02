## hw1：好多星星
一看到就想到 JS101 L2 的星星加強版，因為聽過練習題的講解影片，所以使用老師的用法。
-  形成 n 個 `*` 字串的函數利用 For loop 寫出成 `makeStars(n)`。
- 另一個函數先形成長度為 n 且填滿 `0` 的陣列，使用 `map()` 以陣列的 `index` 為參數呼叫寫好的 `makeStars(index)` 取代 `0` 填入陣列中。

## hw2：大小寫互換
JS101 L2  練習題一樣
- 先把 string 裡的每個字母使用 `split('')` 拆成陣列
- `map()` 對每個元素判斷是否是小寫字母
- `true` => 使用 `toUpperCase()` 轉換成大寫；`false` => 使用 `toLowerCase()` 轉換成小寫。如果不是字母的話使用 `toLowerCase()` 不會改變字。
- 將轉換完的陣列使用 `.join('')` 將陣列轉換成字串 

## hw3：判斷質數
JS101 L3  練習題一樣
- 要減少跑的 Loop 可寫 `i * i <= n` ，但不能只寫 `i * i < n` ，這樣不會判斷到 `i * i = n`。 ex: n =4, i = 2 沒有檢查到。
## hw4：判斷迴文
想到判斷第 i 個字母要和 n - i 個字母一樣，如果是奇數正中間可以不用檢查。看到同學的一行解後，發現自己因為在 C++ 寫過一樣的題目，都沒有多思考在 JS 裡可以有更簡單的方法。
## hw5：大數加法
### 版本一 - 全用 String 型態
首先隨便寫兩個數字用直式加法觀察，發現要 string 兩邊的長度要一樣相加時才不會有問題，而且要從 string 的後面取值相加。所以又另外寫了三個 Funciton 分別為 : 排序參數的長度並輸出陣列、使長度相加、使加完後 string 反轉。
``` js
function sort(a, b) {
  return a.length > b.length ? [a, b] : [b, a];
}
function sameLength(num) { // 長度短的前面補 '0'
  const newNum = [num[0]];
  newNum[1] = '0'.repeat(num[0].length - num[1].length) + num[1];
  return newNum;
}
function reverse(str) { //反轉字串 
  let newStr = '';
  for (let i = 0; i < str.length; i++) newStr += str[str.length - 1 - i];
  return newStr;
}
```
### 版本二 - 全用 Array 型態
後來想到 Array 內建函式比較多，所以把輸入的 String 用 `split('')`拆成 Array，再自己寫一個 Funciton `add0()`，使兩邊的陣列長度相同。
`const arrA = add0(a.split(''), a.length - b.length);`
相加後可直接使用 `unshift()` 從新的陣列前面加，就不用還要反轉陣列才能使用 `join('')` 把陣列變成字串。
其實一開始也是先把引入的參數反轉，按正序相加使用 `push()` 加在新陣列，在反轉回來。寫完發現用兩個 `reverse()` 有點白癡的感覺。只要 For loop 的參數反序寫好，最能直接從後面拿取陣列的元素。
```js
function add0(a, lengthdiff) {
  if (lengthdiff < 0) for (let i = 0; i > lengthdiff; i--) a.unshift('0');
  return a;
}
```
### 版本三 - Array 和 String 混用
寫心得時想到為甚麼一定要使兩邊長度相同 ? 如果取值時為 `undefined`，那直接取 `0` 就好了，所以加一個判斷式  `a[i] ? a[i] : '0'` 在取值的時候，就不用 `add0()` 使長度相同。
並改變 i 使成為 `arrA[arrA.length - 1 - i]` 能讓雖然兩邊長度不同，但兩邊都是從最後一個值開始取。但 arrA 的長度和還沒轉換成 Array 前的 String 長度一樣，所以直接取 `a[a.length - 1 - i]` ，前面就不用形成兩個新 Array : arrA 和 arrB 。 最後發現版本一到版本三的行數幾乎快減少一半 !



## hw6 : 大數乘法
是使用直式乘法的概念寫的，寫完後發現跑 test 時乘以 0 時答案會有問題，因為 n 位數乘以 0 答案是 n 個 0。所以直接寫一個 if 例外處理。
每次commit 都會默默減少好幾行