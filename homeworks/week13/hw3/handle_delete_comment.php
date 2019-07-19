<?php
  require_once('./conn.php');
  require_once('./sessionStatus.php');
  require_once('./isCommentAuthor.php');
  require_once('./isAdmin.php');

  $method = $_SERVER['REQUEST_METHOD'];
  if ($method !== 'DELETE') die('not delete');
  function deleteComment($conn) {
    $stmt = $conn->prepare("UPDATE lagom0327_comments SET is_deleted=1 WHERE id=?");
    $stmt->bind_param("i", $_GET['id']);
    if ($stmt->execute()) return 'success';
    return 'fail';
  }

  if (empty($_GET['id']) || !$sessionStatus) {
    echo 'no id';
    // die(header("Location: ./index.php"));
  }
  if (isCommentAuthor($conn) || isAdmin($conn) ) {
    echo json_encode(deleteComment($conn));
  }
  // header(isAdmin($conn) ? "Location: ./admin.php" : "Location: ./index.php");
?>