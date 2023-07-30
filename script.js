'use strict';

const nav = document.querySelector('.navbar');
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const navLogo = document.getElementById('nav-logo');
const learnMore = document.getElementById('learn-more');

const header = document.querySelector('.header');
const section1 = document.getElementById('section--1');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  console.log('clicked');
});
//Navbar

const handleHover = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.navbar').querySelectorAll('.nav-link');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// //Scroll links//
navLogo.addEventListener('click', function (e) {
  header.scrollIntoView({ behavior: 'smooth' });
});
learnMore.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.navbar-links').addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    e.preventDefault();
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  entry.target.classList.remove('section--hidden');
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.25,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
