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

if ($type == "f")
{
	$query = "UPDATE `found_table` SET `status`= 'Found/Claimed' WHERE id = '$id' ";	
}
else if ($type == "l")
{
	$query = "UPDATE `lost_table` SET `status`= 'Lost/Claimed' WHERE id = '$id' ";	
}
else if ($type == "aal")
{
	$query = "UPDATE `lost_table` SET `status`= 'Lost/Unclaimed' WHERE id = '$id' ";	
}
else if ($type == "aaf")
{
	$query = "UPDATE `found_table` SET `status`= 'Found/Unclaimed' WHERE id = '$id' ";	
}
else if ($type == "arl")
{
	$query = "Delete from `lost_table` WHERE id = '$id' ";	
}
else if ($type == "arf")
{
	$query = "Delete from `found_table` WHERE id = '$id' ";	
}
if(mysqli_query($con,$query)){
echo "Success Update";
}
mysqli_close($con);
?>