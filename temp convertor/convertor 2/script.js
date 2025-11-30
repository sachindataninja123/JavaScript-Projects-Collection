const celcius = document.getElementById("c");
const fahrenheit = document.getElementById("f");
const kelvin = document.getElementById("k");

let celciusValue = 0;
let fahrenheitValue = 32;
let kelvinValue = 273;

function render() {
  if (celciusValue < -273) {
    alert("You are out of bounds");
    return;
  }
  celcius.value = celciusValue;
  fahrenheit.value = fahrenheitValue;
  kelvin.value = kelvinValue;
}

celcius.addEventListener("input", (e) => {
  if (e.target.value === "") {
    return;
  }
  celciusValue = Number(e.target.value);
  fahrenheitValue = (celciusValue * 9) / 5 + 32;
  kelvinValue = celciusValue + 273;
  render();
});

fahrenheit.addEventListener("input", (e) => {
  if (e.target.value === "") {
    return;
  }
  fahrenheitValue = Number(e.target.value);
  celciusValue = ((fahrenheitValue - 32) * 5) / 9;
  kelvinValue = celciusValue + 273;
  render();
});

kelvin.addEventListener("input", (e) => {
  kelvinValue = Number(e.target.value);
  celciusValue = kelvinValue - 273;
  fahrenheitValue = (celciusValue * 9) / 5 + 32;
  render();
});

render();
