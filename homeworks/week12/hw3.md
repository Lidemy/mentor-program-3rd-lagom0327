## 請說明 SQL Injection 的攻擊原理以及防範方法

SQL Injection 視藉由 SQL 語法上的漏洞，使用特殊字元改變語法上邏輯，讓 Server 發出不是設計者預想的指令。
範例 : 
一般檢查登入資料的 SQL 指令如下
```sql
SELECT * FROM users WHERE username='$username' AND password='$password'
```
攻擊者將帳號輸入 `' or 1=1 --` 密碼隨便輸一個
因為 -- 是註解的作用所以後面的 SQL 指令 被忽視了，實際送出的 SQL 為 
```sql
SELECT * FROM user WHERE username='' OR 1=1
```
因為 1=1 永遠成立，所以攻擊者可以直接登入。除了直接登入外，更危險的還有可以刪除整個資料庫 SQL Injection 。

防範方法 : 
使用 Prepared Statement，SQL 指令中的參數以 `?` 作為佔位符取代，再設置每個問號的型態，形成樣板後參數的地方就不會被 SQL Injection 。

## 請說明 XSS 的攻擊原理以及防範方法
跨網站指令碼 (Cross-site scripting)，攻擊者可利用網頁中可由用戶輸入控制的地方(留言區、暱稱) 輸入惡意程式碼。所有訪客進到這個網頁後會自動執行惡意程式碼。惡意程式碼可能會自動將使用者的資訊傳回攻擊者的 Server ，拿到使用者的資訊後便能進一步做其他事。
XSS 可分為儲存型和反射型，
- Stored XSS (儲存型)
  攻擊者在留言中輸入程式碼 ，Server 會將這串字保存在資料庫。如果沒有經過處理直接將這個留言取出時瀏覽器會將其認為也是程式碼的一部分並執行，所以任何人進到這個網頁時都會執行這段程式碼。
- Reflected XSS (反射型)
將指令放進 URL 上的 query string  裡並不會存在資料庫中，當後端會以 GET 拿到 query string 中的參數後網頁會執行此惡意程式碼。只有點進攻擊者提供的網址才會被攻擊。

防範方法：後端輸出資料時要使用跳脫將特殊字元(< > " ' / &) 變成 HTML 跳脫字元 ，瀏覽器只會視該段程式碼唯一般的字串而不會執行。 
## 請說明 CSRF 的攻擊原理以及防範方法
跨站請求偽造 (Cross Site Request Forgery)，使用者在 `a.com` 登入的 Cookie 還沒過期時，使用第三方的網站 `b.com` ，`b.com` 會在使用者不知情的狀況下發出 `a.com/delete?id=3` 的 Request 嘗試攻擊，因為瀏覽器會自動把 `a.com` 這個 Domain 下的 cookie 一起附上，Server 得到登入的 Cookie 所以誤認是本人發出的 Resquest 後，就執行 DELET 的動作。

防範方法 : 
  - 驗證 HTTP Referer
  檢查 Request 的 Referer 是否從合法的 domain 來的 ，不是從合法的 domain 來的就無視此次 Request 。但是如果 Request 沒有附帶 Referer 就無法檢查，且 domain 名像似的 (ex: a.com 和 a.com.attack.com) 後者也會被誤認為合法的 Domain。所以此方法不實用。
  - 要求使用者輸入驗證碼
  因為驗證碼是隨機產生的所以攻擊者不會知道驗證碼是甚麼，所以可以有效預防 CSRF 。但每次要求動作時都要輸入驗證碼的話使用者體驗會很差。
  - CSRF token (Double Submit Cookie)
  在 form 裡加上一個 hidden 的 input，值為隨機的 csrftoken。並在 a.com 的 Domain 裡寫入 csrftoken 值的 cookie。Server 端只要檢查兩邊的 csrftoken 的值是否相同，就任確定是否是使用者發出的 Request。雖然攻擊者可以也在 form 裡加上 csrftoken 但攻擊者並不能在 a.com 的 Domain 下增加 cookie，發送 Request 自然不會有 csrftoken 的 Cookie　附上，所以後端就能確定這個 form 不是由 a.com 生成也不是使用者自己生成的。如果被掌握了 subdomain 能幫 a.com 寫 Cookie ，那攻擊者就能自己製造兩份一樣的 csrftoken 分別放在自己製造的 form 和 a.com 的 Cookie 裡騙過後端。
- Cookie 設定 SameSite
  大部分新版的瀏覽器(IE 只支援在 Windows 10 裡的 IE 11)可新增 Cookie 的 SameSite 的屬性，設定後在 `Strict` 模式下，在其他網域下向 a.com 發出 Request 都不會附上指定的 Cookie ，指定的 Cookie 為登入識別用的 Cookie 時，Server 因沒有收到登入識別用的 Cookie 所以會拒絕這次請求。 設定為 `Lax` 模式下的只有在使用 `GET` 會帶上 Cookie ，所以使用 `Lax` 模式時要小心不要把重要功能做成用 `GET` 就能完成。 這個被掌握 sub domain 好像還是會被攻擊 ? 不過至少不用每個 form 都要加上 csrftoken，對開發網站的人來說較方便。

- 參考資料
  - [【網頁安全】給網頁開發新人的 XSS 攻擊 介紹與防範](https://forum.gamer.com.tw/Co.php?bsn=60292&sn=11267)
  - [讓我們來談談 CSRF](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)
  - [SameSite' cookie attribute](https://caniuse.com/#feat=same-site-cookie-attribute)