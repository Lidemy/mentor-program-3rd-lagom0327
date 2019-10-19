<?php
require_once('./conn.php');
// require_once('./sessionStatus.php');
require_once('./isAuthor.php');
// require_once('./function/isAdmin.php');
header('Content-Type: application/json; charset=UTF-8'); 

session_start();
  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'utf-8');
  }
// 拿到目前使用者所有的 Todo Items 
  function getAllTodoItems($conn) {
    $stmt = $conn->prepare("SELECT * FROM lagom0327_todoItems WHERE user_id=? AND is_deleted=0");
    $stmt->bind_param("i", $_SESSION['user_id']);
    $stmt->execute();
    $result = $stmt->get_result();
    $arr = array();
    // if ($result->num_rows <= 0) exit(json_encode('no data'));
    while ($row = $result->fetch_assoc()) {
      $row['content'] = escape($row['content']);
      array_push($arr, array('data'=> $row));
    }
    echo json_encode($arr);
    $conn->close();
  }

  // 拿到指定 id 的 Todo Item
  function getTodoItemById($conn, $id) {
    $stmt = $conn->prepare("SELECT * FROM lagom0327_todoItems WHERE id=? AND is_deleted=0");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows <= 0) exit(json_encode('no data'));
    $arr = array();
    while ($row = $result->fetch_assoc()) {
      $row['content'] = escape($row['content']);
      array_push($arr, array('data'=> $row));
    }
    echo json_encode($arr);
    $conn->close();
  }


// 刪除指定 id 的 todo item
  function deleteTodoItem($conn) {
  $stmt = $conn->prepare("UPDATE lagom0327_todoItems SET is_deleted=1 WHERE id=?");
  $stmt->bind_param("i", $_GET['id']);
  if (!$stmt->execute()) exit(json_encode('fail'));
  echo json_encode('success');
}

// 新增 todo item
function addTodoItem($conn, $content) {
  $stmt = $conn->prepare("INSERT INTO lagom0327_todoItems(user_id, content) VALUES (?, ?)");
  // $stmt->bind_param("is", $_SESSION['user_id'], $_POST['content']);
  $stmt->bind_param("is", $_SESSION['user_id'], $content);
  if ($stmt->execute()) {
    echo json_encode(array('id' => $conn->insert_id));
  }
  $stmt->close();
  return null;
}


// 修改 todo item 的內容
function editeTodoItem($conn, $id, $content) {
  $stmt = $conn->prepare("UPDATE lagom0327_todoItems SET content=? WHERE id=?");
  // $stmt->bind_param("si", $_POST['content'], $_POST['id']);
  $stmt->bind_param("si", $content, $id);
  if (!$stmt->execute()) exit(json_encode('fail'));
  echo json_encode('success');
}


// 修改todo item 的狀態
function toggleTodoItemStatus($conn, $id) {
  $stmt = $conn->prepare("UPDATE lagom0327_todoItems SET is_completed= NOT is_completed WHERE id=?");
  // $stmt->bind_param("si", $_POST['content'], $_POST['id']);
  $stmt->bind_param("s", $id);
  if (!$stmt->execute()) exit(json_encode('fail'));
  echo json_encode('success');
}
// toggleTodoItemStatus($conn, 2);


// function get20Mess($conn) {
//   $page = isset($_GET['page']) ? $_GET['page'] : 1;
//   function escape($str) {
//     return htmlspecialchars($str, ENT_QUOTES, 'utf-8');
//   }
//   function getSubCommits($conn, $id, $arr, $i) {
//     $stmt = $conn->prepare("SELECT A.id, A.user_id, A.content, A.created_at, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.is_deleted=0 AND A.layer=1 AND A.parent_layer_id=? ORDER BY A.created_at ASC");
//     $stmt->bind_param("i", $id);
//     $stmt->execute();
//     $result = $stmt->get_result();
//     if ($result->num_rows <= 0) return $arr;
//     $j = 0;
//     while ($row = $result->fetch_assoc()) {
//       $arr[$i]['sub'][$j] = $row;
//       $j++;
//     }
//     return $arr;
//   }

//   function getMainMess ($conn, $page) {
//     $offset = ($page - 1) * 20;
//     $sql = "SELECT A.id, A.user_id, A.content, A.created_at, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.is_deleted=0 AND A.layer=0 ORDER BY A.created_at DESC LIMIT  ?, 20";
//     $stmt = $conn->prepare($sql);
//     $stmt->bind_param('i', $offset);
//     if ($stmt->execute()) return $stmt->get_result();
//     return null;
//   }

//   $arr = array();
//   $i = 0;
//   $mainComments = getMainMess($conn, $page);
//   while ($row = $mainComments->fetch_assoc()) {
//     $row['nickname'] = escape($row['nickname']);
//     $row['content'] = escape($row['content']);
//     array_push($arr, array('main' => $row));
//     $arr = getSubCommits($conn, $row['id'], $arr, $i);
//     $i += 1 ;
//   }
//   echo json_encode($arr);
//   $conn->close();
// }

// function addComment($conn) {
//   $stmt = $conn->prepare("INSERT INTO lagom0327_comments(user_id, content) VALUES (?, ?)");
//   $stmt->bind_param("is", $_SESSION['user_id'], $_POST['content']);
//   if ($stmt->execute()) {
//     echo json_encode(array('id' => $conn->insert_id));
//   }
//   $stmt->close();
//   return null;
// }

// function addSubComment($conn) {
//   $stmt = $conn->prepare("INSERT INTO lagom0327_comments(user_id, content, layer, parent_layer_id) VALUES (?, ?, 1, ?)");
//   $stmt->bind_param("isi", $_SESSION['user_id'], $_POST['content'], $_POST['parentId']);
//   if ($stmt->execute()) {
//     echo json_encode(array('id' => $conn->insert_id));
//   }
//   $stmt->close();
// }





$method = $_SERVER['REQUEST_METHOD'];

// if (!$sessionStatus) exit();

switch ($method) {
  case 'GET':
    if (isset($_GET['id']) && !empty($_GET['id'])) {
      if (!isItemAuthor($conn)) exit(json_encode('You don\'t have permission to get this Todo Item!'));
      getTodoItemById($conn, $_GET['id']);
    } 
    else getAllTodoItems($conn);
    break;

  case 'POST':
      if(isset($_POST['id']) && !isset($_POST['content']) && isItemAuthor($conn)) exit(toggleTodoItemStatus($conn, $_POST['id']));
      if (empty($_POST['content'])) die('empty data');
      if (isset($_POST['userId']) && !isset($_POST['id']) && (int)$_POST['userId'] === $_SESSION['user_id']) exit(addTodoItem($conn, $_POST['content']));
      if (isset($_POST['id']) && isItemAuthor($conn)) { // TODO
        exit(editeTodoItem($conn, $_POST['id'], $_POST['content']));
      }
    break;
  //   if (isset($_POST['parentId'])) addSubComment($conn);
  //   else if (isset($_POST['id'])) {
  //     if (empty($_POST['id']) || (!isCommentAuthor($conn) && !isAdmin($conn))) exit();
  //     editeComment($conn);
  //   }
  //   else addComment($conn);
  //   break;
  case 'DELETE':
    if (!isset($_GET['id']) || empty($_GET['id'])) exit('id');
    if (!isItemAuthor($conn)) exit('author');
    deleteTodoItem($conn);
    break;
}


?>