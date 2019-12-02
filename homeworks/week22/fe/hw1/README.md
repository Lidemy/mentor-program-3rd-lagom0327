# [Demo](https://lagom0327.github.io/react-blog)

- 只顯示有標題的文章
- 可顯示 markdowon 格式，但有些 tag 的 css 被我 reset 了，所以看不出差別
- 使用 `BrowserRouter` 後， 刷新網頁會找不到，把 404.html 內容改成  index.html 的內容
  - `package.json` 內 `build` 的指令加上 `cp build/index.html build/404.html`，就會自動複製過去

- 直接在 `mentor-program-3rd-lagom0327` 資料夾中使用 create-react-app 建立此檔案，需在 `hw1` 中新增 `.env`， 文件中寫 `SKIP_PREFLIGHT_CHECK=true` 用來忽略套件衝突

## 部屬
1. `npm install gh-pages --save-dev`
1. `package.json` 加上 `homepage` 屬性
    ```json 
    "homepage": "http://lagom0327github.io/react-blog"
    ```
1. `package.json` 的 `scripts` 中加上

    ```json
    "scripts": {
    //...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
    }
    ```
1. `git init` 
    -> `git remote add origin https://github.com/lagom0327/react-blog.git` 
    -> `npm run deploy` 會要求輸入 github 帳號密碼，
    成功後會在 `react-blog` 的 repository 新增名為 `gh-pages` 的 branch。
1. 到 github 的 repository 的 setting 中 `Github Pages` 來源為 `gh-pages branch`
 

  ### 參考資料
  - [React-router 在 github page 的問題](https://blog.hidana.me/20190813.html)
  - [react-markdown 使用总结](https://segmentfault.com/a/1190000020294373)