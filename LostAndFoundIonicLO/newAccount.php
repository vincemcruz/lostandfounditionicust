<?php
$con=mysqli_connect("localhost","root","","lostandfound");

if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$deviceid = null;
$result = 1;

while ($result == 1)
{
	$deviceid = rand(1000, 1000000);
	$sql = "SELECT count(DEVICEID) FROM id where DEVICEID = $deviceid";
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		if ($row[0] == "0"){
			$result = 0;
		}
	}	
}




$name = $_POST['name'];
$contact = $_POST['contact'];
$query = "";
$query = "INSERT INTO `id`(`deviceid`, `name`, `contact`) 
		VALUES ($deviceid,'$name',$contact)";	


if(mysqli_query($con,$query)){
echo $deviceid ;
}
mysqli_close($con);
?>