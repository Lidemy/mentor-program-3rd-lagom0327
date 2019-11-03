## 拿到目前 SESSIONID 下所有未刪除的 Todo Item
GET http://sio2.tw/TodoList/api.php
無效的 SESSIONID 會得到 `[]`
## 拿到指定 id 的 Todo Item (未刪除)
GET http://sio2.tw/TodoList/api.php?id=1
不是作者的話會得到 "You don't have permission to get this Todo Item!"
## 新增 Todo Item
POST http://sio2.tw/TodoList/api.php
```
{
  userId: 1,
  content: 'xxx',
}
```
如果使用者 id 和 session 比對不符會新增失敗
## 修改 Todo Item
POST http://sio2.tw/TodoList/api.php
```
{
  id: 1,
  content: 'xxx'
}
```
不是作者不能修改

## 修改 Todo Item 狀態
POST http://sio2.tw/TodoList/api.php
```
{
  id: 1,
}
```
不是作者不能修改

## 刪除 Todo Item 狀態

DELETE http://sio2.tw/TodoList/api.php?id=1
不是作者不能刪除