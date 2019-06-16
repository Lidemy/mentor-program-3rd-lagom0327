<?php

require_once('./conn.php');

// $nickname = $_POST['nickname'];
$content = $_POST['content'];
// $category_id = $_POST['category_id'];

if (empty($content) || empty($_COOKIE["user_id"])) {
  die('empty data');
} 
$user_id = $_COOKIE["user_id"];
$sql = "INSERT INTO lagom0327_comments(user_id, content) VALUES ('$user_id', '$content')";

echo $sql;
$result = $conn->query($sql);
if ($result) {
  header("Location: ./index.php");
} else {
  die("fail:" . $conn->error);
}
?>