function fun(a, b) {
  console.log(a + b);
} // pure function

fun(10, 20);
function fun2(callback) {
  return () => {};
} // HOF

let fun3 = fun2(function () {});

// curring
// function add(a, b) {
//   return a + b;
// }

// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
let add = (a) => (b) => {
  console.log(b);
  return (c) => {
    b = 200;
    return a + b + c;
  };
};

// add(10, 20);
add(10)(20)(30);

function fun5(value) {
  return function (value2) {
    if (value2 !== undefined) {
      fun5(value + value2);
    }
    return value;
  };
}

fun5(10)(20)(30)(40)();

// function composition
let a = (v1, v2) => {
  return v1 + v2;
};

let b = (v1, v2) => {
  return v1 * v2;
};

let comp = (f, g, v1, v2) => {
  return f(g(v1, v2), v2);
};

comp(a, b, 10, 20);
comp(b, a, 10, 20);
