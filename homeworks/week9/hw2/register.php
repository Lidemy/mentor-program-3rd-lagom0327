<?php require_once('./conn.php'); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Message Board</title>
    <link rel="stylesheet" href='./style.css' />
  </head>
  <body>
    <nav>
      <ul>
        <li class='nav__list'><a href='./index.php'>Message board</a></li>
        <li class='nav__list'><a href='./login.php'>登入</a></li>
        <li class='nav__list'><a href='./register.php'>註冊</a></li>
      </ul>
    </nav>
  <p class="notation">本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>
    <section class="container">
      <h1>填寫資料</h1>
      <form class="form" method="POST" action="./handle_register.php">
      <?php
        if (isset($_GET['length'])) echo "<p>資料長度錯誤</p>";
        if (isset($_GET['username'])) echo "<p>帳號已經被註冊</p>";
        if (isset($_GET['password'])) echo "<p>兩次密碼不相同</p>";
      ?>
        帳號 <input name="username" placeholder='16字內' required>
        綽號 <input name="nickname"  placeholder='64字內' required>
        密碼 <input name="password" placeholder='16字內' type="password" required>
        確認密碼 <input name="password2" type="password" required>
        <input class="btn" type="submit" value="送出"/>
      </form>
    </section>
    <h1></h1>
  </body>
</html>