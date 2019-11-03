<?php
  require_once('./conn.php');
  require_once('./isAuthor.php');
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PATCH,DELETE");
  header('Content-Type: application/json; charset=UTF-8'); 

  session_start();

  function escape($str) {
    return htmlspecialchars($str, ENT_QUOTES, 'utf-8');
  }

// 拿到目前使用者所有的 Todo Items 
  function getAllTodoItems($conn) {
    // userId = 63 為 guest 用
    $userId = !empty($_SESSION['user_id']) ? $_SESSION['user_id'] : 63;
    $stmt = $conn->prepare("SELECT * FROM lagom0327_todoItems WHERE user_id=? AND is_deleted=0");
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $result = $stmt->get_result();
    $arr = array();
    while ($row = $result->fetch_assoc()) {
      $row['content'] = escape($row['content']);
      array_push($arr, $row);
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
function addTodoItem($conn, $userId, $content) {
  $stmt = $conn->prepare("INSERT INTO lagom0327_todoItems(user_id, content) VALUES (?, ?)");
  $stmt->bind_param("is", $userId, $content);
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
  $stmt->bind_param("s", $id);
  if (!$stmt->execute()) exit(json_encode('fail'));
  echo json_encode('success');
}

$method = $_SERVER['REQUEST_METHOD'];
// exit('method'. $method);
switch ($method) {
  case 'GET':
    if (isset($_GET['id']) && !empty($_GET['id'])) {
      if (!isItemAuthor($conn)) exit(json_encode('You don\'t have permission to get this Todo Item!'));
      getTodoItemById($conn, $_GET['id']);
    } 
    else getAllTodoItems($conn);
    break;

  case 'POST':
      if (empty($_POST['content'])) die('empty data');
      if (!isset($_POST['id']) && empty($_SESSION['user_id'])) exit(addTodoItem($conn, 63, $_POST['content']));
      if (isset($_POST['userId']) && !isset($_POST['id']) && (int)$_POST['userId'] === $_SESSION['user_id']) exit(addTodoItem($conn, $_SESSION['user_id'], $_POST['content']));
    break;

  case 'PATCH':
    $str = file_get_contents("php://input");
    $data = array();
    parse_str($str, $data);
    if(!isItemAuthorForPatch($conn, $data['id'])) exit('You are not author');
    if (isset($data['id']) && !isset($data['content'])) exit(toggleTodoItemStatus($conn, $data['id']));
    if (empty($data['content'])) exit('empty cotent');
    exit(editeTodoItem($conn, $data['id'], $data['content']));
    break;

  case 'DELETE':
    if (!isset($_GET['id']) || empty($_GET['id'])) exit('id');
    if (!isItemAuthor($conn)) exit('author');
    deleteTodoItem($conn);
    break;
  case 'OPTIONS':
    // exit('in options');
    header("HTTP/1.1 200 OK");
    break;
  default:
    header('HTTP/1.1 404 Not Found');
    break;

}

?>