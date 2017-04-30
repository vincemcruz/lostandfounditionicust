<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
try{
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);	
	$type = $request->type;	
	$id = $request->id;
	$name = $request->firstname;
	$lastname = $request->surname;
	
	
	$result = 0;
	
	//Checks if account exists
	$sql = "SELECT count(id) FROM `users` WHERE id = '$id'";
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		if ($row[0] == "1"){
			$result = 1;
		}
	}
	
	if ($result == 1)
	{
		$query = "Delete from `names` WHERE userid = '$id'";
		if(mysqli_query($con,$query)){
			    if ($type != "a")
				{
					$result = array();
					array_push($result,array('response'=>$query));	
					echo json_encode(array("result"=>$result));					
				}

		}			
		if ($type == "a")
		{
			$query = "UPDATE `lost_table` SET `firstname`='$name',`lastname`='$lastname' WHERE userid = '$id'";
			if(mysqli_query($con,$query)){
				
			}	
			$query = "UPDATE `found_table` SET `firstname`='$name',`lastname`='$lastname' WHERE userid = '$id'";
			if(mysqli_query($con,$query)){
				
			}
			$query = "UPDATE `message_found` SET `name`='$name',`lastname`='$lastname' WHERE userid = '$id'";
			if(mysqli_query($con,$query)){
				
			}				
			$query = "UPDATE `message_lost` SET `name`='$name',`lastname`='$lastname' WHERE userid = '$id'";
			if(mysqli_query($con,$query)){
				
			}			
			$query = "UPDATE `adminrequest` SET `firstname`='$name',`lastname`='$lastname' WHERE userid = '$id'";
			if(mysqli_query($con,$query)){
				
			}				
			
			$query = "UPDATE `users` SET `name`='$name',`lastname`='$lastname' WHERE id = '$id'";
			if(mysqli_query($con,$query)){
				$result = array();	
				array_push($result,array('response'=>$query));	
				echo json_encode(array("result"=>$result));
			}			
		}


	}
	else {
		throw new LoginException("0");
	}	
	
}
catch (LoginException $e)
{
	echo ($e);
}

mysqli_close($con);

class LoginException extends Exception
{
	public function __construct($message, $code = 0, Exception $previous = null) {

		parent::__construct($message, $code, $previous);
	}


	public function __toString() {
		return "{$this->message}";
	}

}
?>