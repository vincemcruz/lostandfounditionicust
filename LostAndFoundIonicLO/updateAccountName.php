<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
	
$name = $request->firstname;
$lastname = $request->surname;
$id = $request->id;
$firstnamenew = $request->firstnamenew;
$lastnamenew = $request->surnamenew;
$reason = $request->reason;

$name = htmlspecialchars($name, ENT_QUOTES); 
$lastname = htmlspecialchars($lastname, ENT_QUOTES);
$firstnamenew = htmlspecialchars($firstnamenew, ENT_QUOTES); 
$lastnamenew = htmlspecialchars($lastnamenew, ENT_QUOTES); 
$reason = htmlspecialchars($reason, ENT_QUOTES); 
	
if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

	$result = 0;
	
	//Checks if account exists
	$sql = "SELECT count(userid) FROM `names` WHERE userid = '$id'";
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		if ($row[0] == "1"){
			$result = 1;
		}
	}
	
	if ($result == 1)
	{
		$query = "UPDATE `names` SET `firstname`='$name',`lastname`='$lastname',`firstnamenew`='$firstnamenew',`lastnamenew`='$lastnamenew',`reason`='$reason' WHERE userid = '$id'";
		if(mysqli_query($con,$query)){
			$result = array();	
			array_push($result,array('response'=>$query));	
			echo json_encode(array("result"=>$result));
		}
	}
	else {
		$query = "INSERT INTO `names`(`userid`, `firstname`, `lastname`, `firstnamenew`, `lastnamenew`, `reason`) VALUES ('$id','$name','$lastname','$firstnamenew','$lastnamenew','$reason')";
		if(mysqli_query($con,$query)){
			$result = array();	
			array_push($result,array('response'=>$query));	
			echo json_encode(array("result"=>$result));
		}		
	}


mysqli_close($con);


	


?>