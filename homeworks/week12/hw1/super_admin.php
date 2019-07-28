<?php 
require_once('./conn.php'); 
require_once('./sessionStatus.php');
require_once('./isSuperAdmin.php');
if (!isSuperAdmin($conn)) header('Location: ./index.php');
?>


<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Message Board</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
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
    echo "<h1 class='notation'>Hello ~ " . htmlspecialchars($nickname) . "</h1>";
  }


function countUser () {
  include('./conn.php');
  $sql = "SELECT count(*) FROM lagom0327_users";
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
      else echo "<a href='./super_admin.php?page=$i'><button class='page_btn btn' data-page='$i' >$i</button></a>";
    }
  echo "</section>";
}

function printEditeSession ($row) {
  echo "<div class='message__edite'>";
  echo   "<button class='edite_btn btn icon' title='edite' data-id={$row['id']}></button>";
  echo   "<a href='./handle_delete_user.php?id={$row['id']}'><button title='delete' class='btn delete_btn icon'></button></a>";
  echo "</div>";
}

function printUser($row) {
  echo "<tr class='user_data'>
          　<td class='user_table__td'>{$row['id']}</td>
          　<td class='user_table__td'>{$row['username']}</td>
          　<td class='user_table__td'>{$row['nickname']}</td>
          　<td class='user_table__td permission__th'>{$row['permission']}</td>
            <td class='user_table__td'>";
            if ($row['permission'] !== 'super admin')printEditeSession($row);
      echo "</td>
        </tr>";
}

  if ($sessionStatus) {    
    printLoginNav($_SESSION['nickname']);
  } else {
    printLogoutNav();
  }

  ?>
    <section class="container">
      <h1>Message board  管理權限後台</h1>

        <?php 
        $page = isset($_GET['page']) ? $_GET['page'] : 1;
        $offset = ($page - 1) * 20;
        $sql = "SELECT * FROM lagom0327_users WHERE is_deleted='0' ORDER BY id LIMIT  $offset, 20";

        $result = $conn->query($sql);
        if ($result && $result->num_rows > 0) {
          echo "<table class='users_table'>";
          echo "<tr>
          　<th class='user_table__th'>Id</th>
          　<th class='user_table__th'>Username</th>
          　<th class='user_table__th'>Nickname</th>
          　<th class='user_table__th '>Permission</th>
            <th class='user_table__th'>Edite</th>
          　</tr>";
          while ($row = $result->fetch_assoc()) {
            printUser($row);
          }
          echo "</table>";
          echo "<p>按下 Esc 可取消編輯</p>";
        } else die('fail : ' . $conn->error);
        printPageBtn($page, countUser());
        ?> 
    </section>
    <script src='index.js'></script>
  </body>
</html>