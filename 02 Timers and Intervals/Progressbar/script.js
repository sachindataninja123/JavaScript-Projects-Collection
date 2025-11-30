let count = 0;
let seconds = 5;
let progress = document.getElementById("progress-bar");

let percentText = document.getElementById("percent");

let interval = setInterval(() => {
  if (count <= 99) {
    count++;
    progress.style.width = `${count}%`;
    percentText.textContent = `${count}%`;
  } else {
    document.getElementById("download").textContent = "Download !";
    clearInterval(interval);
  }
}, (seconds * 1000) / 100);


//to hide all container by settimeout function
// setTimeout(() => {
//     document.querySelector(".container").style.display = "none";
// }, 3000);