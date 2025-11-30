var cursor = document.querySelector(".cursor");
var blurCursor = document.querySelector(".blur-cursor");

document.addEventListener("mousemove", (e) => {
  // console.log(e.clientX , e.clientY);
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  blurCursor.style.left = e.clientX + "px";
  blurCursor.style.top = e.clientY + "px";
});


gsap.registerPlugin(ScrollTrigger);
gsap.to("nav", {
  backgroundColor: "#000",
  height: "80px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to(".main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from(".about-us img , .about-content", {
  y:50,
  opacity :0,
  duration :5,
  scrollTrigger : {
    trigger : ".about-us",
    scroller : "body",
    markers :true,
    start : "top 60%",
    end : "top 55%",
    scrub :1,
  }
})