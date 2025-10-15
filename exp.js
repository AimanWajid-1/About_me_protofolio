document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  // About section toggle
  const aboutBtn = document.getElementById('about-toggle');
  const aboutSection = document.getElementById('about-section');

  aboutBtn.addEventListener('click', function () {
    aboutSection.classList.toggle('show');
  });
});



