## 前四週心得與解題心得

複習 JS102 筆記時，看到這個範例是說明展開的 array 如果還有包含另一個 巢狀陣列 ，就算使用展開複製，只有真的複製前三個，最後一個還是指向 nestedArray 的記憶體位址。

```js
var arr = [1, 2, 3, nestedArray]
console.log('arr', arr)
var arr2 = [...arr]
console.log('arr2',arr2)
console.log(arr[3] === arr2[3])
```
但我試著把 `arr2[3] = 3` 時發現 nestedArray 值並不會改變，那到底展開後 `arr2[3]` 是 pass by value 還是 pass by reference ? 而且 `arr[0] === arr2[0]` 也為 true 啊 ? 
認真查在 array 在檢查 `===`到底檢查了甚麼 ? 才發現我根本沒搞懂 `===` 的用法，和 Javascript 中變數的型別。
看完這篇文章[Javascript 基礎打底系列 (一) - 常見的出包狀況解析](http://sweeteason.pixnet.net/blog/post/42992357-javascript-%E5%9F%BA%E7%A4%8E%E6%89%93%E5%BA%95%E7%B3%BB%E5%88%97-%28%E4%B8%80%29---%E5%B8%B8%E8%A6%8B%E7%9A%84%E5%87%BA%E5%8C%85%E7%8B%80%E6%B3%81) 中有詳細型別和判斷的的情形

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