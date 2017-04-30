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
	$password = $request->password;
	
	$email = htmlspecialchars($email, ENT_QUOTES);
	$password = htmlspecialchars($password, ENT_QUOTES);
	
	$result = 0;
	
	//Checks if account exists
	$sql = "SELECT count(id) FROM `users` WHERE email = '$email'";
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		if ($row[0] == "1"){
			$result = 1;
		}
	}
	
	if ($result == 1)
	{
		$sql = "SELECT id, name, lastname, contact, email, password, verified, admin FROM `users` WHERE email = '$email'";
		$res = mysqli_query($con,$sql);
		$result = array();
		while($row = mysqli_fetch_array($res)){
			
			
			if (hash_equals($row["password"], crypt($password, $row["password"]))) {
				if ($row[0] != "0"){
					array_push($result,array('id'=>$row["id"],'name'=>$row["name"], 'lastname'=>$row["lastname"],'contact'=>$row["contact"], 'email'=>$row["email"], 'verified'=>$row["verified"], 'admin'=>$row["admin"]));
					echo json_encode(array("result"=>$result));
				}
				else
				{
					throw new LoginException("0");
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