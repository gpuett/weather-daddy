$(document).ready(function() {
  $("#daddy").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var cityInput = $("input#city").val();
    var weatherInput = $("input:radio[name=weather]:checked").val();
    $(".name").text(nameInput);
    $(".city").text(cityInput);
    $(".weather").text(weatherInput);
    $("#output").show();
  });
});
