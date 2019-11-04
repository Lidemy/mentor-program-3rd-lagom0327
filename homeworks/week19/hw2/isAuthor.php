<?php
require_once('./conn.php');

function check($conn, $id) {
  $stmt = $conn->prepare("SELECT user_id FROM lagom0327_todoItems WHERE id=?");
  $stmt->bind_param("i", $id);
  $stmt->execute();
  $result = $stmt->get_result();
  if ($result) {
    if ($result->num_rows <= 0) exit(header('HTTP/1.1 400 error: bad request'))
    $row = $result->fetch_assoc();
    // id = 63 is guest
    if(empty($_SESSION['user_id'])) return ((int)$row['user_id'] === 63);
    return ((int)$row['user_id'] === $_SESSION['user_id']);
  } else die("fail:" . $conn->error);
}
function isItemAuthor ($conn) {
    return check($conn, $_GET['id']);
}

function isItemAuthorForPatch($conn, $id) {
  return check($conn, $id);
}

?>