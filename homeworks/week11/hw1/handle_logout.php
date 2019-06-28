<?php
  /* function getSession() {
    include('./conn.php');
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
    if (isset($_SESSION)) {
      // session_start();
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
  } */

  function deleteSession($sessionId) {
    echo $sessionId;
    if ($sessionId) {
      include('./conn.php');
      $sql = "DELETE FROM lagom0327_users_certificate WHERE id='$sessionId'";
      $result = $conn->query($sql);
      if ($result) {
        echo 'dele';
        session_destroy();
        header('Location: ./index.php');
        die();
    } else {
      var_dump($result);
      echo 'fail'. $conn->error;
    }
      
    }
  } 
  // echo 'log';
  session_start();
  // echo session_id();
  deleteSession(session_id());

?>