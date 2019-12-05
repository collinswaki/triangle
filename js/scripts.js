//var add = function(number1, number2) {
//  return number1 + number2;
//};


$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("#input1").val());
    var side2 = parseInt($("#input2").val());
    var side3 = parseInt($("#input3").val());
    var result;
    console.log("side 1: " + side1);
    console.log("side 2: " + side2);
    console.log("side 3: " + side3);
    if (side1 === side2 && side1 === side3) {
      alert("equalateral")
    } else if (side1 != side3) {
        var side12 = side1 + side2;
        if (side12 <= side3) {
          alert("not a triangle");
        } else {
          alert("isosceles");
        }
      }

      //result = add(number1, number2);
    
  //  $("#output").text(result);
  });
});
