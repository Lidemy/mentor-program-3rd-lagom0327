## 請以自己的話解釋 API 是什麼
API 像電視遙控器，提供一個使用者如何和電視機上盒溝通的媒介。
看電視時想轉台，不可以直接和電視講 : hi~ 電視，幫我轉到 XX台。 這台電視不是高科技的 iPad 自帶 Siri 可以幫忙控制，並需用電視機上盒廠商規定好控制電視的方法才能成功遙控電視，而且能提供甚麼服務都是規定好的，所以想怎麼控制和能控制甚麼都不能自創。
例如 :
想要更改電視頻道的代號，廠商說明書有教學怎麼做，所以利用遙控器我可以把討厭的電視台號碼往後移，機上盒就會更改內部的資訊紀錄新的電視台代號，下次電視打開時 1 號頻道就不會是討厭的電視台。
但如果我想要刪掉電視裡的假新聞製造台，但說明書裡沒提到能這樣做，就算我有遙控器我有不能刪掉任何一台電視頻道。



## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- 414 URI Too Long
要求讀取的 URL 太長，超過伺服器能編譯的長度，所以拒絕使用者的要求。
- 451 Unavailable For Legal Reasons
想要讀取的網站因為法律的規定 EX : 違反著作權、隱私權 ...，或有政府要求刪除此網頁，而拒絕使用者訪問。雖然拒絕被訪問，但網頁的內容並沒有被刪除，通常使用其他方法可看到網頁內容。https://theinitium.com/article/20160628-mainland-githubcensor/


> 「451」源自小說《華氏 451度》，小說中描繪的政府致力於焚盡世上所有書籍，而紙的燃點是華氏 451 度。 「451」作為錯誤代碼從2015年12月起正式生效，專門用於標註官方審查的事件，與「404」不同，「451」描述了網頁被封禁的具體原因，並且，服務器會完整保留被封鎖的內容。  
>   原文：《開源「趙家人」名單，GitHub激怒中國網安協會首出拳》 https://theinitium.com/article/20160628-mainland-githubcensor/?utm_medium=copy
> © 端傳媒 Initium Media
> 
此條可能去極權國家使用網路時常看到吧XD
- 511 Network Authentication Required 
用戶必須要先獲得驗證後才能使用網路存取服務。例如:手機已連接免費 Wifi 但還沒有登入或看完廣告，想看網頁時會出現。


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
| 說明            | Method | path       | 參數                   | 範例             |
|----------------|--------|------------|----------------------|----------------|
| 回傳所有餐廳資料| GET    | /restaurants    |  _limit:限制回傳資料數量 <br>  style:特定餐廳類型  <br>  opened_at:YYYY-MM-DDT00:00:00Z 時開著的餐廳    | /restaurants?_limit=5 <br> /restaurants?_limit=5&style=western <br> /restaurants?opened_at=2019-05-10T00:00:00Z |
| 回傳單一餐廳資料 | GET    | /restaurant/:id | 無              | /restaurant/33   |
| 新增餐廳  | POST   | /restaurants   | name: 餐廳名 <br> style: 餐廳類型 | 無              |
|更改餐廳| PATCH|/restaurants/:id|name: 餐廳名 <br> style: 餐廳類型|無
|刪除餐廳   | DELETE   | /restaurants/:id    | 無 | 無              |

