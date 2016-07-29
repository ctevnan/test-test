<?php
$connection = mysql_connect("localhost", "root", "");
$db = mysql_select_db("mydba", $connection);
$method2=$_POST['method1'];
$userID2=$_POST['userID1'];
$currentDB2=$_POST['currentDB1'];
$mode2=$_POST['mode1'];
$halberdApiUrl2=$_POST['halberdApiUrl1'];
$query = mysql_query("insert into form_element(method, userID, currentDB, mode) values('$method2', '$userID2', '$currentDB2', '$mode2')");
if($query){
echo "Data submitted";
}
mysql_close($connection);
?>