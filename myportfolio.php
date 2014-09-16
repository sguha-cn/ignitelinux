<?php
	$returnData = array();
	require_once('db_connection.php');
	$conn = mysql_dbConnection();


	$shareSymbol = $_POST['shareSymbol'];
	$buyDate = $_POST['buyDate'];
	$sellType = $_POST['sellType'];

	$sqlBuy = "INSERT INTO stocksportfolio (`id`, `selltype`, `symbol`, `selldate`) VALUES  (NULL, '".$sellType."','".$shareSymbol."', '".$buyDate."');";
	$sqlBuyQuery = mysqli_query($conn,$sqlBuy);
	$returnData['success'] = true;
	$returnData['message'] = 'New Data Has been added successfully.';

	echo json_encode($returnData);
?>