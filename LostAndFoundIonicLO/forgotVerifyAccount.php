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
	$email = $request->email;
	$passcode = $request->passcode;	
	$password = $request->password;
	
	$password = htmlspecialchars($password, ENT_QUOTES);
	
	$result = 0;
	
	//Checks if account exists
	$sql = "SELECT count(email) FROM `users` WHERE email = '$email'";
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		if ($row[0] == "1"){
			$result = 1;
		}
	}
	
	if ($result == 1)
	{
		$sql = "SELECT passcode FROM `users` WHERE email = '$email'";
		$password = crypt($password, '$2a$07$computershopplayersneedtocalmdown$');		
		$res = mysqli_query($con,$sql);
		$result = array();
		while($row = mysqli_fetch_array($res)){
			
			
			if ($row[0] != "0"){
				if ($row["passcode"] == $passcode)
				{
					$query = "UPDATE `users` SET `passcode`='',`password`='$password' WHERE email = '$email'";
					if(mysqli_query($con,$query)){
						$result = array();	
						array_push($result,array('response'=>"yes"));	
						echo json_encode(array("result"=>$result));	
					}
					else 
					{
						$result = array();	
						array_push($result,array('response'=>"no"));	
						echo json_encode(array("result"=>$result));	
					}
					
				}
				else 
				{
					$result = array();	
					array_push($result,array('response'=>"no"));	
					echo json_encode(array("result"=>$result));	
				}
			}
			else
			{
				throw new LoginException("0");
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