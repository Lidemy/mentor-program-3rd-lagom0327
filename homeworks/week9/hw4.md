## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼
VARCHAR(M)) 可以指定最大字串長度 M (1 ~ 255)，但如果輸入的資料長度小於最大長度 M，那就使用多少記憶體位置。儲存時在 MySQL 中尾部的空格被刪除 
TEXT，在 MySQL 最大長度為65535，如果有指定長度也會被忽略。可用來儲存 TEXT 或 BLOB (binary large object )。 Transact-SQL 即將刪除這個型態。
TEXT 能使用的操作符和函式比 VARCHAR 少很多。[SQL Server中Text和varchar(max)数据类型区别](https://www.cnblogs.com/jhxk/articles/1633578.html)

## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又會以什麼形式帶去 Server？
因為 HTTP 協議是 stateless ，Client 端每次發 Request 都是獨立的，Server 端不會知道這個 Request 和剛剛哪個 Request 是不是同一個 Client 發出，所以需要 Cookie 是幫忙 Server 端記憶這個 Clinet 是哪一個。 Server 端在沒有收到 Cookie 前的 Response Header 中會帶一個`Set-Cookie` 在 Client 端鍵立 Cookie。 該 Client 同意 Server 借放一張識別證 Cookie 在 Client 端後，下次同樣的 Client 端在發送一次 Request 時就不需要再重新登入一次告訴 Server 端是哪一個 Client 端來了，在同一個 Domain 下 Request 的 Headers 會自動帶上 Cookie ，Cookie 上面有一些小型的資料。 Server 將這個小型的資料拿回自己的資料庫解析搜尋後，便可以得到此 Client 的詳細資料。 Ex : 帳號資訊、做過甚麼事(購物車內容 點讚的地方)。 



## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？
- 如果從 node.js 發送 Resquest 並在 Header  中偽造一個 Cookie，騙過我設立的檢查機制 `if(!isset($_COOKIE["user_id"]))`，就能直接留言。
- 沒有指定 Cookie 能用的 Path ，因為和同學的作業網址都是在同一個 Domain 下，瀏覽器每次發 Request 時都會幫忙把 Cookie 帶上。如果正好同學的 Cookie 名稱的和我的一樣，那就能直接留言，但我的系統可能找不到這個會員資料。
- 密碼是以明碼存儲，能登入資料庫的工作人員都能看到且可直接在資料庫修改會員資料，不小心在資料庫修改會員資料到或持有資料庫帳密的工作人員想惡意使用會員資料也難以阻止。
- 註冊和登入會員時帳號和密碼是以明碼傳輸到資料庫，中間可能會被攔截竊取，應該要加密後才能真的發出 Request 到資料庫。

