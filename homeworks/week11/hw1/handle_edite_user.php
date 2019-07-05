<?php

require_once('./conn.php');
require_once('./sessionStatus.php');
require_once('./isSuperAdmin.php');
require_once('./idIsSuperAdmin.php');


function editePermission($content) {
  include('./conn.php');
  $sql = "UPDATE lagom0327_users SET permission='$content' WHERE id={$_GET['id']}";
  $result = $conn->query($sql);
  if ($result) {
    return true;
  } else die("fail:" . $conn->error);
}

if (!$sessionStatus) die('no session');
else {
  $id = $_GET['id'];
  $selectOption = $_POST['permissionOption'];
  if ($selectOption !== 'normal' && $selectOption !== 'admin') die();
  if (idIsSuperAdmin($id)) die("super admin can not change.");
  if (isSuperAdmin() && editePermission($selectOption)) header("Location: ./super_admin.php");
}

?>