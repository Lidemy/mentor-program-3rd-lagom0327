<?php
require_once('./conn.php'); 
// require_once('./sessionStatus.php');
require_once('./utils.php');

$method = $_SERVER['REQUEST_METHOD'];
if ($method !== 'GET' || !isset($_GET['page']) || empty($_GET['page'])) exit();
// $page = $_GET['page'];

function getPageData ($conn, $page) {
  $offset = ($page - 1) * 20;

    $sql = "SELECT A.id, A.user_id, A.content, A.created_at, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.is_deleted=0 AND A.layer=0 ORDER BY A.created_at DESC LIMIT  ?, 20";

  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i', $offset);
  if ($stmt->execute()) return $stmt->get_result();
  return null;
}

function getSubCommits($conn, $id, $arr, $i) {
  $stmt = $conn->prepare("SELECT A.id, A.user_id, A.content, A.created_at, U.nickname FROM lagom0327_comments as A JOIN lagom0327_users as U ON A.user_id = U.id WHERE A.is_deleted=0 AND A.layer=1 AND A.parent_layer_id=? ORDER BY A.created_at ASC");
  $stmt->bind_param("i", $id);
  $stmt->execute();
  $result = $stmt->get_result();
  // echo "<h3>sub</h3>";
  // echo "parent id : " . $id . ", ";
  if ($result->num_rows <= 0) return $arr;
  $j = 0;
  while ($row = $result->fetch_assoc()) {
    $arr[$i]['sub'][$j] = $row;
    $j++;
  }
  return $arr;
}

$arr = array();
$i = 0;
$mainComments = getPageData($conn, $page);
// $mainComments = getPageData($conn, 1);
while ($row = $mainComments->fetch_assoc()) {
  $row['nickname'] = escape($row['nickname']);
  $row['content'] = escape($row['content']);
  array_push($arr, array('main' => $row));
  // array_push($arr, $row);
  // echo "<h1>". $i ."</h1>";
  // echo "main arr : " . json_encode($arr) . "<br>";
  $arr = getSubCommits($conn, $row['id'], $arr, $i);
  $i += 1 ;
}


// $result = getAllData('comments', $conn, 1);

echo json_encode($arr);
$conn->close();
// echo "]";

?>