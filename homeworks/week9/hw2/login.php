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
      <h1>登入</h1>
      <form class="form" method="POST" action="./handle_login.php">
      <?php    
        // if (isset($_GET['is_fail']) && $_GET['is_fail']) echo "<p>帳號或密碼輸入錯誤</p>";
        if (isset($_GET['username'])) echo "<p>帳號或密碼輸入錯誤</p>";
      ?>
        <div>帳號</div> <input name="username" required>
        <div>密碼</div> <input name="password" type="password" required>
        <input class="btn" type="submit" value="送出"/>
      </form>
    </section>
  </body>
</html>