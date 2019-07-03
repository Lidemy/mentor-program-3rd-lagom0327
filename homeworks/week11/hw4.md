## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫
雜湊函數 (Hash function) : 把無限的輸入經過雜湊函數計算後得到有限的輸出(hash code)。當輸入的值是一樣時，輸出一定一樣。但當兩個不同的輸入值輸出一樣的 hash code 稱為雜湊碰撞。因為會有雜湊碰撞，所以無法由 hash code 逆推確定當初的輸入值是甚麼。
加密 : 是把看得懂的文件變成像亂碼一樣的密文，沒有金鑰(key)的人無法解密使亂碼變回原本的文件。加密是可逆的，只要有解密的 key 就可以逆推回當初的輸入值是甚麼。

密碼需要經過雜湊處理是因為，Server 端並不需要知道密碼是甚麼，只需要驗證每次 Client 登入時輸入的密碼的 hash code 是否和註冊時的密碼的 hash code 一樣。Server 就算知道該 Client 端密碼的 hash code 是甚麼也無法逆推回 Client 的真實密碼，可避免資料庫外洩時，Client 端的真實密碼也跟著被公布。

## 請舉出三種不同的雜湊函數
- MD5訊息摘要演算法(MD5 Message-Digest Algorithm) : 輸出 128 位元的 hash code，已被破解，且無法避免碰撞。
- 安全雜湊演算法 (Secure Hash Algorithm) : 美國國家安全域開發的演算法，輸出的 hash code 的位元數比 MD5 多，SHA-1 已被破解。 SHA-3 和之前 SHA 系列的演算法不同。
- bcrypt : `password_hash` 函式中預設的雜湊演算法，salt 的值為隨機的，可有效抵抗彩虹表破解。可設定 `cost` 參數，`cost` 愈大，計算雜湊函數需花費時間愈久，避免密碼被快速破解。

## 請去查什麼是 Session，以及 Session 跟 Cookie 的差別
Session : 放一張號碼牌(session id)到 Client 端瀏覽器中的 Cookie 中，使用 `session_start()`  建立的號碼牌預設名稱為 `PHPSESSID`，Server 端也會在自己的Database、記憶體或檔案中存下 session id ，以及 Client 端的其他資料。之後 Client 端每次發 Request 到 Server 時都會帶上 Session id，Server 端憑著這個 Session id 到自己的專門存放 Session 的地方找出檔案名一樣的，並查看裡面存放哪些相關資料。並根據這些以前存下的資料作判斷回傳客製化的 Response　回去。

Session 跟 Cookie 的差別 : Cookie 是把所有要記錄的資料都放在 Client 端，而 Session 只會放一個 Session id 在 Client 端。Client 端可以偽造 Cookie 內的資料，從 Server 端得到原本不應該給的 Response。而 Session 只會放一個看起來像亂碼的 Session id 在 Client 端， Client 端偽造 Session id 發出 Request ，Server 端存放 Session 的地方沒有這個 id 也就不會給於 Response。


##  `include`、`require`、`include_once`、`require_once` 的差別
使用 require 必定會引入該文件，所以通常放在 PHP　檔案的一開頭。而　include 可以放在判斷條件裡決定要不要引入。
require 的文件如果不存在會產生一個 fatal error，並停止運行程式。include 的文件如果不存在則會產生 Warining 繼續執行程式。
還有 include 可回傳值。

include_once 和 require_once 類似，出現時 PHP 會去找上方是否有出現過同樣檔名，如果出現過就不會重複引入。


[Web 技術中的 Session 是什麼？ ](http://fred-zone.blogspot.com/2014/01/web-session.html)
[include和require 的区别？Include和include_once又有什么区别？ 面试必考题](https://gist.github.com/suziewong/4371624)