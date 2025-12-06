console.log("hello");

let t1 = setTimeout(() => {
  console.log("namaste-1"); // only once but after 1s
}, 0);
let t2 = setTimeout(() => {
  console.log("namaste-2"); // only once but after 1s
}, 0);
let t3 = setTimeout(() => {
  console.log("namaste-3"); // only once but after 1s
}, 0);

setInterval(() => {
  console.log("counter");
}, 1000); // macro task
console.log(t1, t2, t3);

div(10, 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("hi");

// promises => micro task
async function div(a, b) {
  if (b === 0) {
    return Promise.reject(`Can't  div a number by zero`);
  } else {
    setTimeout(() => {
      console.log("promise timeout method");
    }, 0);
    return Promise.resolve(a / b);
  }
}
// pending
// ok => resolve => .then()
// issues => rejected => .catch()

// async await => next session

// api call => data from server
async function getUserData(cb) {
  try {
    let url = `https://jsonplaceholder.typicode.com/users`;
    let response = await fetch(url, {
      method: "GET",
    });
    let data = await response.json();
    cb(true, data);
  } catch (error) {
    cb(false, error);
  }
}

getUserData((status, relay) => {});
