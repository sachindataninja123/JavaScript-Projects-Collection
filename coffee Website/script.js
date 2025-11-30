

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-Open-Button");
  const navLinks = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nav-item");

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


