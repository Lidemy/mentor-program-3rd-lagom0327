<?php
  require_once('./conn.php');
  function isAdmin($conn) {
    $sessionId = session_id();
    if(!isset($_SESSION)) session_start(); 
    $stmt = $conn->prepare("SELECT U.permission FROM lagom0327_users_certificate as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.id=?");
    $stmt->bind_param("s", $sessionId);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result) {
      $row = $result->fetch_assoc();
      $stmt->close();
      if ($row['permission'] === 'admin') return true;
      return false;
    } else die("fail: isAdmin" . $conn->error);
  }
  
  return isAdmin($conn);
?>