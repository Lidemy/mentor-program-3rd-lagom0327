<?php
  function isAdmin() {
    include('./conn.php');
    $sessionId = session_id();
    if(!isset($_SESSION)) session_start(); 
    $sql = "SELECT A.id, U.permission FROM lagom0327_users_certificate as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.id='$sessionId'";
    $result = $conn->query($sql);
    if ($result) {
      $row = $result->fetch_assoc();
      if ($row['permission'] === 'admin') return true;
      return false;
    } else die("fail:" . $conn->error);
  }
  
  return isAdmin();
?>