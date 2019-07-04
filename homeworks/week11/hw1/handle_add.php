<?php

require_once('./conn.php');
require_once('./sessionStatus.php');
if (!$_GET['id']) die(header("Location: ./index.php"));

function addComment($content) {
  include('./conn.php');
  $sql = "INSERT INTO lagom0327_comments(user_id, content) VALUES ({$_SESSION['user_id']}, '$content')";
  $result = $conn->query($sql);
  if ($result) {
    header("Location: ./index.php");
  } else die("fail:" . $conn->error);
}

if (!$sessionStatus) die('no session');

else {
  $content = str_replace("'","''", $_POST['content']);
  if (empty($content)) die('empty data');
  addComment($content);
}

?>