<?php

$test1=$_GET["x"];
$test2=$_GET["y"];
$x = (int)$test1;
$y = (int)$test2;
$result=2 * $x + $y % 2;
$array=[ "first_number"=>$x , "second_number"=>$y , "result"=>$result ];

echo json_encode($array);

?>