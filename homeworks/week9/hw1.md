index.php

admin.php
資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    integer  unsigned    | 留言 id     |
|nickname| varchar(32)  | 	留言者的暱稱|
|content| text |留言內容|
|created_at| datetime [CURRENT_TIMESTAMP] | 留言時間|


資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    integer  unsigned    | 留言 id     |
|user_id| integer unsigned  | 	留言者的使用者 id|
|content| text |留言內容|
|created_at| datetime [CURRENT_TIMESTAMP] | 留言時間|
|is_deleted| tinyint(4) [0] | 留言是否被刪除|

資料庫名稱：users

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
|  id  |    integer  unsigned    | 使用者 id     |
|username| varchar(32) | 	使用者帳號名|
|password| varchar(32) |密碼 |
|created_at| datetime [CURRENT_TIMESTAMP] | 帳號建立時間|
|is_deleted| tinyint(4) [0] | 帳號是否被刪除|