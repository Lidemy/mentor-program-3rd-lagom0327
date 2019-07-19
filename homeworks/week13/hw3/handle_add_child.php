<?php
require_once('./conn.php');
require_once('./sessionStatus.php');


$method = $_SERVER['REQUEST_METHOD'];
function addComment($conn) {
  $stmt = $conn->prepare("INSERT INTO lagom0327_comments(user_id, content, layer, parent_layer_id) VALUES (?, ?, 1, ?)");
  $stmt->bind_param("isi", $_SESSION['user_id'], $_POST['content'], $_POST['parentId']);
  $stmt->execute();
  echo json_encode(array('id' => $conn->insert_id));
  $stmt->close();
}

if (!$sessionStatus || $method !== 'POST') die(header("Location: ./index.php"));
if (empty($_POST['content'])) die('empty data');
addComment($conn);
// header("Location: ./index.php");

?>