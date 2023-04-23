let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store the tasks
let arrayOfTasks = [];

//Add Task

submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add task to array of tasks
    input.value = ""; // Empty Input Field
  }
};

function addTaskToArray(taskText) {
  //Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  //push tasks to array of tasks
  arrayOfTasks.push(task);
  // Add Tasks to page
  addElementsToPageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  //Empty Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array of tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    //Append Button to main div
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    // Add task Div to tasks container

  });
}
