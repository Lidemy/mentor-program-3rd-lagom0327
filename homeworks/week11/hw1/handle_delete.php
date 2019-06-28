<?php
  require_once('./conn.php');
  // require_once('./getSessionId.php');
  require_once('./sessionStatus.php');

  function deleteComment($row) {
    include('./conn.php');
    if ($row['user_id'] === $_SESSION['user_id']) {
      $sql = "DELETE FROM lagom0327_comments WHERE id=" . $row['id'];
      $result = $conn->query($sql);
      return ($result);
    } else die('you are not the author');
  }


  if ($sessionStatus) {
    $commentId = $_GET['id'];
    $sql = "SELECT id ,user_id FROM lagom0327_comments WHERE id=$commentId";
    $result = $conn->query($sql);
    if ($result) {
      $row = $result->fetch_assoc();
      if (deleteComment($row)) header("Location: ./index.php");
    } else die("fail:" . $conn->error);
  }

?>