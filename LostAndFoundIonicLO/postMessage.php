<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$userid = $request->userid;
$firstname = $request->firstname;
$lastname = $request->lastname;

$type = $request->type;
$id = $request->id;
$message = $request->message;


$message = htmlspecialchars($message, ENT_QUOTES);

$query = "";
if ($type == "f")
{
	$query = "INSERT INTO `message_found`(`userid`, `itemid`, `message`, `name`, `lastname`) VALUES ('$userid','$id','$message', '$firstname', '$lastname')";	
}
else if ($type == "l")
{
	$query = "INSERT INTO `message_lost`(`userid`, `itemid`, `message`, `name`, `lastname`) VALUES ('$userid','$id','$message', '$firstname', '$lastname')";	
}

if(mysqli_query($con,$query)){
echo "$query";
}
mysqli_close($con);
?>