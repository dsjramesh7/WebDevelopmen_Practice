// The DOM abstracts the structure of the document into a tree of objects, allowing scripts to manipulate the content and structure dynamically. This abstraction enables more complex interactions and functionalities beyond just static HTML.

const divEl = document.createElement("div");
divEl.innerHTML = "I am visble yk in light too";

const parentEl = document.querySelector("body");
parentEl.appendChild(divEl);

const H1Ele = document.getElementById("heading");

function deleteIt() {
  return parentEl.removeChild(H1Ele);
}
