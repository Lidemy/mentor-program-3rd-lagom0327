<?php
  require_once('./conn.php'); 
  require_once('./sessionStatus.php');
  require_once('./isSuperAdmin.php');
  require_once('./idIsSuperAdmin.php');

  if (!isSuperAdmin($conn) || !$_GET['id']) header('Location: ./index.php');

  function deleteUser($conn) {
    $stmt = $conn->prepare("UPDATE lagom0327_users SET is_deleted=1 WHERE id=?");
    $stmt->bind_param("i", $_GET['id']);
    $stmt->execute();
    $stmt->close();
  }


  if (idIsSuperAdmin($_GET['id'])) die('super admin cannot change');
  deleteUser($conn);
  header("Location: ./super_admin.php");

?>