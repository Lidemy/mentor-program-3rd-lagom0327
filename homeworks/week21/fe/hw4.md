## 為什麼我們需要 React？可以不用嗎？
可以不用，但當畫面元素變複雜，需要操作 Dom 的 Function 愈來愈多。只要一個操作 Dom 的 Funciton 忘記呼叫，Dom 就可能和 資料不符。
React 是將 state 和 UI 對應，只要 state 有變， UI 就會更著改變，能確保 Dom 和資料一樣。不需再寫各種直接操作 Dom 的 Function。
## React 的思考模式跟以前的思考模式有什麼不一樣？
之前的思考模式是把資料存在 html 裡，資料有改變時，直接新增或刪除 Dome 的 node 。
React 是把資料存在 static 裡，將 state 和 UI 綁定，只要 state 有變，就會製造一個 Virtual Dom 和 舊的 Dom 做 Diff，再處理真的有差異的地方，不會真的重新渲染全部。
React 另一個特點是 Component，Component 之間可以自由組合或嵌套形成一整個元件。每個 Component 都可以有自己的 state 和 props。因為使用 React 的網頁畫面元素全是由 React 控制，所以打開網頁原始碼會是一遍空白。

## state 跟 props 的差別在哪裡？
state 會對應到 Component 的 UI ，只要 state 有改變，React 就會自動建立一個 Virtual Dom 判斷要不要對實體的 Dom 操作。
props 是 Component 被建立時上層的傳入的屬性，不會和 UI 綁定。如果組件沒有 state 構成，那就形成了 Stateless Component。設定組件傳入的 props 是和父組件的 state 綁定，只要父組件的 state 有改變 Stateless Component 也會重新 render

## 請列出 React 的 lifecycle 以及其代表的意義
### Mount
1. `componentDidMount()` : `render()` 後
    -    situation : 拿取 Dom 的資料 、 拿 Ajax 資料、定時器啟動
1. `componentWillUnmount()` : Component 要被移除前
    - situation : 清除資料、清除定時器

`constructor()` => `componentWillMount()` => `render()` => `componentDidMount()` => ... => 刪除 Component => `componentWillUnmount()`

- `componentWillMount()` 已經被列為不安全， 建議動作改到 `componentDidMount()`做
### Update 
1. `shouldComponentUpdate(nextProps, nextState)` : `render()` 前調用，預設回傳 `true`。回傳 `false` 就不會呼叫 `render()`。 
   - situation : 可判斷可使 state or props 無改變時回傳 `false` 優化效能。
1.  `compomentDidUpdate()` : `render()` 後調用，`state` 真的改變後，`shouldComponentUpdate()` 回傳 `false` 的話，使函式不會被調用。 
    - situation: 拿取 Dom 的資料、 Ajax


### Unsafe Lifecyle methods
- `componentWillMount()` : `render()` 前
- `componentWillReceiveProps(nextProps)` : Component 從 parent Component 得到新的 props 前用
- `componentWillUpdate()` : Component 開始重新 rendre 前用
- `getDerivedStateFromProps()`
- `getSnapshotBeforeUpdate()`