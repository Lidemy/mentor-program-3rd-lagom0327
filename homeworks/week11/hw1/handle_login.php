<?php
  require_once('./conn.php');
  require_once('./isAdmin.php');
  require_once('./isSuperAdmin.php');

  function islogin($sessionId) {
    include('./conn.php');
    $sql = "SELECT id FROM lagom0327_users_certificate WHERE id='$sessionId'";
    $result = $conn->query($sql);
    print_r($result);
    return $result->num_rows === 1 ? true : false;
  }

  function setSession($data) {
    include('./conn.php');
    // ini_set('session.save_path', '/group6/lagom0327')
    // session_save_path('/');
    // session_start([
      // 'cookie_lifetime' => 86400,
  // ]);
    if (!isset($_SESSION)) session_start();
    $session = session_id();
    echo 'in set session';
    if (islogin($session)) return true;
    echo 'in set session 2';
    $_SESSION['user_id'] = $data['id'];
    $_SESSION['nickname'] = $data['nickname'];
    $sql = "INSERT INTO lagom0327_users_certificate(id, user_id) VALUES ('$session', {$data['id']})";
    echo $sql;
    $result = $conn->query($sql);
    if ($result) {
      return true;
    } else {
      echo ('fail : ' . $conn->error);
      return false;
    }
  }

  function setIPSession() {
    // https://blog.xuite.net/coke750101/networkprogramming/18668645-php+session%E5%8F%8Acookie+%E5%AE%89%E5%85%A8%E6%80%A7%E8%AD%B0%E9%A1%8C+++
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
    if ( !empty($_SERVER["HTTP_X_FORWARDED_FOR"]) )    {
      // echo "有經過其他代理主機：".$_SERVER["HTTP_X_FORWARDED_FOR"];
      $temp_ip = split(",", $_SERVER["HTTP_X_FORWARDED_FOR"]);
      $user_ip = $temp_ip[0];
    } else {
      $user_ip = $_SERVER["REMOTE_ADDR"];
    }
    $_SESSION['user_ip'] = $user_ip;
  }
  
  $username = $_POST['username'];
  $password = $_POST['password'];

  if (empty($username) || empty($password)) {
    die('請檢查資料');
  } 
  $sql = "SELECT * FROM lagom0327_users WHERE username='$username'";
  $result = $conn->query($sql);
  if ($result->num_rows ===  1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
      if (setSession($row)) {
        setIPSession();
        if (isAdmin()) {
            header('Location: ./admin.php');
            die();
          } else if (isSuperAdmin()) {
            header('Location: ./super_admin.php');
            die();
          }
          header('Location: ./index.php');
        }
      die();
    }
  } else if ($result->num_rows === 0) header('Location: ./login.php?username=' . $username);
  else {
    echo 'fail'. $conn->error;
  }


?>