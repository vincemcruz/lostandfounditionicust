<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$type = $request->type;

if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$sql = "";

	$sql = "SELECT * FROM `adminrequest` ORDER BY USERID DESC";
	$res = mysqli_query($con,$sql);
	$result = array();
	while($row = mysqli_fetch_array($res)){
		array_push($result,
		array('id'=>$row["userid"],
		'name'=>$row["firstname"],
		'lastname'=>$row["lastname"],
		'reason'=>$row["reason"],
		));
	}
	
	echo json_encode(array("result"=>$result));


 
mysqli_close($con);
?>