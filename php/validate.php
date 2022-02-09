<?php


$password=$_GET["password"]; //get text

$isValid = false;

// password conditions
$lowercase = preg_match('@[a-z]@', $password);
$number    = preg_match('@[0-9]@', $password);

if(!$lowercase || !$number || strlen($password) < 8) {
    $isValid = false;
}else{
    $isValid = true;
}

$array=[ "password"=>$password , 
         "isValid"=>$isValid];

//return json object
echo json_encode($array);

?>