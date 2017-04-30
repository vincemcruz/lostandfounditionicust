<?php
header("Access-Control-Allow-Origin: *");
$con=mysqli_connect("localhost","root","","lostandfound");

/**
 * function to generate random strings
 * @param 		int 	$length 	number of characters in the generated string
 * @return 		string	a new string is created with random characters of the desired length
 */
function RandomString($length = 32) {
    $randstr = "";
    srand((double) microtime(TRUE) * 1000000);
    //our array add all letters and numbers if you wish
    $chars = array(
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

    for ($rand = 0; $rand <= $length; $rand++) {
        $random = rand(0, count($chars) - 1);
        $randstr .= $chars[$random];
    }
    return $randstr;
}

if (mysqli_connect_errno($con))
{
   echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
try{

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	
	$email = $request->email;
	$code = RandomString(3);
	
	$result = 1;
	
	$sql = "SELECT count(email) FROM users where email = '$email'";
	$res = mysqli_query($con,$sql);
	while($row = mysqli_fetch_array($res)){
		if ($row[0] == "0"){
			$result = 0;
		}
	}
	
	if ($result == 0)
	{
		throw new RegisterException("Step-Zero");
	}
	else {
			$query = "UPDATE `users` SET `passcode`='$code' WHERE email = '$email'";
			if(mysqli_query($con,$query)){
				$result = array();	
				array_push($result,array('response'=>"yes"));	
				//echo json_encode(array("result"=>$result));	
			}
			else 
			{
				$result = array();	
				array_push($result,array('response'=>"no"));	
				//echo json_encode(array("result"=>$result));	
			}
			
			// Subject of confirmation email.
			$conf_subject = 'Lost and Found IT Account Lost Password';

			// Who should the confirmation email be from?
			$conf_sender = 'Lost And Found IT Team <no-reply>';

			$msg = "Someone has requested that your password be reset. Your secret key to use for changing your password is: $code  \n If you did not request this, please ignore this email. \n Have a good day.";

			mail($email, $conf_subject, $msg, 'From: ' . $conf_sender );
			
			
			echo "Success, please check your email for the secret key to be used to set your password again." ;
	}	
	
}
catch (RegisterException $e)
{
	echo ($e);
}

mysqli_close($con);


class RegisterException extends Exception
{
	public function __construct($message, $code = 0, Exception $previous = null) {

		parent::__construct($message, $code, $previous);
	}


	public function __toString() {
		return "{$this->message}";
	}

}
?>