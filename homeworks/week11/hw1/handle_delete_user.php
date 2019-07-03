<?php
  require_once('./conn.php');
  require_once('./sessionStatus.php');
  require_once('./isSuperAdmin.php');
  require_once('./idIsSuperAdmin.php');

  function deleteUser() {
    include('./conn.php');
    $sql = "UPDATE lagom0327_users SET is_deleted=1 WHERE id={$_GET['id']}";
    $result = $conn->query($sql);
    return ($result);
  }


  if ($sessionStatus) {
    if (idIsSuperAdmin($_GET['id'])) die('super admin cannot change');
    if (isSuperAdmin() && deleteUser()) header("Location: ./super_admin.php");
  } else die("fail:" . $conn->error);

?>