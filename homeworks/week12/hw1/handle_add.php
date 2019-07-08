<?php
require_once('./conn.php');
require_once('./sessionStatus.php');
if (!$sessionStatus) die(header("Location: ./index.php"));

function addComment($content,$conn) {
  $sql = "INSERT INTO lagom0327_comments(user_id, content) VALUES ({$_SESSION['user_id']}, '$content')";
  $result = $conn->query($sql);
  if ($result) {
    header("Location: ./index.php");
  } else die("fail:" . $conn->error);
}

$content = str_replace("'","''", $_POST['content']);
if (empty($content)) die('empty data');
addComment($content,$conn);

?>