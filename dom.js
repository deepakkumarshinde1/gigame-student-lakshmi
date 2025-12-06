// DOM => logical tree get create when a page get load browser
let h1 = document.querySelector("h1");
let changeTextBtn = document.querySelector("#change-text");
let input = document.querySelector("input");
// document.querySelectorAll()
//
// h1.style.backgroundColor = "red";

changeTextBtn.addEventListener("click", (event) => {
  h1.innerHTML = input.value;
});

input.addEventListener("keypress", (event) => {
  console.log(event);
  if (event.code === "Enter") {
    h1.innerHTML = input.value;
  }
});
