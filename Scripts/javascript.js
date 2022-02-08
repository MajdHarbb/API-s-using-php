x = 5;
y=3;



  $('document').ready(function()
{

    $.getJSON("my_api.php/?x=2&y=5", function(json){
    alert("JSON Data: " + json.result);

});
}) 