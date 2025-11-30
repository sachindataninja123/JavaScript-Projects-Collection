var elem = document.querySelectorAll(".elem");

elem.forEach((val) => {
  val.addEventListener("mouseenter", () => {
    // console.log(val.childNodes[3]);
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove",(e) =>{
    val.childNodes[3].style.top = e.clientY + "px";
    val.childNodes[3].style.left = e.clientX + "px";
  })
// val.addEventListener("mousemove", (e) => {
//   const rect = val.getBoundingClientRect(); // get position of elem relative to viewport
//   const x = e.clientX - rect.left;
//   const y = e.clientY - rect.top;

//   val.childNodes[3].style.top = y + "px";
//   val.childNodes[3].style.left = x + "px";
// });

});
