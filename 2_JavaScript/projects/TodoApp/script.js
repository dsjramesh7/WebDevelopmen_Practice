// console.log(document); // given by browser, no nodejs

const inputEl = document.querySelector("input");
const btnEl = document.querySelector("button");
const taskEl = document.querySelectorAll("h2");
const taskListEl = document.querySelector("#taskList");
// console.log(inputEl);
let counterId = 0;
const addTodo = () => {
  const value = inputEl.value;
  const taskdiv = document.createElement("div");
  taskdiv.setAttribute("id", counterId);
  // taskdiv.innerHTML = `<p>${value}</p> <button onclick="deleteTodo(${counterId})">delete</button>`;
  const spanEl = document.createElement("span");
  const btnEl = document.createElement("button");
  spanEl.innerHTML = value;
  btnEl.innerHTML = "DeleteTask";

  taskdiv.appendChild(spanEl);
  taskdiv.appendChild(btnEl);
  taskListEl.appendChild(taskdiv);
  counterId++;
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
