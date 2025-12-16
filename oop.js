class Animal {
  constructor(name) {
    this.name = name;
  }
  running() {
    console.log(`${this.name} is running`);
  }
}

class Dog extends Animal {
  #age = 20;
  constructor(name) {
    super(name);
  }
  running() {
    super.running();
    console.log("hey hi");
  }

  get age() {
    return this.#age;
  }

  //   set age(value) {
  //     this.#age = value;
  //   }
  running(text) {
    console.log(`${this.#age}`);
  }
  static text = "hi";
  static hello() {
    console.log(this.text);
  }
}

let dog = new Dog("Tommy");
dog.age = 30;
dog.running("Hello");
// console.log(dog.age);
// Date.now()
Dog.hello();
