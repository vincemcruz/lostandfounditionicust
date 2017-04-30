<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
	
$name = $request->firstname;
$lastname = $request->surname;
$id = $request->id;
$reason = $request->reason;

$name = htmlspecialchars($name, ENT_QUOTES); 
$lastname = htmlspecialchars($lastname, ENT_QUOTES);
$reason = htmlspecialchars($reason, ENT_QUOTES); 
	
if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

	$result = 0;
	
	//Checks if account exists
	$sql = "SELECT count(userid) FROM `adminrequest` WHERE userid = '$id'";
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		if ($row[0] == "1"){
			$result = 1;
		}
	}
	
	if ($result == 1)
	{
		$query = "UPDATE `adminrequest` SET `reason`='$reason' WHERE userid = '$id'";
		if(mysqli_query($con,$query)){
			$result = array();	
			array_push($result,array('response'=>$query));	
			echo json_encode(array("result"=>$result));
		}
	}
	else {
		$query = "INSERT INTO `adminrequest`(`userid`, `firstname`, `lastname`, `reason`) VALUES ('$id','$name','$lastname','$reason')";
		if(mysqli_query($con,$query)){
			$result = array();	
			array_push($result,array('response'=>$query));	
			echo json_encode(array("result"=>$result));
		}		
	}


mysqli_close($con);


	


?>