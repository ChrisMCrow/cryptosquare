function encoder(input) {
  var lowerCaseString = input.toLowerCase();
  var alphaString = lowerCaseString.replace(/\W/g, "");
  console.log(alphaString.length);
  var rowNumber = Math.floor(Math.sqrt(alphaString.length));
  var alphaArray = alphaString.split("");
  var codedArray = []
  console.log(rowNumber)

  for (loop = 0; loop < rowNumber; loop++) {
    for (var i = 0; i < alphaArray.length; i += rowNumber) {
      codedArray.push(alphaArray[i + loop])
    }
  }
  for (i = 5; i < codedArray.length; i += 6) {
    codedArray.splice(i, 0, " ");
  }

  var result = codedArray.join("");
  return result;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var result = $("#inputStr").val();
    $("#encodedStr").text(encoder(result));
  });
});
