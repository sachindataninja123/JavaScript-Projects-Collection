let inputField = document.querySelector("#inputfield");
let addTaskBtn = document.querySelector(".addtaskbtn");
let taskList = document.querySelector(".task-list");

function addUserTask() {
  // console.log("click");
  let taskText = inputField.value.trim();

  if (taskText == "") {
    alert("please enter a task");
    return;
  }

  let li = document.createElement("li");
  li.innerText = taskText;

  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

li.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  inputField.value = " ";
}

addTaskBtn.addEventListener("click", addUserTask);
