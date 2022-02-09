<?php


$input_text=$_GET["input_text"]; //get text

$stripped = trim(preg_replace('/\s\s+/', ' ', str_replace("\n", " ", $input_text)));

$array=[ "original_text"=>$input_text , 
         "stripped_text"=>$stripped];
         

//return json object
echo json_encode($array);

?>