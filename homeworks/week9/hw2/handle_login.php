<?php
  require_once('./conn.php');

  $username = $_POST['username'];
  $password = $_POST['password'];

  if (empty($username) || empty($password)) {
    die('請檢查資料');
  } 
  $sql = "SELECT * FROM lagom0327_users";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      if ($row['username'] === $username && $row['password'] === $password) {
        setcookie("user_id", $row['id'], time()+3600*24);
        header('Location: ./index.php');
        die();
      }
    }
    header('Location: ./login.php?username=' . $username);
  } else {
    echo 'fail'. $conn->error;
  }


?>