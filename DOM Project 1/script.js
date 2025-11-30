var btn = document.getElementById("add");
var isStatus = document.getElementById("friend");
var check = 0;

btn.addEventListener("click", () => {
  if (check == 0) {
    isStatus.innerText = "Friends";
    isStatus.style.color = "green";
    btn.innerText = "Remove";
    btn.style.backgroundColor = "red";
    check = 1;
  } else {
    isStatus.innerText = "Stranger";
    isStatus.style.color = "red";
    btn.innerText = "Add Friend";
    btn.style.backgroundColor = "cadetblue";
    check = 0;
  }
});

