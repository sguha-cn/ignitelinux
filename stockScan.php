<?php
	require_once('db_connection.php');
	$conn = mysql_dbConnection();
	$symbolname = $_GET['symbolname'];

	$returnData = array();
	$returnData['message'] = array();

	$scanSql = "SELECT scanDate FROM stockscaning WHERE symbolname like '%$symbolname%'";

	
	$scanSqlQuery = mysqli_query($conn, $scanSql);
	
	

	while ($n = mysqli_fetch_array($scanSqlQuery)) {
		array_push($returnData['message'], $n['scanDate']);
		//print_r($n);
	}
	

	if (count($returnData['message'] > 0)) {
		$returnData['success'] = true;
	} else {
		$returnData['success'] = false;
		$returnData['message'] = "";
	}
	echo json_encode($returnData);
	
?>