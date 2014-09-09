<?php
    // Connect to Database
    require_once('db_connection.php');
    
    $returnData = array();
    $groupSymbolList = array();
    $conn = mysql_dbConnection();
    $get_date = $_REQUEST['selectedDate'];
    $get_selectedTable = $_REQUEST['selectedTable'];
    
    $get_groupSymbolList = "SELECT symbol FROM stockrecord WHERE id IN (SELECT symbolid FROM stockgroupmap where subgroupid = '".$get_selectedTable."')";
    
    //echo $get_groupSymbolList;
    $get_groupSymbolList_query = mysqli_query($conn,$get_groupSymbolList);
    while ($n = mysqli_fetch_array($get_groupSymbolList_query)){
        
        array_push($groupSymbolList, $n['symbol']);
        //print_r($n);
    }

    $sql_for_scanning = "SELECT * FROM `stockscaning` where `scanDate` = '".$get_date."'";
    $scanningQuery = mysqli_query($conn,$sql_for_scanning);
    $scanningresults = mysqli_fetch_array($scanningQuery);
    $tradetableresults = $scanningresults['tradetableresults'];
    // $scanningRow
    $search = 'class="upgreen"';
    $replace = "class='upgreen'";
    
    $tradetableresults = str_replace ($search , $replace , $tradetableresults );
    
    $search = 'class="downred"';
    $replace = "class='downred'";
    
    $tradetableresults = str_replace ($search , $replace , $tradetableresults);
    $trade_Performance_Data = $tradetableresults;
    
    //echo json_encode($trade_Performance_Data);
    //echo $trade_Performance_Data;
    //echo $groupSymbolList;
    $tradeData = json_decode($trade_Performance_Data);
    $returnData['performance'] = $tradeData->performance;
    $returnData['scanning'] = array();
    for ($i=0; $i < count($tradeData->scanning); $i++) {
        //echo $tradeData->scanning[$i]->symbol;
        if (in_array($tradeData->scanning[$i]->symbol, $groupSymbolList)) {
            //echo $groupSymbolList.' :: '.'true';
            array_push($returnData['scanning'], $tradeData->scanning[$i]);
        }
    }

    echo json_encode($returnData);die();
    //print_r($tradeData->scanning);
    //print_r($groupSymbolList);
    //var_dump($tradeData);
?>
