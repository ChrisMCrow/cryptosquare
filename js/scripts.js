function encoder(input) {
  var lowerCaseString = input.toLowerCase();
  var alphaString = lowerCaseString.replace(/\W/g, "");
    console.log("the new string is " + alphaString);
  var rowNumber = Math.ceil(Math.sqrt(alphaString.length));
    console.log("the row number is " + rowNumber);
  var rowOne = alphaString.split("", rowNumber);
    console.log("rowOne is " + rowOne);
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var result = $("#inputStr").val();
    $("#encodedStr").text(encoder(result));
  });
});
