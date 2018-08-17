function encoder(input) {
  var lowerCaseString = input.toLowerCase();
  var alphaString = lowerCaseString.replace(/\W/g, "");
  console.log (alphaString.length);
  var row = Math.ceil(Math.sqrt(alphaString.length));
  if (Math.sqrt(alphaString.length) < row) {
    column = row - 1
  } else {
    column = row
  }
  console.log(row);
  console.log(column);
  var alphaArray = alphaString.split("");
  var codedArray = []

  for (loop = 0; loop < column; loop++) {
    for (var i = 0; i < alphaArray.length; i += column) {
      codedArray.push(alphaArray[i + loop])
    }
  }
  console.log(codedArray);
  var codedString = codedArray.join("");
  var result = codedString.replace(/(\w{5})/g, "$1 ");
  console.log(result)
  return result;
}


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var result = $("#inputStr").val();
    $("#encodedStr").text(encoder(result));
  });
});
