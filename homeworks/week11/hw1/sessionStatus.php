<?php
require_once('./conn.php'); 
require_once('./isSessionInSQL.php');
require_once('./validIp.php');
$sessionStatus = isSessionInSQL() && validIp() ? true: false;
?>