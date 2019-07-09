<?php
require_once('./conn.php');
require_once('./sessionStatus.php');
if (!$sessionStatus) die(header("Location: ./index.php"));

function addComment($content,$conn) {
  $stmt = $conn->prepare("INSERT INTO lagom0327_comments(user_id, content, layer, parent_layer_id) VALUES (?, ?, 1, ?)");
  $stmt->bind_param("isi", $_SESSION['user_id'], $content, $_POST['parentId']);
  $stmt->execute();
  $stmt->close();
}

$content = str_replace("'","''", $_POST['content']);
if (empty($content)) die('empty data');
addComment($content, $conn);
header("Location: ./index.php");

?>