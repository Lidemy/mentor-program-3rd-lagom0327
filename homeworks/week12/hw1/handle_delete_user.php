<?php
  require_once('./sessionStatus.php');
  require_once('./isSuperAdmin.php');
  require_once('./idIsSuperAdmin.php');
  if (!$_GET['id'] || !$sessionStatus || !isSuperAdmin($conn)) {
    die(header("Location: ./index.php"));
  }

  function deleteUser() {
    include('./conn.php');
    $sql = "UPDATE lagom0327_users SET is_deleted=1 WHERE id={$_GET['id']}";
    $result = $conn->query($sql);
  }


  if (idIsSuperAdmin($_GET['id'])) die('super admin cannot change');
  deleteUser();
  header("Location: ./super_admin.php");

?>