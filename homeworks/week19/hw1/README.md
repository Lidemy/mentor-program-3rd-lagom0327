## 拿到 guest 所有未刪除的 Todo Item
GET http://sio2.tw/TodoList/api.php

## 拿到指定 id 的 Todo Item (未刪除)
GET http://sio2.tw/TodoList/api.php?id=1
不是作者的話會得到 "You don't have permission to get this Todo Item!"
## 新增 Todo Item
```ssh
 curl -X POST http://sio2.tw/TodoList/api.php -d "content=curltest"
```
get id {"id":52}
POST http://sio2.tw/TodoList/api.php
```
{
  userId: 1,
  content: 'xxx',
}

```
如果使用者 id 和 session 比對不符會新增失敗
## 修改 Todo Item
```ssh
 curl -X POST http://sio2.tw/TodoList/api.php -d "id=52&content=curltest"
```
不是作者不能修改
## 修改 Todo Item 狀態

```ssh
curl -X POST http://sio2.tw/TodoList/api.php -d "id=48"
```
不是作者不能修改
"success"

## 刪除 Todo Item 狀態
```ssh 
curl -X DELETE http://sio2.tw/TodoList/api.php?id=52
```

不是作者不能刪除