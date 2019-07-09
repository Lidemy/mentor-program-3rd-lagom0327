<?php
  require_once('./conn.php');
  function isSuperAdmin($conn) {
    $stmt = $conn->prepare("SELECT A.id, U.permission FROM lagom0327_users_certificate as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE U.permission='super admin'");
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result) {
      $row = $result->fetch_assoc();
      if(!isset($_SESSION)) session_start(); 
      if ($row['id'] === session_id()) return true;
      return false;
    } else die("fail:" . $conn->error);
  }
  return isSuperAdmin($conn);
?>