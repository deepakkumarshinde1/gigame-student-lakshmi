function funName() {
  // code
} // function definition

funName(); // function call

function add(a = 0, b = 0) {
  let sum = a + b;
  console.log(sum);
  return sum;
}

let r1 = add(10, 20);
let r2 = add(2, 2);

let r3 = add("deepak", "kumar");
add();

function parent() {
  // code
  let text = 1; // lexical scope variable

  return function () {
    // console.log(text);
    // console.log(text++);
    function child_child() {
      console.log(text++);
    }
    child_child();
  }; // Closure function
}

console.clear();
let defFun = parent();
defFun();
defFun();
defFun();
defFun();

let defFun1 = parent();
defFun1();
defFun1();
defFun1();
defFun1();
defFun1();

function p(count = 0) {
  let counter = count;
  return {
    inc() {
      counter++;
      console.log(counter);
    },
    dec() {
      counter--;
      console.log(counter);
    },
    reset(value = 0) {
      counter = value;
    },
  };
}
console.clear();
let obj = p();
obj.inc();
obj.inc();
obj.inc();
obj.dec();
obj.dec();
obj.dec();
obj.reset(100);
obj.dec();
obj.inc();
obj.inc();
obj.inc();
obj.inc();

// dom
// event loop
// async javascript and api service
