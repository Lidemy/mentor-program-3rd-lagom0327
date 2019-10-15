## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？

#### Gulp

gulp 的主要目的是把工作流程自動化(task runner)，可把重複性的多步步驟整理成可自動完成的任務。
#### Webpack
Webpack 最主要的特色是可以將很多格式的文件(css 和圖片)視為資源引入(source code bundler)，分散的檔案可以打包成一個文件。可減少瀏覽器需發 Request 的數量。


#### 差異
- Gulp 可設定其中一個任務為 Webpack，如不想使用 Webpack 但又須像 node.js 裡使用 `require` 功能插入模組化的文件，必須另外使用 Browserify。

- Webpack 也有 Gulp 中把工作流程自動化的功能，像把 `scss` 檔案編譯成 `css` 檔。但其學習難度較 Gulp 複雜難懂。

#### 我們可以不用它們嗎？
- Gulp : 因其只是把原本一個一個手動的工作改成自動化的流程，如不用 Gulp 就只是改回原本叫浪費時間和人力的手動工作，所以也可以不用此工具。
- Webpack : 
  - 使用環境 : 如果要在瀏覽器上使用 Modules ，那就需要 Browserify 或 Webpack 等 Module bundler。
  - 減少 Request : 可使用 Gulp 加 Browserify 打包或只使用 Webpack 打包
## hw3 把 todo list 這樣改寫，可能會有什麼問題？
每次需重新刷新所有留言，會浪費資源在重新渲染全部的留言。


## CSS Sprites 與 Data URI 的優缺點是什麼？
### CSS Sprites 
- 優點 : 減少瀏覽器發出的 Request
- 缺點 :
  - 要仔細計算每個圖示的位置才能顯示要的圖案
  - 開發者需把所有圖片整合成一張圖，只要其中一張要更改，就要重新整合圖片一次。並重新計算每個圖示的位置
  - 大圖片讀取失敗，意味所有圖片都不能讀取
  - 不可以在 img 標籤裡面的 src 使用，要在 CSS 的 `background` 使用
### Data URI
- 優點 : 
  - 減少瀏覽器發出的 Request
  - 因為 TCP 傳輸特性，傳送一個大檔案比塊個小檔案快。性能較高的網站也能改善 SEO
  - 可以在 `<link>` 、 `<img>` 等的 src 使用
- 缺點 : 
  - Base64 編碼會比原本文件的體積多 33%，使用 gzip 壓縮後也大了2-3%
  - 不會被瀏覽器快取(放在 CSS `background-image` 中的 url 可被快取)
  - 程式碼看起來凌亂
  - Google 不會搜索 Data URI 的圖片，影響 SEO
  - 根據瀏覽器的不同，data URI 有大小限制
  - IE8 之後的版本才能用


#### 參考資料

- [前端构建工具之争——Webpack vs Gulp 谁会被拍死在沙滩上](https://juejin.im/entry/5a4470f85188252b145b5742)
- [Webpack vs Gulp vs Grunt vs Browserify: Which tool to use in 2019?](https://www.cleveroad.com/blog/gulp-browserify-webpack-grunt)

- [Image data URI and SEO](https://webmasters.stackexchange.com/questions/56701/image-data-uri-and-seo)
- [投向Data URI的懷抱！](https://neversaycoding.tumblr.com/post/96379343807/%E6%8A%95%E5%90%91data-uri%E7%9A%84%E6%87%B7%E6%8A%B1)
- [淺嚐Data URI](https://blog.darkthread.net/blog/data-uri)