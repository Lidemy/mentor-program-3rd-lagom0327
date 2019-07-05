<?php
  function deleteSession($sessionId) {
    if ($sessionId) {
      include_once('./conn.php');
      $sql = "DELETE FROM lagom0327_users_certificate WHERE id='$sessionId'";
      $result = $conn->query($sql);
      if ($result) {
        session_destroy();
        return true;
      } else die('fail : '. $conn->error);
      // die(header('Location: ./index.php'));
      // 
    }
  } 

  if (!isset($_SESSION)) session_start();
  if (deleteSession(session_id())) header('Location: ./index.php');

?>