// variables
// scoping
//console.log(number);

// if (true) {
//   var number = 20;
// }

function nameOfFunction() {
  var number = 10;

  if (true) {
  }
  return number;
}

nameOfFunction();
console.log(number);

function p() {
  function r() {
    function q() {}
  }
}
