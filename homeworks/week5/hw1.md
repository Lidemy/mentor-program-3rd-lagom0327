## 前四週心得與解題心得
### 第一周
第一周學 Common Line 和 Git 的使用方法， 我以前 CLI 的印象就只有 Windows 原生醜醜的 cmd ，而且只有在電腦壞掉時才會使用這個工具來修電腦。
網路上看到 Cmder 外觀可以那麼花俏和有怎麼多功能覺得很驚訝，結果第一周就花了兩三天在研究要怎麼我的 Cmder 弄成和網路上的一樣，試了好幾個部落格的教法，安裝了一堆東西好像把我的環境用的有點複雜，最後大概是使用了[WSL + ZSH + OH-MY-ZSH + POWERLEVEL9K + CMDER](https://twasa.ml/post/wsl/)的教學才成功。本來還有參考其他資料加上時間、執行時間等功能，但不知道為甚麼加上這些功能 Cmder 上的排版都會跑掉，所以我最後只留下時間的功能，雖然還是有一些小 Bug ，但不怎麼影響使用所以決定以後有空在解決。
在嘗試的過程中，也學到很多 :
1. 不要還沒把整篇文章看完就開始動手，其實有寫文章是不適合新手的，下面會有人留言提醒。
1. 設定環境時，參考甚麼過文章，做了哪些動作，都必須要記錄下來。
1. 會在 cmder 裡改 vimrc bashrc 設定，語法沒寫好造成無法在 cmder 裡用 vim 開這些 rc 檔，那就使用 VS code 開後刪掉寫錯的 Code。

Git 有在高見龍老師網站找到實用的練習地方 [Git 練習場](https://gitbook.tw/playground)可以到圖像化看到 branch 和 master 怎麼走的和 head 這個指標在幹嘛。  

Git Workflow 上課影片有解釋，但我那時還是不太懂得為甚麼要這麼做，幸好在見面會時 Amelie 學姊有詳細介紹公司團隊怎麼使用 Git ，才更深入了解 Git Workflow 的用處。   

我這周才發現 VS code 也有內建使用版本控制的擴充功能，可以直接看到同一檔案在不同版本之間的差異，但在版本控制的頁面都是顯示 *沒有提供任何原始檔控制提供者註冊* ，查了一下網路上的資料都是一打開 VS Code 就能在歡迎使用的頁面開啟版本控制，有個*初始化GIT存儲庫*的按鈕可以按，但我沒有這個鈕，所以無法看到我的版本控制。只好安裝另一個擴充功能 GitLens ，這時才發現我的擴充功能裡有一個 VS Code 內建的 Git 已經被停用，應該是我去年安裝 VS Code 後，就順手把不認識的擴充功能給停用。內建的 Git 啟用後，版本控制的頁面就自動出現已經加入版本控制後被修改的檔案。真的是有些問題時間到了就會知道解答是甚麼，而且根本是自己犯蠢XD


開心學完 CLI 和 Git 後，發現要寫四篇文章的作業覺得痛苦，因為我之前最不喜歡的作業就是寫自由發揮的報告了，寫通識課的報告都比寫實驗報告還要痛苦且效率低很多。所以每次我打開 hw.md 檔都會盯著螢幕約半小時，還是不想寫之後去看無關的資料逃避寫作業。不過作業還是要寫，所以當周的最後兩天還是動工寫作業了。我記得我 week1 的 hw3 寫 7、8 小時才寫了 1000 多個字，真的效率很低。雖然我早早就看完第一周的影片，但因為我的喜好當然第一周就遲交作業了。那時第一周每天的進度報告我也大約至少要花半到一小時才寫完，現在約 5 ~ 10 分鐘寫完，不過好像有點隨便寫了。


我覺得寫東西有一個困難的點是因為我初步學會一個東西如何使用很快，但因為學很快所以對上課是使用哪一種專業術語描述的完全沒有記憶，自己要使用專業術語描述就打結了。寫字想要描述一件動作或事情雖然應該很簡單，但下筆時總覺得會有一個技術名詞或動詞來描述這件事，沒有使用專用詞就覺得自己是在寫錯誤的東西。像是之前要寫陣列內建的 indexOf，第一直覺 indexOf 是**Function**還是**函數**，翻筆記時發現上課影片是說**函式**，但 MDN 上面又是寫 **Methods**，所以要先去找函數、函式、function 和 methods 這四者之間的關係，才能確定下筆要寫哪一個，這樣一來一往每個詞我都要確認的話很浪費時間，而且也很挫折。不過看了一些資料才發現其實在資訊這個領域，很多名詞都是由不特定的人創造的，所以並沒有標準的定義，且目前也沒有人要出來統一用詞。所以現在有較放寬心在寫東西，沒有執著在一定要找到專業術語才能寫，不知道這樣亂寫好不好，

### 第二周
第二周是打造程式基礎，因為我之前自學過一些，當周的影片好像花兩天就看完了。綜合題目練習 Lv3 中的壓平陣列比較難，講解影片有用到遞迴。當初看到這題也覺得很難，我沒有想到用遞迴的方式寫，不過有想到有點偷吃步的方法，先用 `join()` 壓成字串再用 `split()` 分開成陣列。
```js
const flatten = arr => arr.join(',').split(',').map(el => Number(el));
```

### 第三周
第三周是也是打造程式基礎，在使用 `npm scripts` 時才明確地了解此功能是只能在 `node_modules` 所處位置的資料夾下使用。不知道以後會不會介紹**資料夾結構**。

因為不知道第三周心得還要寫甚麼，所以就把複習 JS102 筆記時遇到的問題寫在這。看到這個範例是要說明展開的 array 如果還有包含另一個巢狀陣列 ，就算使用展開複製，只有真的複製前三個，最後一個還是指向 nestedArray 的記憶體位址。


```js
var arr = [1, 2, 3, nestedArray]
console.log('arr', arr)
var arr2 = [...arr]
console.log('arr2',arr2)
console.log(arr[3] === arr2[3])
```
但我試著把 `arr2[3] = 3` 時發現 nestedArray 值並不會改變，那到底展開後 `arr2[3]` 是 pass by value 還是 pass by reference ? 而且 `arr[0] === arr2[0]` 也為 true 啊 ? 
認真查在 array 在檢查 `===`到底檢查了甚麼 ? 才發現我根本沒搞懂 `===` 的用法，和 Javascript 中變數的型別。
看完這篇文章[Javascript 基礎打底系列 (一) - 常見的出包狀況解析](http://sweeteason.pixnet.net/blog/post/42992357-javascript-%E5%9F%BA%E7%A4%8E%E6%89%93%E5%BA%95%E7%B3%BB%E5%88%97-%28%E4%B8%80%29---%E5%B8%B8%E8%A6%8B%E7%9A%84%E5%87%BA%E5%8C%85%E7%8B%80%E6%B3%81) 中有詳細型別和判斷的的情形，其結論如下。

> Javascript 中變數的型別會影響到數值傳遞的方式
如果在"執行時" or "宣告時"給的是原始值就會是 By Value，如果是複合值就會是 By Reference
而 By Value 與 By Reference 會影響到判斷式與給於值時，有不同的動作行為
當使用 if 判斷時，複合值會使用記憶體中的位址來判斷是否相等
而原始值會使用記憶體位址中的值來判斷
另外，建構式如果使用 new 關鍵字的話，型態就會是複合值 object
如果沒有 new 就是原始值，會使用記憶體位址中的值來判斷
在函數的參數使用上也是一樣，如果傳入的是原始值，就會以 By Value 運作
如果傳入的是複合值，就會以 By Reference 運作
> 
因為課程中在解釋 Pass by sharing 時好像都是使用 Object 來當範例，所以我以為適用 Pass by sharing 的複合值只有 Object ，完全忽略掉還有其他複合值，像這題的 Array。
- `arr[0] === arr2[0]` 
因陣列中的第二個元素是數字，而數字為基本型別（Primitive Types）所以只會判斷 **Value** 是否一樣但其實記憶體位置不同
- `arr[3] === arr2[3]` 
因陣列中的第三個元素還是陣列，因陣列為物件型別（Object Types）所以是檢查兩個陣列的**記憶體位址**是否一樣
  - `arr2[3] = 3` 
  是對整個陣列重新賦值，所以是直接形成一個新的記憶體位址存 `3` 這個數字，`nestedArray` 還是指向原本的記憶體。
  - `arr2[3][0] = 3`
  此動作就會直接改變在 `nestedArray` 記憶體位址上的值，所以所有指向這個記憶體位址的變數看到數值也跟著變成 `3` 。

### Array 也可用深拷貝
使用 JSON 方法也可用來拷貝 Array
```js
const nestedArray = [4];
const arr = [1, 2, 3, nestedArray];

const json = JSON.stringify(arr);
const arr2 = JSON.parse(json);
console.log(json);

console.log('arr', arr);
console.log('arr2', arr2);
console.log(arr[3] === arr2[3]);
```
```sh
[1,2,3,[4]]
arr [ 1, 2, 3, [ 4 ] ]
arr2 [ 1, 2, 3, [ 4 ] ]
false
```
要真的打好程式的基礎，應該要去看完整解釋的課本，而不是只會使用就好。

### 第四周
第四周是利用傳紙條的故事帶入 HTTP 各種協議的由來。也有示範 request 在 node.js 上如何使用，在示範時我就想說怎麼沒有示範重要的 header 要怎麼帶入 request 中，果然在作業中出現了。
作業示範解答 hw3 是用 Switch 比較清楚每個 case 在幹嘛，我用 if 習慣了，都沒想到不常用的 Switch。
串接 api 能自動化做很多事，但有時好像會剝奪其他人的樂趣，因為我想到 ptt 有很多人喜歡搶發地震文，但之前有一陣子有個帳號應該是直接寫好程式串接到地震速報系統，在每次地震的 30 秒內他就可以發完文，所以沒有人搶得贏他。不過這程式應該要一直運作監聽有沒有地震速報，電腦都不能關機。幸好他最近好像沒有繼續搶發地震文了，不然大概會引起民怨吧XDD

### Lidemy-OJ
Lidemy-OJ 內時間好像比正常時間快兩分鐘，提交 Code 時會送出時間顯示*兩分鐘內*，過兩分鐘後再按 F5 重新整理，送出時間才會變成正常的*幾秒前*。
我有寫 test 的就是我有偷看測資的題目。
#### 不公平的人，是誰？
這題的概念應該是要比較兩個大數誰比較大，我一開始想說那只有兩個長度一樣的大數要特別比較，m 前面出現數字都要比 n 前面對應的數字小。 OJ 無法 AC，但在測資裡挑了幾個 test 也都通過，還是不知道哪裡出錯了，所以又寫了另一個類似[大數減法的版本](/homeworks/week5/challenge_1/pb.1.js)，不是真的減法，只要結果 <= 0 ，那結果就是 'Fair'，第二個版本有得到 AC。在回去看第一個版本哪裡錯的時侯，隨手寫一個超簡單的例子 `pb('00253', '0232')`發現輸出是錯的，原來我之前寫的 test 都是 `133, 134` 這種 `Fair` 的例子，只要補上第三行 `if (m[i] > n[i]) return 'Unfair';` 邏輯就是對的。這麼小的錯誤但我卻花了一天才找到，果然要找一隻動物對她解釋每行程式在幹嘛呢~

```js
for (let i = 0; i < n.length; i++) {
    if (m[i] < n[i]) return 'Fair';
    // if (m[i] > n[i]) return 'Unfair';
  }
  
  return 'Fair';
```
#### 友好數
沒看到題目要求的 `=`

#### PK 賽
一開始只寫了 5 球內的判斷法，因為沒看到 *如果五球無法分出勝負，則會延長直到分出勝負為止* 這句話，所以認為五球平手的話比賽結果就是 `NO`。
解題思路是把 `O` 設為 `1` ， A 、 B 對相減後，看和已踢的球數有沒有規律，發現如果相減後小於到第五球還能踢的球數的話就是無法判斷，其實就是剩下的球數另一隊可不可以追回比分。
這裡我不太清楚 `const winner = A > B ? 'A' : 'B';` 這句要不要放在 `const B = ` 下面，因為我之前看別人寫的範例好像變數都會宣告最上方，但這裡因為如果 A 和 B 比分一樣就會跳出函式，所以我覺得不用那麼早計算 `winner` 是誰，不知道變數是統一宣告最上方，還是在需要用到前再宣告 ?
 

```js
function pe(a, b) {
  const A = a.split('').reduce((acu, el) => acu + (el === 'O' ? 1 : 0), 0);
  const B = b.split('').reduce((acu, el) => acu + (el === 'O' ? 1 : 0), 0);

  if (A === B) return 'NO';
  const winner = A > B ? 'A' : 'B';
  if (a.length > 5) return (a.length !== b.length) ? 'NO' : winner; // from test
  if (a.length !== b.length) return (a.length === 3 || Math.abs(A - B) <= (4 - b.length)) ? 'NO' : winner;
  return (Math.abs(A - B) <= (5 - b.length)) ? 'NO' : winner;
}
```
#### 陣列裡數字相差 - 愛有等差 - 草地上的松鼠
這兩題都是要觀察陣列裡後面的數字減前面的數字，可用 For loop 寫，也可用 `map()`寫，不過因為 `map()` 最後一個元素是和 `undefined` 相減，所以需要用 `pop()` 移除最後一個的相減後的元素。

#### 整理 CD
這是寫最久的一題，看到題目時我就了解到很難，先把 function 分為 
- `newNumBigger(num, N)` : 新的不為 N 的倍數的數，且比原本大
```js
const newNumBigger = (num, N) => (num % N !== 0 ? num : newNumBigger(num + 1));
```
-  `delete0` : 陣列裡元素為 0 的話，陣列裡最大的數減一，0 + 1 ，並使用遞迴檢查還有無 0。

```js
function delete0(arr) {
  if (arr.filter(el => el === 0).length === 0) return arr;
  const arr2 = arr;
  const indexOf0 = arr2.indexOf(0);
  const indexOfMax = arr.indexOf(Math.max(...arr2));
  arr2[indexOfMax] -= 1;
  arr2[indexOf0] += 1;
  return delete0(arr2);
}
```
- `deleteN` :  N 的倍數的數字減一，
```js
function deleteN(arr, N, K) {
  const arr2 = arr.slice(0);
  const indexOfN = arr2.filter(el => el % N === 0)
  });
  if (indexN.length === 0 || (indexN.length === 1 && arr.length === 2)) return arr;
  if (indexN.length % N === 0) return arr;
  arr2[arr2.indexOf(indexOfN)] -= 1;
  arr2[arr2.indexOf(Math.min(...arr2))] += 1;
  return deleteN(arr2, N, K);
}
```
- `makeArr()` : 製造新的 Array ，並使長度不為 N 的倍數
```js
function makeArr(lengthOfArr, firstN, N, M, K) {
  const notNLength = newNumBigger(lengthOfArr, N);
  let rest = M;
  const arr = Array(notNLength).fill(0).map((el) => {
    if (rest >= firstN) {
      rest -= firstN;
      return el + firstN;
    } if (rest > 0) {
      const temp = rest;
      rest = 0;
      return el + temp;
    }
    return 0;
  });
  return arr.length === 1 ? arr : deleteN(delete0(arr), N, K); // from test
  ```
- `checkN(array)` 檢查是否陣列裡還有元素為 N 的倍數，沒有的話回傳陣列的長度，有的話在製造一個新的長度較長的陣列後再檢查一次
```js
const checkN = array => ((array.filter(el => el % N === 0).length === 0)
    ? array.length : checkN(makeArr(array.length + 1, array[0], N, M, K)));
```
所以主要執行順序是 makeArr() -> delete0 重複至沒有 0 存在 -> deleteN 重複至沒有 N 的倍數存在 -> checkN 檢查是否合格 不合格 -> 再回到 makeArr()製造新長度不為 N 的倍數的陣列
 花了三、四個小時寫出來的第一個版本只有 40 分，而且是 TLE 超過時間限制，後來發現我寫來用來消除陣列裡為 N 的倍數的函式 `deleteN()` ，不可以寫成遞迴函式一次只消除一個，太浪費時間，而是要收集所有為 N 的倍數的 index 然後一次消除。然後再從偷看一些 edge case 加了一些 if 就得到 AC。但後來又花了三個小時重寫了一次，因為覺得裡面的 if 太多了，都是從 edge case 裡得到的條件，所以又重新整理一次思路，發現 `deleteN()` 其實不用遞迴，因為 `checkN()` 已經有相同的功能了，不用遞迴後有些多餘的 if 條件用來跳出 `deleteN()` 也可以刪除。要製造新 Array 時其實也不用完全從頭製造，已經被 `deleteN()` 處理完的 Array 直接補 1 個或 2個 0 就能形成新長度的陣列，但想一想補 0 又使用 `delete0()` 很白癡，那直接在形成新的 Array 時補 1，第一個數字直接減一，因為第一位一定是最大的數字。`delete0()` 這個函式就可以刪除不用了。
 ```js
 function longArr(arr, N, K) {
  const arr2 = arr;
  arr2.push(1);
  arr2[0] -= 1;
  return deleteN(checkLength(arr2, N), N, K);
}
```
但形成新的長的陣列後還是要再確定一次長度，因為新的長度其實最多只會增加 2 ，所以 `newNumBigger()` 不會用到也可刪除
```js
function checkLength(arr, N) {
  const arr2 = arr;
  if (arr.length % N === 0) {
    arr2.push(1);
    arr2[arr2.indexOf(Math.max(arr2))] -= 1;
  }
  return arr2;
}
```
所以新的程式執行是 makeArr()  ->  checkLength() -> deleteN() -> checkN() -> longArr() -> checkLength() -> ......

雖然修改完只減少 10 行，但 unit test 的時間減少約 1 s ，因為我減少 delete0 需要遞迴的時間，還有主要是不用再重頭形成新長度的陣列。
這題非常需要把一個大 Function 切成許多小功能的 function 的能力，還有能一次處理完的事要一次處理，不要增加時間複雜度。

[HTTP Game 心得](/homeworks/week5/HTTPChallenge/HTTPGame.md)請點