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
if ($type == "f")
{
	$sql = "SELECT * FROM `found_table` WHERE status NOT LIKE '%Pending%' ORDER BY ID DESC";
	$res = mysqli_query($con,$sql);
	$result = array();
	while($row = mysqli_fetch_array($res)){
		array_push($result,
		array('id'=>$row["ID"],
		'name'=>$row["FIRSTNAME"],
		'phone'=>$row["CONTACTNO"],'desc'=>$row["DESCRIPTION"],'place'=>$row["WHERE"],'status'=>$row["STATUS"],
		'lastname'=>$row["LASTNAME"]
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
	$sql = "SELECT * FROM lost_table  WHERE status NOT LIKE '%Pending%' ORDER BY ID DESC";
	$result = array();
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		array_push($result,
		array('id'=>$row["ID"],
		'name'=>$row["FIRSTNAME"],
		'phone'=>$row["CONTACTNO"],'desc'=>$row["DESCRIPTION"],'place'=>$row["WHERE"],'status'=>$row["STATUS"],
		'lastname'=>$row["LASTNAME"]
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