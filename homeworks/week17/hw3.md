## hw3：Hoisting

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

``` js
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```

答案
```
undefined
5
6
20
1
10
100
```
因為程式運作時會先處理宣告的變數和函式，變數被宣告時會被先指定為 `undefined`，所以在賦值之前使用都會取到其值為 `undefined`
1. globalEC 編譯
    ``` 
    globalEC: {
      VO: {
      a: undefined,
      fn: function,
      },
      scopeChain: [globalEC.VO]
    }
    ```
1. globalEC 執行
1. `a = 1` 找到 globalEC.VO 裡的 a 賦值
    ``` 
    globalEC: {
      VO: {
      a: 1,
      fn: function,
      },
      scopeChain: [globalEC.VO]
    }
    ```
1. fnEC 編譯，第二次出現的 `var a` 因為已經宣告過了所以不用處理
    ```
    fnEC: {
      AO: {
        a: undefined,
        fn2: funciton,
      },
      scopeChain: [fnEC.AO + globalEC.VO]
    }
    ```
1. fnEC 執行，
  a. 第一行的 `console.log(a)`，因為此時的 fnEC.AO 中的 `a` 為 `undefined` ，所以輸出 `undefined`
  b. 第二行為 `a = 5`，找到 fnEC.AO 中的 `a` 更新其值為 `5`
      ```
    fnEC: {
      AO: {
        a: 5,
        fn2: funciton,
      },
      scopeChain: [fnEC.AO + globalEC.VO]
    }
    ```
    c.  第一行的 `console.log(a)`，因為此時的 fnEC.AO 中的 `a` 為 `5` ，所以輸出 `5`
  d. 第四行 `a++` ，fnEC.AO 中的 `a` 更新其值為 `6`
        ```
    fnEC: {
      AO: {
        a: 6,
        fn2: funciton,
      },
      scopeChain: [fnEC.AO + globalEC.VO]
    }
    ```
1. fn2EC 編譯 ，因為裡面第二行和第三行的 `a = 20` 和 `b = 100` 都只是單純的賦值，所以 fn2EC.AO 為空的
    ```
    fn2EC: {
      AO: {
      },
      scopeChain: [fn2EC.AO + fnEC.AO + globalEC.VO]
    }
    ```
1. fn2 執行
  a. `console.log(a)` :  因為 fn2EC.AO 找不到 `a` 所以沿著 `scopeChain` 網上找。在 fnEC.AO 找到 `a` 的值為 `6` 輸出 `6`
  b. `a = 20` : 因為 fn2EC.AO 找不到 `a` 所以沿著 `scopeChain` 往上找。在 fnEC.AO 找到 `a`，將 `a` 更新為 `20`。
      ```
      fnEC: {
        AO: {
          a: 20,
          fn2: funciton,
        },
        scopeChain: [fnEC.AO + globalEC.VO]
      }
      ```
    c. `b = 100` : 因為 fn2EC.AO 找不到 `b` 所以沿著 `scopeChain` 往上找都在不到，所以在 globalEC 宣告一個變數 `b` 其值為 `100`
      ``` 
    globalEC: {
      VO: {
      a: 1,
      b: 100,
      fn: function,
      },
      scopeChain: [globalEC.VO]
    }
    ```
1. `fn2()` 執行完將 `fn2EC` 消除，換執行下一行的 `console.log(a)` ，因為此時 fnEC.AO 中的值已經被更改為 `20`，所以輸出 `20`
1. `fn()` 執行完畢，將 `fnEC` 消除，換執行下一行的 `console.log(a)`。此時 globalEC.AO 中的值為 `1`，所以輸出 `1`
1. `a = 10` : 在 globalEC.VO 中找到 `a`，將 `a` 更新為 `10`。
      ``` 
    globalEC: {
      VO: {
      a: 10,
      b: 100,
      fn: function,
      },
      scopeChain: [globalEC.VO]
    }
    ```
1. `consloe.log(a)` : 在 globalEC.VO 中找到 `a` 的值為 `10`， 輸出 `10`
1. `console.log(b)` : 在 globalEC.VO 中找到 `b` 的值為 `100`， 輸出 `100`



