let inputTask = document.getElementById("inputField");
let addTaskBtn = document.querySelector("#submitBtn");
let taskContainer = document.querySelector(".taskList");

function addTask() {
  if (inputTask.value === "") {
    alert("you have to write something!");
    return;
  } else {
    let li = document.createElement("li");
    li.innerText = inputTask.value;
    taskContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerText = "\u00d7";
    li.appendChild(span);
  }
  inputTask.value = "";
  saveData();
}

taskContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.style.display = "none";
    saveData();
  }
});

function saveData() {
    localStorage.setItem("data", taskContainer.innerHTML);
}
function showTask() {
    taskContainer.innerHTML = localStorage.getItem("data");
}
showTask() ;

addTaskBtn.addEventListener("click", addTask);
