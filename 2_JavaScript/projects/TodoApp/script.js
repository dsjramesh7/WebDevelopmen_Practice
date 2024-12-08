// console.log(document); // given by browser, no nodejs

const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const taskEl = document.querySelectorAll("h2");
const taskListEl = document.querySelector("#taskList");
// console.log(inputEl);
let counterId = 0;
const addTodo = () => {
  const value = inputEl.value;
  const task = document.createElement("div");
  task.setAttribute("id", counterId);
  task.innerHTML = `<p>${value}</p> <button onclick="deleteTodo(${counterId})">delete</button>`;
  counterId++;
  taskListEl.appendChild(task);
  inputEl.value = "";
};

const deleteTodo = (index) => {
  const element = document.getElementById(index);
  return taskListEl.removeChild(element);
};

// let ctr = 0;
// function callbackFun() {
//   taskEl[1].innerHTML = ctr;
//   ctr = ctr + 1;
// }
// // setInterval(callbackFun, 1000);
