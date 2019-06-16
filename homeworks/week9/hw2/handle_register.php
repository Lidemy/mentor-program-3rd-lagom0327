<?php
  require_once('./conn.php');

  $username = $_POST['username'];
  $nickname = $_POST['nickname'];
  $password = $_POST['password'];
  $password2 = $_POST['password2'];

  // echo $username . ' ' . $nickname . ' ' . $password . ' ' . $password;
  if (empty($username) || empty($nickname) || empty($password) || empty($password2)) {
    // if ($password === $password2) die("兩次密碼不相同")
    die('請檢查資料'); // 之後的 php 程式都不會執行
  } else if ($password !== $password2) {
    header('Location: ./register.php?password=1');
    die();
  }

  $sql_username = "SELECT username FROM lagom0327_users";
  $result_username = $conn->query($sql_username);
  if ($result_username->num_rows > 0) {
    while ($row = $result_username->fetch_assoc()) {
      if ($row['username'] === $username) {
        header('Location: ./register.php?username=' . $username);
        die();
      }
    }
    header('Location: ./register.php');
  } else {
    echo 'fail'. $conn->error;
  }


  $sql = "INSERT INTO lagom0327_users(username, password, nickname) VALUES('$username', '$password','$nickname')";
  $result = $conn->query($sql);

  if ($result) {
    header('Location: ./login.php');
  } else {
    var_dump($result);
    echo 'fail'. $conn->error;
  }
?>