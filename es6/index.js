// destructing
let array = [10, 20, 30, 40];
// let n1 = array[0];
let [n1, n2, ...n3] = array;
console.log(n1, n2, n3);

let student = {
  sName: "Deepak",
  location: "Nashik",
};

let { sName, location: _location } = student;
// let _location = student.location;
console.log(_location);

// spread opr
let a1 = [10, 20];
let a2 = [100, ...a1, 200];
let s1 = {
  name: "deepak",
};
let l1 = {
  city: "Nashik",
  name: "abc",
};
let studentDetails = {
  ...s1,
  ...l1,
};
console.log(studentDetails);

// rest parameter
function data(a, b, c, ...list) {
  console.log(list);
}

data(10, 20, 30, 40, 50, 60);

let text = `${s1.name} lives in ${l1.city}`;
console.log(text);

// object literals
let city = "Nashik";
let list = {
  city,
};

console.log(list);

// set
let _list = [10, 20, 20, 30, 30, 40, 20, 50];
let set = new Set(_list);
// console.log(set.forEach);
// map
let map = new Map();
map.set("name", "deepak");
map.set(true, "yes");
console.log(map.has("name"));
// symbols
let sName1 = Symbol.for("name");
let tName1 = Symbol.for("name");

console.log(sName1 === tName1);
let student1 = {
  [sName1]: "Deepak",
  location: "nashik",
  sName1: "Sam",
};

for (const key in student1) {
  console.log(key);
}

let array12 = [10, 20, 30];
let iterator = array12[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

let ownIterator = {
  array: [],
  [Symbol.iterator]() {
    let index = 0;
    let array = this.array;
    return {
      next() {
        if (index === array.length) {
          index = 0;
        }
        let obj = { value: array[index], done: false };
        index++;
        return obj;
      },
      pre() {
        index--;
        if (index === -1) {
          index = array.length - 1;
        }
        let obj = { value: array[index], done: false };
        return obj;
      },
    };
  },
};
console.clear();
ownIterator.array = [10, 20, 30, 40];
let _iterator = ownIterator[Symbol.iterator]();
console.log(_iterator.next());
console.log(_iterator.next());
console.log(_iterator.pre());
console.log(_iterator.next());
console.log(_iterator.next());
