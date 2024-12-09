const inputEl = document.querySelector("#input");
const taskListEl = document.querySelector("#todoList");

const addTodo = () => {
  const inputvalue = inputEl.value.trim(); //for no space at beginning and end pe

  if (!inputvalue) {
    alert("Please add a Task before clicking the add button mugiwara");
    return;
  }

  const newTaskDiv = document.createElement("div");
  const taskTextSpan = document.createElement("span");
  const deleteButton = document.createElement("button");

  taskTextSpan.textContent = inputvalue;
  deleteButton.textContent = "Delete Task";

  // for styling thing
  newTaskDiv.classList.add("task-item");
  taskTextSpan.classList.add("task-text");
  deleteButton.classList.add("delete-btn");

  newTaskDiv.appendChild(taskTextSpan);
  newTaskDiv.appendChild(deleteButton);
  taskListEl.appendChild(newTaskDiv);

  inputEl.value = "";
  // console.log(inputvalue);
};

taskListEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const taskRemove = event.target.parentElement;
    taskListEl.removeChild(taskRemove);
  }
});
