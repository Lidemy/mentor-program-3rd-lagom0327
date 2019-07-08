<?php
require_once('./conn.php');
require_once('./sessionStatus.php');
if (!$sessionStatus) die(header("Location: ./index.php"));

function addComment($content,$conn) {
  $stmt = $conn->prepare("INSERT INTO lagom0327_comments(user_id, content) VALUES (?, ?)");
  $stmt->bind_param("is", $_SESSION['user_id'], $content);
  $stmt->execute();
  $stmt->close();
}

$content = str_replace("'","''", $_POST['content']);
if (empty($content)) die('empty data');
addComment($content, $conn);
header("Location: ./index.php");

?>