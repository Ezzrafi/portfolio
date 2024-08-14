
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');


document.addEventListener('DOMContentLoaded', () => {
  
  window.addEventListener('scroll', handleScroll);

  
  if (menuIcon) {
    menuIcon.addEventListener('click', handleMenuIconClick);
  }
});


function handleScroll() {
  const top = window.scrollY;

  sections.forEach((section) => {
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {
      
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });

    
      const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}


function handleMenuIconClick() {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}