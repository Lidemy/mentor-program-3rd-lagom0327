<?php
require_once('./conn.php');
require_once('./sessionStatus.php');

header('Content-Type: application/json; charset=UTF-8'); 

$method = $_SERVER['REQUEST_METHOD'];
function addComment($conn) {
  $stmt = $conn->prepare("INSERT INTO lagom0327_comments(user_id, content) VALUES (?, ?)");
  $stmt->bind_param("is", $_SESSION['user_id'], $_POST['content']);
  // var_dump($stmt);
  if ($stmt->execute()) {
    $stmt->close();
    // echo $conn->insert_id;
    return $conn->insert_id;
  }
  return null;
}

if (!$sessionStatus || $method !== 'POST') die();
// die(header("Location: ./index.php"));
if (empty($_POST['content'])) die('empty data');
if ($result = addComment($conn)) {
  echo json_encode(array('id' => $result));
} else {
  // http_response_code(404);
}
// if ($result) echo '{"success": true}';
// else echo '{"success": false}';
// echo 
// header("Location: ./index.php");
// echo '{ "count": 999 }';
?>