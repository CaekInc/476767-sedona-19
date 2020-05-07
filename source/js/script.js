let buttonTogle = document.querySelector('.page-header__toggle');
let navHidden = document.querySelector('.header-nav_hidden');
let navToggle = document.querySelector('.header-nav__toggle');


navHidden.classList.remove('header-nav_nojs');

buttonTogle.addEventListener('click', function() {
  if (navHidden.classList.contains('header-nav_hidden')) {
    navHidden.classList.remove('header-nav_hidden');
    navHidden.classList.add('header-nav');
  } else {
    navHidden.classList.remove('header-nav');
    navHidden.classList.add('header-nav_hidden');
  }
});

navToggle.addEventListener('click', function () {
  if (navHidden.classList.contains('header-nav')) {
    navHidden.classList.remove('header-nav');
    navHidden.classList.add('header-nav_hidden');
  }
});
