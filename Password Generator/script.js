const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const genBtn = document.querySelector(".genBtn");
const copyIcon = document.getElementById("copy-icon");

//showing slider value
sliderValue.innerText = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.innerText = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*~";

function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars === "" || allChars.length === 0) {
    return genPassword;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}
copyIcon.addEventListener("click", () => {
  if (passBox.value !== "" || passBox.value >= 1) {
    navigator.clipboard
      .writeText(passBox.value)
      .then(() => {
        console.log("password copied");
        copyIcon.title = "Password Copied";
        alert("Password was Copied");
      })
      .catch((err) => {
        console.log("clipboard error:", err);
      });
  }
});
