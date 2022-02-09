<?php


$palindrome_text=$_GET["palindrome_text"]; //get text

$revString = strrev($palindrome_text); //reverse original text

$isPalindrome = false; //boolean for palindrome status

  if ($revString == $palindrome_text){
    $isPalindrome = true;
  } else {
    $isPalindrome =false;
  }


$array=[ "original_text"=>$palindrome_text , 
         "reversed_text"=>$revString , 
         "isPalindrome" =>$isPalindrome ];

//return json object
echo json_encode($array);

?>