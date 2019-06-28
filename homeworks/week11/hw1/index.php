<?php 
require_once('./conn.php'); 
require_once('./sessionStatus.php');
// require_once('./validIp.php');
?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Message Board</title>
    <link rel="stylesheet" href='./style.css' />
  </head>
  <body>
  <?php 


  function printLoginNav($nickname) {
    echo "<nav>
    <ul>
      <li class='nav__list'><a href='./index.php'>Message board</a></li>
      <li class='nav__list'><a href='./handle_logout.php'>登出</a></li>
    </ul>
    </nav>";
    echo "<h1 class='notation'>Hello ~ " . $nickname . "</h1>";
  }

  function printLogoutNav() {
    echo "
    <nav>
      <ul>
        <li class='nav__list'><a href='./index.php'>Message board</a></li>
        <li class='nav__list'><a href='./login.php'>登入</a></li>
        <li class='nav__list'><a href='./register.php'>註冊</a></li>
      </ul>
    </nav>";
    echo "<h1 class='notation'>如需留言請登入</h1>
          <p class='notation'>本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼</p>";
  }

  function printCommentBoard() {

    echo "<form method='POST' action='handle_add.php'>
            <div class='comment_board_input'>留言<textarea name='content' rows='10' placeholder='What do you want to say ?' required></textarea></div>";
    echo "  <input type='submit' class='btn' value='送出' />";
    echo "</form>";
  }

function printUserComment() {
  echo "<form method='POST' action='handle_add.php'>
  <div class='comment_board_input'>留言<textarea name='content' rows='10' placeholder='What do you want to say ?' required></textarea></div>";
echo "  <input type='submit' class='btn' value='送出' />";
echo "</form>";
}
  // $status = sessionStatus();
  if ($sessionStatus) {    
    printLoginNav($_SESSION['nickname']);
  } else {
    printLogoutNav();
  }

  ?>
    <section class="container">
      <h1>Message board</h1>
      <section class='comment_board' >
      <?php 
        if ($sessionStatus) {
          printCommentBoard();
          // echo $id;
        } 
      ?>
    </section>
      <div class="messages">
        <?php 
        $sql = "SELECT A.id, A.user_id, A.content, A.created_at, A.is_deleted, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id ORDER BY A.created_at DESC";
        // $sql = "SELECT * FROM lagom0327_comments ORDER BY created_at DESC";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          while ($row = $result->fetch_assoc()) {
            echo "<div class='message'>";
            echo  "<header>";
            echo    "<h3 class='message__nickname'>From: {$row['nickname']}</h3>";
            echo    "<h4 class='message__time'>{$row['created_at']}</h4>";
            echo  "</header>";
            echo  "<p>{$row['content']}</p>";
              if (isset($_SESSION['user_id']) && $_SESSION['user_id'] === $row['user_id']) {
                echo "<div class='message__edite'>";
                echo "<a class='btn edite_btn' data-id='{$row['id']}'>edite</a>";
                echo "<a href='./handle_delete.php?id={$row['id']}'><button class='btn'>delete</button></a>";
                echo "</div>";
              }
        
            echo "</div>";
          }
        } else die();
        ?> 
      </div>
    </section>
    <script src='index.js'></script>
  </body>
</html>