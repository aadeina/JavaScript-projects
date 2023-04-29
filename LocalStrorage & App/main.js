//Cash Vars

const form = document.querySelector("form");
const lul = document.querySelector("ul");
const input = document.querySelector("item");
const ClearButton = document.querySelector("button");
const items = JSON.parse(localStorage.getItem("tasks"))
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
const data = JSON.parse(localStorage.getItem("tasks"))
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

//Create li and append to ul

const createli = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
};

// oop through the data

data.map((item) => {
  createli(item);
});

//SubmitFormEvnt

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // add to lacalStorage
  items.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(items));

  // add to ul
  createli(input.value);
  input.value = "";
});

//ClearData

ClearButton.addEventListener("submit", function () {
  localStorage.clear();
  ul.innerHTML = "";
});
