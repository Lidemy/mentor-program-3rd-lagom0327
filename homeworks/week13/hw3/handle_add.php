<?php
require_once('./conn.php');
require_once('./sessionStatus.php');


function addComment($conn) {
  $stmt = $conn->prepare("INSERT INTO lagom0327_comments(user_id, content) VALUES (?, ?)");
  $stmt->bind_param("is", $_SESSION['user_id'], $_POST['content']);
  $stmt->execute();
  $stmt->close();
}

if (!$sessionStatus) die(header("Location: ./index.php"));
if (empty($_POST['content'])) die('empty data');
addComment($conn);
header("Location: ./index.php");

?>