var animCursor = document.querySelector(".cursor");


document.addEventListener("mousemove", function (e) {
//   console.log(e.clientX, e.clientY);

  animCursor.style.top = e.clientY + "px";
  animCursor.style.left = e.clientX + "px";
});
