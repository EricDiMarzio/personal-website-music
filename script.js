'use strict';

const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const learnMore = document.getElementById('learn-more');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

const scrollDownEvent = function () {
  console.log('scrolling...');
  learnMore.classList.add('hidden');
};

window.addEventListener('scroll', scrollDownEvent);

//Product Accordion //
const accordion = document.getElementsByClassName('product');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
    console.log('working');
  });
}
