<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
	
$name = $request->firstname;
$lastname = $request->surname;
$contact = $request->phone;
$id = $request->id;
	
if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$query = "UPDATE `lost_table` SET `contactno`='$contact' WHERE userid = '$id'";
if(mysqli_query($con,$query)){
	
}	
$query = "UPDATE `found_table` SET `contactno`='$contact' WHERE userid = '$id'";
if(mysqli_query($con,$query)){
	
}	
	

$query = "UPDATE `users` SET `name`='$name',`lastname`='$lastname',`contact`='$contact' WHERE id = '$id'";
if(mysqli_query($con,$query)){
	$result = array();	
	array_push($result,array('response'=>$query));	
	echo json_encode(array("result"=>$result));
}


mysqli_close($con);


	


?>