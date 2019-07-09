<?php
  require_once('./conn.php');

  function setSession($data, $session, $conn) { 
    // ini_set('session.save_path', '/group6/lagom0327')
    // session_save_path('/');
    // session_start([
      // 'cookie_lifetime' => 86400,
  // ]);
    $_SESSION['user_id'] = $data['id'];
    $_SESSION['nickname'] = $data['nickname'];
    $stmt = $conn->prepare("INSERT INTO lagom0327_users_certificate(id, user_id) VALUES ( ?, ?)");
    $stmt->bind_param("si", $session, $data['id']);
    $stmt->execute();
    $stmt->close();
  }

  function setIPSession() {
    // https://blog.xuite.net/coke750101/networkprogramming/18668645-php+session%E5%8F%8Acookie+%E5%AE%89%E5%85%A8%E6%80%A7%E8%AD%B0%E9%A1%8C+++
    if(!isset($_SESSION)) session_start(); 
    if (!empty($_SERVER["HTTP_X_FORWARDED_FOR"]) )    {
      // echo "有經過其他代理主機：".$_SERVER["HTTP_X_FORWARDED_FOR"];
      $temp_ip = split(",", $_SERVER["HTTP_X_FORWARDED_FOR"]);
      $user_ip = $temp_ip[0];
    } else $user_ip = $_SERVER["REMOTE_ADDR"];
    $_SESSION['user_ip'] = $user_ip;
  }
  
  function isCorrectUser($name, $pass, $conn) {
    $stmt = $conn->prepare("SELECT * FROM lagom0327_users WHERE username=?");
    $stmt->bind_param("s", $name);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result) {
      if ($result->num_rows ===  1) {
        $row = $result->fetch_assoc();
        $stmt->free_result();
        $stmt->close();
        if (password_verify($pass, $row['password'])) return $row;
      }
      $stmt->free_result();
      $stmt->close();
      die(header('Location: ./login.php?username=' . $name));
    } else die('fail : '. $conn->error);
  }

  $username = $_POST['username'];
  $password = $_POST['password'];

  if (empty($username) || empty($password)) die('請檢查資料');
  if (!isset($_SESSION)) session_start();
  $session = session_id();
  $row = isCorrectUser($username, $password, $conn);
  setSession($row, $session, $conn);
  setIPSession();
  if (include('./isAdmin.php')) header('Location: ./admin.php');
  else if (include('./isSuperAdmin.php')) header('Location: ./super_admin.php');
  else header('Location: ./index.php');

?>