let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let drawMsg = document.querySelector("#msg2");
let newGameBtn2 = document.querySelector("#new-game");
let msgContainer2 = document.querySelector(".msg-container");

let turnO = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
  if (checkWinner()) {} 
  else if (checkDraw()) {
  showDraw();
}

  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
    drawMsg.innerHTML = `Draw! Lets Try again.`
     msgContainer2.classList.remove("hide");
  disableBoxes();
}

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    // console.log(patterns);
    // console.log(patterns[0],patterns[1], patterns[2]);
    //   console.log(boxes[patterns[0]], boxes[patterns[1]],boxes[patterns[2]]);

    let pos1Val = boxes[patterns[0]].innerText;
    let pos2Val = boxes[patterns[1]].innerText;
    let pos3Val = boxes[patterns[2]].innerText;
    // console.log(pos1Val,pos2Val,pos3Val);

    if (pos1Val != "" && pos1Val != "" && pos1Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
function checkDraw() {
  // Get all boxes/cells
  for (let box of boxes) {
    if (box.innerText === "") {
      return false; // Not a draw, still empty cells
    }
  }

  // No winner + all cells filled = draw
  return true;
}



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
