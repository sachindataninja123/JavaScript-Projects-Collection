
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("hamburgerBtn");
  const navLinks = document.querySelector(".nav_links");
  const navItems = document.querySelectorAll(".navItems");

  // Toggle menu on hamburger click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close menu when any link is clicked
  navItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
});


const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header_btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".explore_card", {
  ...scrollRevealOption,
  duration: 1000,
  interval: 200,
});
ScrollReveal().reveal(".job_card", {
  ...scrollRevealOption,
  interval: 500,
});
ScrollReveal().reveal(".offer-card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});