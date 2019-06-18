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
    <?php if(!isset($_COOKIE["user_id"])) {
      echo "<nav>
              <ul>
                <li class='nav__list'><a href='./index.php'>Message board</a></li>
                <li class='nav__list'><a href='./login.php'>登入</a></li>
                <li class='nav__list'><a href='./register.php'>註冊</a></li>
              </ul>
            </nav>";
      echo "<h1 class='notation'>如需留言請登入</h1>
            <p class='notation'>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>";
    } else {
      $id = $_COOKIE["user_id"];
      $sql = "SELECT * FROM lagom0327_users WHERE id=$id";
      $result = $conn->query($sql);
      $row = $result->fetch_assoc();
      echo "<nav>
              <ul>
                <li class='nav__list'><a href='./index.php'>Message board</a></li>
                <li class='nav__list'><a href='./handle_logout.php'>登出</a></li>
              </ul>
            </nav>";
      echo "<h1 class='notation'>Hello ~ " . $row['nickname'] . "</h1>";
    } 
    ?>
    <section class="container">
      <h1>Message board</h1>
      <section class='comment_board' >
      <?php 
        if (isset($_COOKIE["user_id"])) {
          echo "<form method='POST' action='handle_add.php'>
                  <div class='comment_board_input'>留言<textarea name='content' rows='10' placeholder='What do you want to say ?' required></textarea></div>";
          echo "  <input type='submit' class='btn' value='送出' />";
          echo "</form>";
        } 
      ?>
    </section>
      <div class="messages">
        <?php 
        $sql = "SELECT A.id, A.content, A.created_at, A.is_deleted, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id ORDER BY A.created_at DESC";
        // $sql = "SELECT * FROM lagom0327_comments ORDER BY created_at DESC";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          while ($row = $result->fetch_assoc()) {
            $nickname = $row['nickname'];
            $created_at = $row['created_at'];
            $content = $row['content'];
            echo "<div class='message'>";
            echo  "<header>";
            echo    "<h3 class='message__nickname'>From: $nickname</h3>";
            echo    "<h4 class='message__time'>$created_at</h4>";
            echo  "</header>";
            echo  "<p>$content</p>";
            echo "</div>";
          }
        } else die();
        ?>
      </div>
    </section>
    <h1></h1>
  </body>
</html>