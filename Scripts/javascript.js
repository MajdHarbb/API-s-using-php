$("document").ready(function () {
  var btn = document.getElementById("calculate");

  btn.addEventListener("click", myFunction);
});

function myFunction() {
  var x = document.getElementById("number-1").value;
  var y = document.getElementById("number-2").value;
  $.getJSON(`my_api.php/?x=${x}&y=${y}`, function (json) {
    console.log(json.result);
  });
}
