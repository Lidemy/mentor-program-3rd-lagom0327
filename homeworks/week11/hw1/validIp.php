<?php 
function validIp() {
  if(!isset($_SESSION)) session_start(); 
  // echo $_SESSION['user_ip'];
  // echo ">>> 第 二 頁 <<< <br />";
  if ( !empty($_SERVER["HTTP_X_FORWARDED_FOR"]) )  {
    $temp_ip = split(",", $_SERVER["HTTP_X_FORWARDED_FOR"]);
    $user2_ip = $temp_ip[0];
  } else {
    $user2_ip = $_SERVER["REMOTE_ADDR"];
  }

  echo "<BR />原來 session 的IP:".$_SESSION["user_ip"];
  echo "<br />目前使用者IP : $user2_ip ";

  if ( $_SESSION["user_ip"] !== $user2_ip ) {
    echo "<script>alert('您不是原來登入的 IP，請正常登入!!');</script>";
    session_destroy ();
    return false;
    // header('Location: ./index.php');

  }  else {
    // echo "<script>alert('OK!');</script>";
    return true;
    // echo "OK! <br />";
  }
}
?>