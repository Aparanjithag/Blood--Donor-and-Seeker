// JavaScript for responsive navigation menu
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav");

    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Close the menu if the user clicks outside on small screens
    document.addEventListener("click", (event) => {
        if (!navMenu.contains(event.target) && !navToggle.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
    // Reset the animation for a smooth loop
  const carousel = document.getElementById('carousel');
  carousel.addEventListener('animationend', () => {
    carousel.style.animation = 'none';
    carousel.offsetHeight; /* trigger reflow */
    carousel.style.animation = 'slide 55s infinite';
  });
  require('dotenv').config();
const apiKey = process.env.GOOGLE_MAPS_API_KEY;


});


