<?php
  function deleteSession($sessionId) {
    if ($sessionId) {
      include('./conn.php');
      $stmt = $conn->prepare("DELETE FROM lagom0327_users_certificate WHERE id=?");
      $stmt->bind_param("s", $sessionId);
      $stmt->execute();
      session_destroy();
    }
  } 

  if (!isset($_SESSION)) session_start();
  deleteSession(session_id());
  header('Location: ./index.php');

?>