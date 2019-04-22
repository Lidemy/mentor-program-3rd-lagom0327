## 請解釋後端與前端的差異。
前端是消費者看的到或碰的到的地方，例如購物網站上的商品分類、商品描述規格、圖片排版、輸入帳號密碼的過程、結帳流程用的線上付款介面，有時也要管理數據 : 像消費者按進哪些商品的頁面的數據都要記錄起來

後端是消費者看不到的地方: 主要是管理資料庫，像是商品的庫儲狀況，消費者的帳號密碼。也要開發各種功能，點讚、商品評論、如何顯示物流壯況。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
按下 Enter 後， 會以加密方式傳輸 "JavaScript" 和搜尋者的個人資料(使用習慣、位置、語言、裝置)，到 Google 的伺服器，伺服器將收到的資料解密後，在 Google 已幫網頁建立好索引的資料庫裡找到和 "JavaSpript" 這個標籤有關的網址，再結合搜尋者的個人資料，利用演算法算出網頁排名，算出網頁排名的資料被經過加密後回傳，到我的電腦裡的 Google 瀏覽器，瀏覽器再將資料解密成網頁懂的語言，將結果顯示出來。 


## 請列舉出 5 個 command line 指令並且說明功用
指令| 說明|範例
---|---|---
find|在整個硬碟裡的資料搜尋，輸出其位置| `find <file's name>`
locate|在資料庫來搜尋，輸出其位置| `locate <file's name>`
clear|清空 CLI | `clear` 讓畫面 CLI 變乾淨
chmod|修改檔案權限| `chmod 664 README.md`修改檔案權限為 ` -rw-rw-r--` , r = 4, w = 2, x =1
cut | 將一段訊息的某一段切出來|`echo $PATH \| cut -d ':' -f 5 ` 印出 PATH 變數的第五個路徑

- 參考資料
[Wikipedia - Google搜尋](https://zh.wikipedia.org/wiki/Google%E6%90%9C%E7%B4%A2)
[Google 搜尋的運作方式](https://support.google.com/webmasters/answer/70897?hl=zh-Hant)
[鳥哥的 Linux 私房菜 第十章、認識與學習BASH](http://linux.vbird.org/linux_basic/0320bash.php#ps2)
[Linux Command 命令列指令與基本操作入門教學](https://blog.techbridge.cc/2017/12/23/linux-commnd-line-tutorial/)
[搜尋指令 which, whereis, locate, find的差別](http://blog.faq-book.com/?p=1013)
