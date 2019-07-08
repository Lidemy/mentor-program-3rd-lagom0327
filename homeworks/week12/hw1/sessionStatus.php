<?php

function isSessionInSQL() {
  include('./conn.php');
  if(!isset($_SESSION)) session_start(); 
  if (isset($_SESSION) && isset($_SESSION['nickname'])) {
    // die('has nickname');
    $id = session_id();
    $sql = "SELECT * FROM lagom0327_users_certificate WHERE id='$id'";
    $result =$conn->query($sql);
    if ($result) {
        $row = $result->fetch_assoc();
        $userid= $row['user_id'];
        $result->close();
        return $userid;
    } else {
      echo 'fail'. $conn->error;
      return false;
    }
  } else if (isset($_SESSION) && !isset($_SESSION['nickname'])) {
    // die('session in sql but no nick');
    return false;
  }

  return false;
}

function validIp() {
  if(!isset($_SESSION)) session_start(); ;
  if (!empty($_SERVER["HTTP_X_FORWARDED_FOR"]) )  {
    $temp_ip = split(",", $_SERVER["HTTP_X_FORWARDED_FOR"]);
    $user2_ip = $temp_ip[0];
  } else {
    $user2_ip = $_SERVER["REMOTE_ADDR"];
  }

  if (isset($_SESSION["user_ip"])) echo "<BR />原來 session 的IP:".$_SESSION["user_ip"];
  echo "<h1 style='display:none;'>目前使用者IP : $user2_ip</h1> ";

  if (isset($_SESSION["user_ip"]) && $_SESSION["user_ip"] !== $user2_ip ) {
    include('./handle_logout.php');
    echo "<script>alert('您不是原來登入的 IP，請正常登入!!');</script>";
    session_destroy ();
    return false;
  }  else return true;
}
if (isSessionInSQL() && validIp()) $sessionStatus = true;
else $sessionStatus = false;
return $sessionStatus;
?>