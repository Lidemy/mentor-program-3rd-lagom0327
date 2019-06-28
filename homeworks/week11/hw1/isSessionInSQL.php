<?php
function isSessionInSQL() {
    include('./conn.php');
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
    if (isset($_SESSION)) {
      // session_start();
      // $id = $_SESSION['session_id'];
      $id = session_id();
      $sql = "SELECT * FROM lagom0327_users_certificate WHERE id='$id'";
      $result =$conn->query($sql);
      if ($result) {
          $row = $result->fetch_assoc();
          $userid= $row['user_id'];
          return $userid;
      } else {
        var_dump($result);
        echo 'fail'. $conn->error;
        return false;
      }
    }
    return false;
  }

?>