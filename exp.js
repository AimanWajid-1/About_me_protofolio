
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
 
  const aboutBtn = document.querySelector('.search-bar button'); 
  const aboutSection = document.getElementById('about-section');

  aboutBtn.addEventListener('click', () => {
    aboutSection.classList.toggle('hidden');
  });



