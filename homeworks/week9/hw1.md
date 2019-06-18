資料庫名稱：comments
使用 Adminer ， [ ] 裡是預設值

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    integer(11)  unsigned    | 留言 id (主鍵 自動填入)    |
|nickname| varchar(64)  | 	留言者的暱稱|
|content| text |留言內容|
|created_at| datetime [CURRENT_TIMESTAMP] | 留言時間|

int(11) 代表字串長度為 11 ，占了 4 bytes = 32 bits，所以可用 signed 2^31 -2147483648到2147483647 ；unsigned 2^32 0到429496729

## hw3 資料庫

資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    integer  unsigned    | 留言 id   (主鍵 自動填入)   |
|user_id| integer unsigned  | 	留言者的使用者 id|
|content| text |留言內容|
|created_at| datetime [CURRENT_TIMESTAMP] | 留言時間 (自動填入)|
|is_deleted| tinyint(4) [0] | 留言是否被刪除|

資料庫名稱：users

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    integer  unsigned    | 使用者 id  (主鍵 自動填入) (自動填入)  |
|username| varchar(16) | 	使用者帳號名|
|password| varchar(16) |密碼 |
|nickname | varchar(64) | 暱稱 |
|created_at| datetime [CURRENT_TIMESTAMP] | 帳號建立時間|
