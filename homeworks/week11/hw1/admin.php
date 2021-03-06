<?php 
require_once('./conn.php'); 
require_once('./sessionStatus.php');
require_once('./isAdmin.php');
if (!isAdmin($conn)) header('Location: ./index.php');

function printLoginNav($nickname) {
  echo "<nav>
  <ul>
    <li class='nav__list'><a href='./index.php'>Message board</a></li>
    <li class='nav__list'><a href='./handle_logout.php'>登出</a></li>
  </ul>
  </nav>";
  echo "<h1 class='notation'>Hello ~ " . $nickname . "</h1>";
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
      else echo "<a href='./admin.php?page=$i'><button class='page_btn btn' data-page='$i' >$i</button></a>";
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
  echo    "<h3 class='message__nickname'>From: {$row['nickname']}</h3>";
  echo    "<h4 class='message__time'>{$row['created_at']}</h4>";
  echo  "</header>";
  echo  "<p>{$row['content']}</p>";
      printEditeSession($row);
  echo "</div>";
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
  if ($sessionStatus) {    
    printLoginNav($_SESSION['nickname']);
  } else {
    printLogoutNav();
  }

  ?>
    <section class="container">
      <h1>Message board  管理後台</h1>

      <div class="messages">
        <?php 
        if ((isset($_GET['page']))) $page = $_GET['page'];
        else $page = 1;
        $offset = ($page - 1) * 20;
        $sql = "SELECT A.id, A.user_id, A.content, A.created_at, A.is_deleted, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.is_deleted=0 ORDER BY A.created_at DESC LIMIT  $offset, 20";

        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          while ($row = $result->fetch_assoc()) {
            printMessage($row);
          }
        } else die();
        printPageBtn($page, countPage($conn));
        ?> 
      </div>
    </section>
    <script src='index.js'></script>
  </body>
</html>