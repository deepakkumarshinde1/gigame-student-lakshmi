// DOM => logical tree get create when a page get load browser
let h1 = document.querySelector("h1");
let changeTextBtn = document.querySelector("#change-text");
let input = document.querySelector("input");
let listEl = document.querySelector(".list");
// document.querySelectorAll()
//
// h1.style.backgroundColor = "red";

changeTextBtn.addEventListener("click", (event) => {
  h1.innerHTML = input.value;
});

let list = [];

input.addEventListener("keypress", (event) => {
  if (event.code === "Enter" && input.value.trim().length !== 0) {
    list.push(input.value);
    input.value = "";
    printList();
  }
});

function printList() {
  listEl.innerHTML += `<li>${
    list[list.length - 1]
  } <button>Delete</button></li>`;
}
