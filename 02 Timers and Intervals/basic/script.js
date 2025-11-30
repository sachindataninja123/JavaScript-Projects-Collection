// setTimeout(() => {
// console.log("hello")
// },2000);

// setInterval(() =>{
//     console.log("world")
// },2000)

let count = 10;

let interval = setInterval(() => {
  if (count >= 1) {
    console.log(count);
    count--;
  } else {
    clearInterval(count);
  }
}, 1000);
