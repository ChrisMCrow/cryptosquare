function encoder(input) {
  lowerCaseString = input.toLowerCase();
  alphaString = lowerCaseString.replace(/\W/g, "");
  return alphaString;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var result = $("#inputStr").val();
    $("#encodedStr").text(encoder(result));
  });
});
