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
$name = $request->name;
$lastname = $request->lastname;
$contact = $request->phone;
$desc = $request->desc;
$where = $request->place;
$id = $request->id;

$desc= htmlspecialchars($desc, ENT_QUOTES);
$where= htmlspecialchars($where, ENT_QUOTES);

$query = "";
if ($type == "f")
{
	$query = "insert into `found_table`(`firstname`, `lastname`, `contactno`, `description`, `where`, `status`, `userid`)
	VALUES ('$name', '$lastname', '$contact','$desc','$where', 'Found/Confirmation Pending', '$id')";	
}
else if ($type == "l")
{
	$query = "insert into `lost_table`(`firstname`, `lastname`, `contactno`, `description`, `where`, `status`, `userid`)
	VALUES ('$name', '$lastname', '$contact','$desc','$where', 'Lost/Confirmation Pending', '$id')";	
}

if(mysqli_query($con,$query)){
echo "$query";
}
mysqli_close($con);
?>