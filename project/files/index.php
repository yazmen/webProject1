<?php // make  connection 
    $conn = new mysqli("localhost", "root", "root", "db");
    if($conn->connect_error){
       die($conn->connect_error);
    }
 //  else echo "connection Sucsess" ;
   //**********POST EVENTS **********************//
   //-------load---------------------------------- 
   if(isset($_POST['LOAD'])){
       $arr1 = json_decode($_POST['LOAD'], true);
       //echo $arr1;
        //echo json_encode($arr1);
      
       if(count($arr1) >0){

           for($i=0 ; $i< count($arr1); $i++ ){
               $eventType = $arr1[$i]["eventType"] ;
               $eventTarget = $arr1[$i]["eventTarget"] ;
               $eventTime = $arr1[$i]["eventTime"] ;
         $sql = "Insert Into events values('$eventType', '$eventTarget', '$eventTime')";
               $conn->query($sql); 
               //
           }
           
       } 
       if($conn->affected_rows > 0){
        echo "Inserted Successfully";
                                   }
       else{
        echo "Sorry: Problem With Insertion";	
           } 
    }

    //-------unload---------------------------------- 
   if(isset($_POST['UNLOAD'])){
    $arr2 = json_decode($_POST['UNLOAD'], true);
   // echo $arr2;
     //echo json_encode($arr1);
   
    if(count($arr2) >0){

        for($i=0 ; $i< count($arr2); $i++ ){
            $eventType = $arr2[$i]["eventType"] ;
            $eventTarget = $arr2[$i]["eventTarget"] ;
            $eventTime = $arr2[$i]["eventTime"] ;
      $sql = "Insert Into events values('$eventType', '$eventTarget', '$eventTime')";
            $conn->query($sql); 
            //
        }
        
    } 
    if($conn->affected_rows > 0){
     echo "Inserted Successfully";
                                }
    else{
     echo "Sorry: Problem With Insertion";	
        } 
 }
//   //-------generate---------------------------------- 
  if(isset($_POST['GENERARE'])){
    $arr3 = json_decode($_POST['GENERARE'], true);
    echo $arr3;
     //echo json_encode($arr1);
   
    if(count($arr3) >0){

        for($i=0 ; $i< count($arr3); $i++ ){
            $eventType = $arr3[$i]["eventType"] ;
            $eventTarget = $arr3[$i]["eventTarget"] ;
            $eventTime = $arr3[$i]["eventTime"] ;
      $sql = "Insert Into events values('$eventType', '$eventTarget', '$eventTime')";
            $conn->query($sql); 
            //
        }
        
    } 
    if($conn->affected_rows > 0){
     echo "Inserted Successfully";
                                }
    else{
     echo "Sorry: Problem With Insertion";	
        } 
 }
    

//   //-------letter---------------------------------- 
if(isset($_POST['LETTER'])){
    $arr4 = json_decode($_POST['LETTER'], true);
    echo $arr4;
     //echo json_encode($arr1);
   
    if(count($arr4) >0){

        for($i=0 ; $i< count($arr4); $i++ ){
            $eventType = $arr4[$i]["eventType"] ;
            $eventTarget = $arr4[$i]["eventTarget"] ;
            $eventTime = $arr4[$i]["eventTime"] ;
      $sql = "Insert Into events values('$eventType', '$eventTarget', '$eventTime')";
            $conn->query($sql); 
            //
        }
        
    } 
    if($conn->affected_rows > 0){
     echo "Inserted Successfully";
                                }
    else{
     echo "Sorry: Problem With Insertion";	
        } 
 }

    /////////////////////////////////// GET ///////////////////////
    if(isset($_GET['events'])){
  $sql = "Select * from events "; 
  if ($result = $conn->query($sql)){
    $rows = array();
    if($result->num_rows > 0){
     while($row = $result->fetch_assoc()){
      array_push($rows, $row);
     }
    //Convert to JSON Before Sending to Client
    echo json_encode($rows);
   }
 }
 else{
  echo "No Data to Retrieve";
 }
}

?>