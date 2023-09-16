import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

document.addEventListener("DOMContentLoaded", function () {
  function toggleMenu() {
    var navbarMenu = document.getElementById("navbarMenu");
    var openIcon = document.getElementById("open");
    var closedIcon = document.getElementById("closed");

    navbarMenu.classList.toggle("open");
    openIcon.style.display = openIcon.style.display === "none" ? "block" : "none";
    closedIcon.style.display = closedIcon.style.display === "none" ? "block" : "none";
  }

  // You can also add event listeners here if needed.

});

document.addEventListener('scroll', () => {
  const mainProfile = document.querySelector('.main-profile');
  const experience = document.querySelector('.experience');
  const skills = document.querySelector('.skills');

  // Calculate the distance of each section from the top of the viewport
  const mainProfileDistance = mainProfile.getBoundingClientRect().top;
  const experienceDistance = experience.getBoundingClientRect().top;

  // Calculate the window height
  const windowHeight = window.innerHeight;

  // Calculate the middle point of the scroll animation
  const middlePoint = windowHeight / 2;

  // Calculate opacity based on scroll position
  let mainProfileOpacity = 0;
  let experienceOpacity = 0;

  if (mainProfileDistance < middlePoint) {
    mainProfileOpacity = 1 - (mainProfileDistance / middlePoint);
  }

  if (experienceDistance < middlePoint) {
    experienceOpacity = 1 - (experienceDistance / middlePoint);
  }


  // Apply opacity to the sections
  mainProfile.style.opacity = mainProfileOpacity;
  experience.style.opacity = experienceOpacity;
});
