<?php
require_once('./conn.php');

function isCommentAuthor ($conn) {
    $commentId = $_GET['id'];
    $sql = "SELECT user_id FROM lagom0327_comments WHERE id=$commentId";
    $result = $conn->query($sql);
    if ($result) {
      $row = $result->fetch_assoc();
      return ($row['user_id'] === $_SESSION['user_id']);
    } else die("fail:" . $conn->error);
}

?>