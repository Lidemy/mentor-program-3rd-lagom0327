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
      <h1>登入</h1>
      <?php    
        // if (isset($_GET['is_fail']) && $_GET['is_fail']) echo "<p>帳號或密碼輸入錯誤</p>";
        if (isset($_GET['username'])) echo "<p>帳號或密碼輸入錯誤</p>";
      ?>
      <form class="login__form" method="POST" action="./handle_login.php">
        帳號 <input name="username" required>
        密碼 <input name="password" type="password" required>
        <input class="btn" type="submit" value="送出"/>
      </form>
    </section>
    <h1></h1>
  </body>
</html>