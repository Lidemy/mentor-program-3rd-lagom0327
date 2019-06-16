<?php require_once('./conn.php'); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Message Board</title>
    <link rel="stylesheet" href='./style.css' />
  </head>
  <body>
  <p>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>
    <nav><a href="./index.php">Message board</a><a href="./login.php">登入</a><a href="./register.php">註冊</a></nav>
    <section class="container">
      <h1>填寫資料</h1>
      <?php
        if (isset($_GET['username'])) echo "<p>帳號已經被註冊</p>";
        if (isset($_GET['password'])) echo "<p>兩次密碼不相同</p>";
      ?>
      <form class="login__form" method="POST" action="./handle_register.php">
        帳號 : <input name="username" required>
        綽號 : <input name="nickname" required>
        密碼 : <input name="password" type="password" required>
        密碼 : <input name="password2" type="password" required>
        <input class="btn" type="submit" value="送出"/>
      </form>
    </section>
    <h1></h1>
  </body>
</html>