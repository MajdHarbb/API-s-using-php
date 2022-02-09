$("document").ready(function () {
  $("#calculate").click(calculateResult);
  $("#isPalindrome").click(isPalindrome);
  $("#remove-space").click(removeSpaces);
  $("#is-valid").click(isValid);
});

//function to fetch x*2 + y%2 result
function calculateResult() {

  let x = $("#number-1").val();
  let y = $("#number-2").val();
  var calcResult = $("#calculate-result");

  //check if input is null
  if (x == "" || y == "") {
    alert("Enter two numbers first!");
  } else {

    //get json from calculator API
    $.getJSON(`php/calculator.php/?x=${x}&y=${y}`, function (json) {
      console.log("sum: " + json.result);
      calcResult.text(json.result);
    });
  }
}

//function to fetch palindrome result
function isPalindrome() {

    let is_palindrome = $("#Palindrome-text").val();
    var palindrome_result = $("#palindrome-result");
  
    //check if input is null
    if (is_palindrome == "") {
      alert("Enter text first!");
    } else {
  
      //get json from palindrome API
      $.getJSON(`php/palindrome.php/?palindrome_text=${is_palindrome}`, function (json) {
        console.log("isPalindrome: " + json.isPalindrome);
        palindrome_result.text(json.isPalindrome);
      });
    }
  }
  

//function to fetch stripping result
function removeSpaces() {

    let original_text = $("#string-space").val();
    var stripped_text = $("#stripped-text");
  
    //check if input is null
    if (original_text == "") {
      alert("Enter text first!");
    } else {
  
      //get json from spaces API
      $.getJSON(`php/spaces.php/?input_text=${original_text}`, function (json) {
        console.log("stripepd text: " + json.stripped_text);
        stripped_text.text(json.stripped_text);
      });
    }
  }

//function to fetch validation result
function isValid() {
    let password = $("#password").val();
    var validation_result = $("#validate-result");
  
    //check if input is null
    if (password == "") {
      alert("Enter a password first!");
    } else {
        alert("test");
      //get json from validate API
      $.getJSON(`php/validate.php/?password=${password}`, function (json) {
        console.log("password is: " + json.isValid);
        validation_result.text(json.isValid);
      });
    }
  }