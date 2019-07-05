<?php

require_once('./conn.php');
require_once('./sessionStatus.php');
require_once('./isAdmin.php');
require_once('./isCommentAuthor.php');

function editeComment($content) {
  include('./conn.php');
  $sql = "UPDATE lagom0327_comments SET content='$content' WHERE id={$_GET['id']}";
  $result = $conn->query($sql);
  if ($result) {
    return true;
  } else die("fail:" . $conn->error);
}

if (!$sessionStatus) die('no session');
else {
  $id = $_GET['id'];
  $content = str_replace("'","''", $_POST['content']);
  if (empty($content)) die('empty data');
  if (isCommentAuthor() && editeComment($content)) header("Location: ./index.php");
  else if (isAdmin() && editeComment($content)) header("Location: ./admin.php");
}

?>