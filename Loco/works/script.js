var tl = gsap.timeline();

tl.to(".yellow", {
  top: "-100%",
  delay: 0.5,
  duration: 0.6,
  ease: "expo.out",
});

tl.to(".loader video", {
  top: "-100%",
  delay: 0.5,
  duration: 0.9,
  ease: "expo.out",
});
tl.to(".loader", {
  display : "none",
});
