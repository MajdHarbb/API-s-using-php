<?php

// get x and y
$n1=$_GET["x"];
$n2=$_GET["y"];

// convert to int
$x = (int)$n1;
$y = (int)$n2;

$result=2 * $x + $y % 2;

$array=[ "first_number"=>$x , 
         "second_number"=>$y , 
         "result"=>$result ];

//return json object
echo json_encode($array);

?>