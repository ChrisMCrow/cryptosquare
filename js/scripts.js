function encoder(input) {
  var lowerCaseString = input.toLowerCase();
  var alphaString = lowerCaseString.replace(/\W/g, "");
  console.log (alphaString.length);
  var rowNumber = Math.ceil(Math.sqrt(alphaString.length));
  console.log(rowNumber);
  var alphaArray = alphaString.split("");
  var codedArray = []

  for (loop = 0; loop < rowNumber; loop++) {
    for (var i = 0; i < alphaArray.length; i += rowNumber) {
      codedArray.push(alphaArray[i + loop])
    }
  }
  var codedString = codedArray.join("");
  var result = codedString.replace(/(\w{5})/g, "$1 ")
  return result
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var result = $("#inputStr").val();
    $("#encodedStr").text(encoder(result));
  });
});
