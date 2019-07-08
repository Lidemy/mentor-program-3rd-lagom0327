<?php 
require_once('./conn.php'); 
require_once('./sessionStatus.php');

function printLoginNav($nickname, $permission) {
  echo "<nav>
          <ul>
            <li class='nav__list'><a href='./index.php'>Message board</a></li>";
  echo     "<li class='nav__list'><a href='./handle_logout.php'>登出</a></li>";
  if ($permission === 'admin') {
    echo   "<li class='nav__list'><a href='./admin.php'>管理後臺</a></li>";
  } else if ($permission === 'super admin') {
    echo   "<li class='nav__list'><a href='./super_admin.php'>管理權限後臺</a></li>";
  }
  echo "</ul>
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
  echo "<section class='comment_board' >";
  echo "<form method='POST' action='handle_add.php'>
          <div class='comment_board_input'><textarea name='content' rows='10' placeholder='What do you want to say ?' required></textarea></div>";
  echo "  <input type='submit' class='btn' value='Send' />";
  echo "</form>";
  echo "</section>";
}

function countPage ($conn) {
$sql = "SELECT count(*) FROM lagom0327_comments WHERE is_deleted=0";
$result = $conn->query($sql);
if ($result) {
  $row = $result->fetch_assoc();
  return ceil($row['count(*)'] / 20);
} else {
  die("fail:" . $conn->error);
}
}

function printPageBtn($pageNow, $totalPage) {
echo "<section class='page_btn__section'>";
  for ($i = 1; $i <= $totalPage; $i++) {
    if ($i === (int)$pageNow) echo "<button class='page_btn btn active' data-page='$i' >$i</button>";
    else echo "<a href='./index.php?page=$i'><button class='page_btn btn' data-page='$i' >$i</button></a>";
  }
echo "</section>";
}

function printEditeSession ($row) {
echo "<div class='message__edite'>";
echo   "<button class='edite_btn btn icon' title='edite' data-id={$row['id']}></button>";
echo   "<a href='./handle_delete.php?id={$row['id']}'><button title='delete' class='btn delete_btn icon'></button></a>";
echo "</div>";
}

function printMessage($row) {
  echo "<div class='message'>";
  echo  "<header>";
  echo    "<h3 class='message__nickname'>From: " . htmlspecialchars($row['nickname']) . "</h3>";
  echo    "<h4 class='message__time'>{$row['created_at']}</h4>";
  echo  "</header>";
  echo  "<p>" . htmlspecialchars($row['content']) . "</p>";
  if (isset($_SESSION['user_id']) && $_SESSION['user_id'] === (int)$row['user_id']) {
    printEditeSession($row);
  }

  echo "</div>";
}

function printNav($sessionStatus, $conn) {
  if ($sessionStatus) {
    $permission = 'normal';
    if(include('./isAdmin.php')) $permission = 'admin';
    else if (include('./isSuperAdmin.php')) $permission = 'super admin';
    printLoginNav($_SESSION['nickname'], $permission);
  } else {
    printLogoutNav();
  }
}

function printMessages($page) {
  require('./conn.php');

  $offset = ($page - 1) * 20;
  $sql = "SELECT A.id, A.user_id, A.content, A.created_at, A.is_deleted, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.is_deleted=0 ORDER BY A.created_at DESC LIMIT  $offset, 20";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
      printMessage($row);
    }
  } else die();
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Message Board</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href='./style.css' />
  </head>
  <body>
  <?php 

  printNav($sessionStatus, $conn) ?>
    <section class="container">
      <h1>Message board</h1>   
      <?php if ($sessionStatus) printCommentBoard(); ?>
      <div class="messages">
        <?php 
          $page = isset($_GET['page']) ? $_GET['page'] : 1;
          // if (()) $page = ;
          // else $page = 1;
          printMessages($page);
          printPageBtn($page, countPage($conn));
        ?> 
      </div>
    </section>
    <script src='index.js'></script>
  </body>
</html>