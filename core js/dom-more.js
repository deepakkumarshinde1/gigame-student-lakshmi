let div = document.querySelector("div");
let button = document.querySelector(".btn");

div.addEventListener("click", (event) => {
  console.log("div is clicked");
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  event.preventDefault();
  console.log("button is clicked stopPropagation");
});
