## hw4：What is this?

請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
``` js
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ?? 
obj2.hello() // ??
hello() // ?? 
```
- 輸出 
  - `obj.inner.hello()` : 2
  - `obj2.hello()` : 2
  - `hello()` : undefined 

`this` 是看怎麼被呼叫決定的，`xxx.hello()` 可以看成 `xxx.hello.call(xxx)` ，在 `call()` 的用法裡，第一個參數就是指定的 `this`。
1. `obj.inner.hello()` 等於 `obj.hello.call(obj.inner)` 。 `this` 為
    ```js
    {
      value: 2,
      hello: function() {
        console.log(this.value)
      }
    }
    ```
    因為 `this.value` 為 `2` ，所以 `console.log(this.value)` 輸出 `2`
1. `obj2.hello()` 等於 `obj2.call(obj2)`。而前面 
`const obj2 = obj.inner` 這行表示 obj2 的記憶體位置指向了 obj.inner，所以這裡的 `this` 也和上題一樣。輸出結果也為 `2`
1. `hello()` 等於 `hello.call()` ，意指沒有指定 `this` ，所以 `this` 為 `undefined`
