<?php
  require_once('./conn.php');
  require_once('./sessionStatus.php');
  require_once('./isAdmin.php');
  require_once('./isCommentAuthor.php');

  function editeComment($content, $conn) {
    $sql = "UPDATE lagom0327_comments SET content='$content' WHERE id={$_GET['id']}";
    $result = $conn->query($sql);
    if (!$result) die("fail:" . $conn->error);
  }

  $content = str_replace("'","''", $_POST['content']);

  if (!$_GET['id'] || !$sessionStatus) die(header("Location: ./index.php"));
  if (empty($content)) die('empty data');
  if (isCommentAuthor($conn) || isAdmin($conn)) {
    editeComment($content, $conn);
  }
  header(isAdmin($conn) ? "Location: ./admin.php" : "Location: ./index.php");

?>