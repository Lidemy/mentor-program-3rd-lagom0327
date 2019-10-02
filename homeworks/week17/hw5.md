
### Scope
在這周之前我都沒有發現之前上課舉的 For 迴圈例子幾乎都是用 ES6 前 `var` 的，原來 ES6 新增的 `const` 和 `let` 和 `var` 相較並不是單純只有表明出變數會不會改變的功用，還有 scope 範圍的不同。

### Hoisting
之前雖然有提過 Hoisting 但因為不知道為甚麼會有 Hoisting 的存在，所以學完沒有複習一下子就忘記了。但這周學完 Execution context 了解到程式背後如何運作之後，就能輕鬆理解 Hoisting 如何運作，相信以後不太會忘記 Hoisting。

### Closure
之前看文章時常常出現這個詞，雖然不知道這詞是甚麼意思我還是一直沒有去查，聽完影片後才比較知道這技術的目的是要讓變數可以保存但在 global 又不能改變此變數。

### Prototype
這裡出現一堆 `proto` 開頭的名詞，實在很容易混淆。原來繼承是透過 Prototype Chain 來實現，所有型別的源頭都可藉由一層一層地往上找直到 `Object.prototype.__prototype__ = Null` 為止。學完 Prototype Chain 之後，更了解程式運作的原理，也知道透過指定 prototype 能把函式指定為公用的，減省記憶體空間。

### this 
`this` 之前在 C++ 曾看過的地方就只有在學 `class` 的時候，那時候沒有覺得 `this` 的概念很複雜。 但看到[淺談 JavaScript 頭號難題 this：絕對不完整，但保證好懂] 一開始「完全」的完全搞懂 `this` 的題目嚇到，為甚麼有那麼多呼叫函式的用法。但還好真的有意思的 `this` 和我以前學的一樣都是物件導向的。除了正常使用實例呼叫函式的用法，其他利用 `call` 形式來看就能輕而易舉知道所指 `this` 是甚麼。
