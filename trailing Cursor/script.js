let smallCursor = document.querySelector(".smallCursor");
let shadowCursor = document.querySelector(".shadowCursor");

let mouseX;
let mouseY;
let animationId = null;
let timer = null;

document.addEventListener("mousemove", function (eventObj) {
  //    console.log(eventObj);
  mouseX = eventObj.clientX;
  mouseY = eventObj.clientY;

  smallCursor.style.left = mouseX + "px";
  smallCursor.style.top = mouseY + "px";
  // console.log(eventObj.clientX,  eventObj.clientY);

  if(!animationId) {
    animatedShadowCursor();
  }

  clearTimeout(timer);
  timer =setTimeout(() => {
    cancelAnimationFrame(animationId);
  },2000);
});

function animatedShadowCursor() {
  //   console.log(mouseX, mouseY);

  let currentX = parseFloat(shadowCursor.style.left) || 0; //client X
  let currentY = parseFloat(shadowCursor.style.top) || 0; // Client Y

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  shadowCursor.style.left = currentX + distanceX * 0.1 + "px";
  shadowCursor.style.top = currentY + distanceY * 0.1 + "px";


  console.log(distanceX, distanceY);

animationId =  requestAnimationFrame(animatedShadowCursor);
 
}
