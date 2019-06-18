<?php
  require_once('./conn.php');
  $maxLength = 16;
  $username = $_POST['username'];
  $nickname =  str_replace("'","''", $_POST['nickname']);
  $password = $_POST['password'];
  $password2 = $_POST['password2'];

  if (empty($username) || empty($nickname) || empty($password) || empty($password2)) {
    die('請檢查資料'); 
  } else if ($password !== $password2) {
    header('Location: ./register.php?password=1');
    die();
  } else if (strlen($username) > $maxLength || strlen($password) > $maxLength ||  strlen($nickname) > $maxLength * 4) {
    
    header('Location: ./register.php?length=1');
    die(strlen($username));
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