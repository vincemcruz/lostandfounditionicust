<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$type = $request->type;
$id = $request->id;

if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$sql = "";
if ($type == "f")
{
	$sql = "SELECT * FROM `message_found` WHERE itemid = '$id' ORDER BY ID DESC";
	$res = mysqli_query($con,$sql);
	$result = array();
	while($row = mysqli_fetch_array($res)){
		array_push($result,
		array('userid'=>$row["userid"],
		'id'=>$row["id"],
		'message'=>$row["message"],
		'firstname'=>$row["name"],
		'lastname'=>$row["lastname"],
		'posted'=>$row["posted"]
		));
	}
	
	echo json_encode(array("result"=>$result));
}
else if ($type == "t")
{
$sql = "select * from Persons ORDER BY ID DESC";
 
$res = mysqli_query($con,$sql);
 
$result = array();
 
while($row = mysqli_fetch_array($res)){
array_push($result,
array('id'=>$row["id"],
'name'=>$row["firstname"],
'address'=>$row["contactno"]
));
}
 
echo json_encode(array("result"=>$result));
}
else if ($type == "l")
{
	$sql ="SELECT * FROM `message_lost` WHERE itemid = '$id' ORDER BY ID DESC";
	$result = array();
	$res = mysqli_query($con,$sql);
	$result = array();
	while($row = mysqli_fetch_array($res)){
		array_push($result,
		array('userid'=>$row["userid"],
		'id'=>$row["id"],
		'message'=>$row["message"],
		'firstname'=>$row["name"],
		'lastname'=>$row["lastname"],
		'posted'=>$row["posted"]
		));
	}
	
	echo json_encode(array("result"=>$result));
}
else if ($type == "i")
{
	$sql = "SELECT * FROM id";
}


 
mysqli_close($con);
?>