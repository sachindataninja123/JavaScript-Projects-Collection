// const display = document.getElementById("input-box");
// let buttons = document.querySelectorAll("button");

// let string = "";
// document.querySelectorAll("button").forEach((button) => {
//   button.addEventListener("click", (e) => {
//    //  console.log(e.target);
//     if (e.target.innerText === "=") {
//       calculate();
//     } else if(e.target.innerText === "AC"){
//       clearDisplay();
//     } else if(e.target.innerText === "DEL"){
//       deleteLast();
//     } else {
//       handleInput(e.target.innerText);
//     }
//   });
// });

// function calculate() {
//    display.value = eval(display.value);
// }
// function clearDisplay(){
//    display.value = "";
// }
// function deleteLast(){
//    display.value = display.value.slice(0, -1);
// }
// function handleInput(value){
//    display.value += value;
// }

const display = document.getElementById("input-box");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      calculate();
    } else if (e.target.innerText === "AC") {
      clearDisplay();
    } else if (e.target.innerText === "DEL") {
      deleteLast();
    } else {
      handleInput(e.target.innerText);
    }
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    handleInput(key);
   } else if (key === "Enter") {
    calculate();
   } else if (key === "Backspace") {
    deleteLast();
   } else if (key === "Delete" || key === "Escape") {
    clearDisplay();
   }
});
function calculate() {
  display.value = eval(display.value);
}
function clearDisplay() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function handleInput(value) {
  display.value += value;
}
