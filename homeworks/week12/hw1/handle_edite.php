<?php
  require_once('./conn.php');
  require_once('./sessionStatus.php');
  require_once('./isAdmin.php');
  require_once('./isCommentAuthor.php');

  function editeComment($conn) {
    $stmt = $conn->prepare("UPDATE lagom0327_comments SET content=? WHERE id=?");
    $stmt->bind_param("si", $_POST['content'], $_GET['id']);
    $stmt->execute();
  }

  if (!$_GET['id'] || !$sessionStatus) die(header("Location: ./index.php"));
  if (empty($_POST['content'])) die('empty data');
  if (isCommentAuthor($conn) || isAdmin($conn)) {
    editeComment($conn);
  }
  header(isAdmin($conn) ? "Location: ./admin.php" : "Location: ./index.php");

?>