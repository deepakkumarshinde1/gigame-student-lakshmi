// common function
function add() {}

// function expression
let fun1 = function (a, b, callback) {
  let sum = a + b;
  callback(sum);
};
//fun1();
let fun2 = () => {};
// function arrow

// function callback
fun1(10, 20, function (result) {
  console.log("i am a callback");
  console.log(result);
});

fun1(100, 200, (result) => {
  console.log();
});

// IIFE

//let button = document.querySelector("button");
//button.addEventListener("click", function () {});

//button.addEventListener("dblclick", function () {});

let array = [10, 20, 30, 30, 30, 30];
let newArray = array.filter(function (value) {
  return value === 30;
});
console.log(newArray);

(function () {
  console.log("collecting data from server");
})();

(() => {
  console.log("collecting data from server");
})();
