$("document").ready(function () {

    $( "#calculate" ).click(myFunction);

});

function calculateResult() {
  
  let x = $("#number-1").val();
  let y = $("#number-2").val();
  var calcResult = $("#calculate-result");
  $.getJSON(`my_api.php/?x=${x}&y=${y}`, function (json) {
    console.log(json.result);
    calcResult.text(json.result);
  });
}
