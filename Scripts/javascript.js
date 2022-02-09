$("document").ready(function () {

    $( "#calculate" ).click(calculateResult);

});

function calculateResult() {
  
  let x = $("#number-1").val();
  let y = $("#number-2").val();
  var calcResult = $("#calculate-result");
  $.getJSON(`php/calculator.php/?x=${x}&y=${y}`, function (json) {
    console.log("sum: "+json.result);
    calcResult.text(json.result);
  });
}
