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
	
	$name = $request->firstname;
	$lastname = $request->surname;
	$contact = $request->phone;
	$email = $request->email;
	$password = $request->password;
	$code = RandomString(3);
	
	$name = htmlspecialchars($name, ENT_QUOTES);
	$lastname = htmlspecialchars($lastname, ENT_QUOTES);
	$contact = htmlspecialchars($contact, ENT_QUOTES);
	$email = htmlspecialchars($email, ENT_QUOTES);
	$password = htmlspecialchars($password, ENT_QUOTES);
	$code = htmlspecialchars($code, ENT_QUOTES);
	
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
		$query = "";
		$password = crypt($password, '$2a$07$computershopplayersneedtocalmdown$');
		$query = "INSERT INTO `users`(`name`, `lastname`, `contact`, `email`, `password`, `code`)
		VALUES ('$name', '$lastname', '$contact','$email','$password', '$code')";
	
		if(mysqli_query($con,$query)){
			// Subject of confirmation email.
			$conf_subject = 'Lost and Found IT Account Verification';

			// Who should the confirmation email be from?
			$conf_sender = 'Lost And Found IT Team <no-reply>';

			$msg = "Thank you for registering for the Lost and Found IT mobile application. Your verification code is: $code  \n Have a good day.";

			mail($email, $conf_subject, $msg, 'From: ' . $conf_sender );
			
			
			echo "Success, please check your email for the verification code." ;
		}
	
	}
	else {
		throw new RegisterException("Zero-One");
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