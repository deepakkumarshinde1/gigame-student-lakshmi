function Animal(name) {
  this.name = name;
}

Animal.prototype.running = function () {
  console.log(this.name, " is running");
};

function Dog(name) {
  this.name = name;
}
// inheritance
Dog.prototype = Object.create(Animal.prototype);

let dog = new Dog("tommy");
dog.running();

String.prototype.getMoreData = function () {
  let string = this.toString();

  return {
    text: string,
    length: string.length,
    uc: string.toUpperCase(),
    lc: string.toLowerCase(),
  };
};
let text = "Hello";
console.log(text.getMoreData());
let number = 10;

// console.log(text.__proto__ === String.prototype);
