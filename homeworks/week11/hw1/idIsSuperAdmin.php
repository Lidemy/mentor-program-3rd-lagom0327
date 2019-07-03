<?php
  function idIsSuperAdmin($id) {
    include('./conn.php');
    $sql = "SELECT permission FROM lagom0327_users WHERE id=$id";
    $result = $conn->query($sql);
    if ($result) {
      $row = $result->fetch_assoc();
      return ($row['permission'] === 'super admin');
    } else die("fail:" . $conn->error);
  }
?>