## hw1：Event Loop

在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```
1. 答案為 `1, 3, 5, 2, 4`
1. 程式還沒執行時 `Call Stack` 和 `Callback Queue` 裡都沒有東西。
1. 執行後一開始先在 `Call Stack` 裡放 `console.log(1)` 
1. `console.log(1)`  被執行，瀏覽器的 console 輸出 `1`
1. `console.log(1)` 因為執行完了，從 `Call Stack` 移除
1. 將 `setTimeout(()=>{}, 0)` 放進 `Call Stack` 裡
1. `setTimeout()` 被執行，因為不是 V8 內建的函式，在 `Web API` 增加一個定時器將會呼叫匿名函式，
1. `setTimeout()` 執行完，從 `Call Stack` 移除，因為定時器時間訂為 0 所以將匿名函式放到 1. `Callback Queue`
1.  `console.log(3))` 放到 `Call Stack`
1.  `console.log(3)`  被執行，瀏覽器的 console 輸出 `3`
1.  `console.log(3)` 因為執行完了，從 `Call Stack` 移除
1.  將 `setTimeout(()=>{}, 0)` 放進 `Call Stack` 裡
1. `setTimeout()` 被執行，因為不是 V8 內建的函式，在 `Web API` 增加一個定時器將會呼叫匿名函式，
1. `setTimeout()` 執行完，從 `Call Stack` 移除，因為定時器時間訂為 0 所以將匿名函式放到 1. `Callback Queue`，此時 `Callback Queue` 裡有兩個匿名函式
1. `console.log(5))` 放到 `Call Stack`
1.  `console.log(5)`  被執行，瀏覽器的 console 輸出 `5`
1.  `console.log(5)` 因為執行完了，從 `Call Stack` 移除
1.  Event Loop 檢查到 `Call Stack` 是空的，所以換檢查 `Callback Queue` 有無函式，有函式，將先1. 進來的匿名函式放到 `Call Stack`
1.  匿名函式被執行，`console.log(2)` 放到 `Call Stack`
1.  `console.log(2)`  被執行，瀏覽器的 console 輸出 `2`
1.  `console.log(2)` 因為執行完了，從 `Call Stack` 移除
1.  匿名函式從 `Call Stack` 移除
1.  Event Loop 檢查到 `Call Stack` 是空的，所以換檢查 `Callback Queue` 有無函式。將匿名函式放1. 到 `Call Stack`
1. 匿名函式被執行，`console.log(4)` 放到 `Call Stack`
1.  `console.log(4)`  被執行，瀏覽器的 console 輸出 `4`
1.  `console.log(4)` 因為執行完了，從 `Call Stack` 移除
1.  匿名函式從 `Call Stack` 移除


