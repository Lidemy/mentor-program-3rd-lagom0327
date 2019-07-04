<?php
  $username = $_POST['username'];
  $nickname =  str_replace("'","''", $_POST['nickname']);
  $password = $_POST['password'];
  $password2 = $_POST['password2'];

  function validData($username, $nickname,$password, $password2) {
    $maxLength = 16;
    if (empty($username) || empty($nickname) || empty($password) || empty($password2)) {
      echo ('請檢查資料');
      return false;
    } else if ($password !== $password2) {
      header('Location: ./register.php?password=1');
      return false;
    } else if (strlen($username) > $maxLength || strlen($password) > $maxLength ||  strlen($nickname) > $maxLength * 4) {
      header('Location: ./register.php?length=1');
      return false;
    }
    return true;
  }

  function sameUsername($name) {
    include('./conn.php');
    $sql_username = "SELECT username FROM lagom0327_users WHERE username='$name'";
    $result_username = $conn->query($sql_username);
    if ($result_username->num_rows > 0) return true;
    else echo 'fail'. $conn->error;
  }

  function setSessionInSql($name, $pass, $nickname) {
    include('./conn.php');
    $hash = password_hash($pass, PASSWORD_DEFAULT, ['cost' => 11]);
    $sql = "INSERT INTO lagom0327_users(username, password, nickname) VALUES('$name', '$hash','$nickname')";
    $result = $conn->query($sql);

    if ($result) header('Location: ./login.php');
    else {
    var_dump($result);
    echo 'fail'. $conn->error;
    }
  }

  if (!validData($username, $nickname, $password, $password2)) die();
  if (sameUsername($username)) return header('Location: ./register.php?username=' . $username);
  setSessionInSql($username, $password, $nickname);
  
?>