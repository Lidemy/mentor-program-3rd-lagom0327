<?php
  require_once('./conn.php');
  require_once('./sessionStatus.php');
  require_once('./isCommentAuthor.php');
  require_once('./isAdmin.php');

  function deleteComment($conn) {
    $stmt = $conn->prepare("UPDATE lagom0327_comments SET is_deleted=1 WHERE id=?");
    $stmt->bind_param("i", $_GET['id']);
    $stmt->execute();
  }

  if (!$_GET['id'] || !$sessionStatus) {
    die(header("Location: ./index.php"));
  }
  if (isCommentAuthor($conn) || isAdmin($conn) ) {
    deleteComment($conn);
  }
  header(isAdmin($conn) ? "Location: ./admin.php" : "Location: ./index.php");
?>