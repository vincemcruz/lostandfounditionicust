<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
	
if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$type = $request->type;
$id = $request->id;
$query = "";
if ($type == "f")
{
	$query = "delete from `message_found` WHERE id = '$id' ";	
}
else if ($type == "l")
{
	$query = "delete from `message_lost` WHERE id = '$id' ";	
}
if(mysqli_query($con,$query)){
echo "Success Update";
}
mysqli_close($con);
?>