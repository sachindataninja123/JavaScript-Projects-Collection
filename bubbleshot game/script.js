var timer = 60;
var score = 0;
var randomHitVal = 0;


function makeBubble() {
  var clutter = "";

  for (let i = 1; i <= 207; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNum}</div>`;
  }

  document.querySelector(".panel_bottom").innerHTML = clutter;
}

function increaseScore() {
  score += 10;
  document.getElementById("scoreval").textContent = score;
}

function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.getElementById("pbtm").innerHTML = `<h1>Game Over</h1>`;
      let button = document.createElement("button");
      button.textContent = "Play Again";

      button.addEventListener("click", () => {
        timer = 60;
        score = 0;
        makeBubble();
        runTimer();
        getHitValue();
      });

      document.getElementById("pbtm").appendChild(button);
    }
  }, 1000);
}

const getHitValue = () => {
  randomHitVal = Math.floor(Math.random() * 10);

  document.getElementById("hitVal").textContent = randomHitVal;
};

document.getElementById("pbtm").addEventListener("click", (e) => {
  let clickNum = Number(e.target.innerText);
  // console.log(typeof(clickNum));

  if (randomHitVal === clickNum) {
    increaseScore();
    makeBubble();
    getHitValue();
  }

});

getHitValue();
makeBubble();
runTimer();
