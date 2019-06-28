<?php

require_once('./conn.php');
require_once('./sessionStatus.php');
// require_once('./getSessionId.php');



function editeComment($content) {
  include('./conn.php');
$sql = "UPDATE lagom0327_comments SET content='$content' WHERE id={$_GET['id']}";
  $result = $conn->query($sql);
  if ($result) {
    header("Location: ./index.php");
  } else die("fail:" . $conn->error);
}

function isCommentAuthor () {
  include('./conn.php');
    $commentId = $_GET['id'];
    $sql = "SELECT user_id FROM lagom0327_comments WHERE id=$commentId";
    $result = $conn->query($sql);
    if ($result) {
      $row = $result->fetch_assoc();
      return ($row['user_id'] === $_SESSION['user_id']);
    } else die("fail:" . $conn->error);
}

if (!$sessionStatus) die('no session');

else {
  $id = $_GET['id'];
  $content = str_replace("'","''", $_POST['content']);
  if (empty($content)) die('empty data');
  if (isCommentAuthor()) editeComment($content);
}




?>