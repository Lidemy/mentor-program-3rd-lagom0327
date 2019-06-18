<?php

require_once('./conn.php');

$content = str_replace("'","''", $_POST['content']);

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