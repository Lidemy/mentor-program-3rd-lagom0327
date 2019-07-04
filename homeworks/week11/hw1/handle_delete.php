<?php
  require_once('./conn.php');
  // require_once('./getSessionId.php');
  require_once('./sessionStatus.php');
  require_once('./isCommentAuthor.php');
  require_once('./isAdmin.php');

  function deleteComment() {
    include('./conn.php');
    $sql = "UPDATE lagom0327_comments SET is_deleted=1 WHERE id={$_GET['id']}";
    $result = $conn->query($sql);
    return $result;
  }


  if ($sessionStatus) {
    if (isCommentAuthor() && deleteComment()) header("Location: ./index.php");
    else if (isAdmin() && deleteComment()) header("Location: ./admin.php");
  } else die("fail:" . $conn->error);

?>