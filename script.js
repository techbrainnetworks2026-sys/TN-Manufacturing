const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  mainNav?.classList.toggle('open');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((element) => observer.observe(element));

const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
    }
  });
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 24) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
});
