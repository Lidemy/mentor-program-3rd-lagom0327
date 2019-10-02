## hw2：Event Loop + Scope

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
答案
```
i: 0
i: 1
i: 2
i: 3
i: 4
5
5
5
5
5
```
因為 `var` 的生存範圍為 `funciton`，使用 For 迴圈(並不是 Funciton)時使用的 i 都是指向同一個記憶體位址。For 迴圈跑完時 `i` 已經變成 `5` ，此時 `console.log(i)` 才取用 `i`，所以取到的 `i` 都為 `5`

1. 程式編譯產生 global Excution Content
    ```
    globalEC: {
      VO: {
          i: undefined,
        setTimeout: function
      },
      scopeChain: [globalEC.VO]
    }
    ```
1. 執行 `i = 1`，globalEC 變為
    ```
    globalEC: {
      VO: {
          i: 1,
      },
      scopeChain: [globalEC.VO]
    }
    ```
1. 檢查 `i < 5` 後進入迴圈，執行 `console.log('i:', i )`，因為 globalEC 中的 VO 的 i 等於 1 ，輸出 `i: 1`
1. 執行 
    ```
    setTimeoutEC: {
      AO: {
        anynoumous : function,

      }
    }
    ```
    ```js
      setTimeout(() => {
        console.log(i)
      }, i * 1000)
    ```
    因為 i = 1 ，所以在 Web API 設一個 1000 ms 後將執行匿名函式的計時器
1. 將 i + 1 變成 2，回到步驟 3, 4 重複五次，cosole 現在為
    ```
    i: 0
    i: 1
    i: 2
    i: 3
    i: 4
    ```
    此時 globalEC 的 `i = 5`
1. 因為 `Call Stack` 為空的，`Event Loop`  換檢查 `Callback Quene` 。如果 Web API 中的計時器時間已經到了，會將匿名函式排進 `Callback Quene`，Event Loop 檢查到有東西，就將先進的函式放入 `Call Stack` 。
1. 匿名函式編譯
    ```
    Anonymous Function EC : {
      AO: {
      },
      scopeChain: [Anonymous FunctionEC.AO + globalEC.VO]
    }
    ```
1. 匿名函式執行 `console.log(i)`，因為其 AO 裡沒有變數 `i` 所以沿著 scopeChain 往上找，在 globalEC.VO 找到變數 `i = 5`。輸出 `5`。
1. 將匿名函式從 `Call Stack`移除
1. 重複步驟 6 ~ 9 四次後 console 的結果就為 
    ```
    i: 0
    i: 1
    i: 2
    i: 3
    i: 4
    5
    5
    5
    5
    5
    ```