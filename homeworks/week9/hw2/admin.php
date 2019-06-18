<?php require_once('./conn.php'); ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Message Board</title>
    <link rel="stylesheet" href='./style.css' />
  </head>
  <body>
    <section class="container">
      <h1>Message board 管理後台</h1>
      <div class="messages">
        <?php 
        $sql = "SELECT A.id, A.content, A.created_at, A.is_deleted, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id ORDER BY A.created_at DESC LIMIT 50 OFFSET 0";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
          while ($row = $result->fetch_assoc()) {
            $nickname = $row['nickname'];
            $created_at = $row['created_at'];
            $content = $row['content'];
            echo "<div class='message'>";
            echo  "<header>";
            echo    "<h3 class='message__nickname'>暱稱 : $nickname</h3>";
            echo    "<h4 class='message__time'>$created_at</h4>";
            echo  "</header>";
            echo  "<p>$content</p>";   
            echo "</div>";
          }
        } else die("fail:" . $conn->error);
        ?>
      </div>
    </section>
    <h1></h1>
  </body>
</html>