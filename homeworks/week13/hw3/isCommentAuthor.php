<?php
require_once('./conn.php');

function isCommentAuthor ($conn) {
    $stmt = $conn->prepare("SELECT user_id FROM lagom0327_comments WHERE id=?");
    $stmt->bind_param("i", $_GET['id']);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result) {
      $row = $result->fetch_assoc();
      return ((int)$row['user_id'] === $_SESSION['user_id']);
    } else die("fail:" . $conn->error);
}

?>