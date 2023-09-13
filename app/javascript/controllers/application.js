import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

document.addEventListener('scroll', () => {
  const mainProfile = document.querySelector('.main-profile');
  const experience = document.querySelector('.experience');
  const skills = document.querySelector('.skills');

  // Calculate the distance of each section from the top of the viewport
  const mainProfileDistance = mainProfile.getBoundingClientRect().top;
  const experienceDistance = experience.getBoundingClientRect().top;
  const skillsDistance = skills.getBoundingClientRect().top;

  // Calculate the window height
  const windowHeight = window.innerHeight;

  // Calculate the middle point of the scroll animation
  const middlePoint = windowHeight / 2;

  // Calculate opacity based on scroll position
  let mainProfileOpacity = 0;
  let experienceOpacity = 0;
  let skillsOpacity = 0;

  if (mainProfileDistance < middlePoint) {
    mainProfileOpacity = 1 - (mainProfileDistance / middlePoint);
  }

  if (experienceDistance < middlePoint) {
    experienceOpacity = 1 - (experienceDistance / middlePoint);
  }
  if (skillsDistance < middlePoint) {
    skillsOpacity = 1 - (skillsDistance / middlePoint);
  }

  // Apply opacity to the sections
  mainProfile.style.opacity = mainProfileOpacity;
  experience.style.opacity = experienceOpacity;
  skills.style.opacity = skillsOpacity;
});
