<?php
require_once('./conn.php');
require_once('./sessionStatus.php');
require_once('./isSuperAdmin.php');
require_once('./idIsSuperAdmin.php');

function editePermission($content, $conn) {
  $sql = "UPDATE lagom0327_users SET permission='$content' WHERE id={$_GET['id']}";
  $result = $conn->query($sql);
  if (!$result) die("fail:" . $conn->error);
}

if (!$_GET['id'] || !$sessionStatus || !isSuperAdmin($conn)) {
  die(header("Location: ./index.php"));
}

$id = $_GET['id'];
$selectOption = $_POST['permissionOption'];
if ($selectOption !== 'normal' && $selectOption !== 'admin') die();
if (idIsSuperAdmin($id)) die("super admin can not change.");
editePermission($selectOption, $conn);
header("Location: ./super_admin.php"); 

?>