window.addEventListener("mousemove", (e) => {
  var rect = document.querySelector(".rect");

  var xVal = gsap.utils.mapRange(
    0,
    window.innerWidth,
    100 + rect.getBoundingClientRect().width / 2,
    window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
    e.clientX
  );
  gsap.to(".rect", {
    left: xVal,
    ease: "power3",
  });
});
