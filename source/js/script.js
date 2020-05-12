let buttonTogle = document.getElementById('buttonShow');
let navHidden = document.getElementById('navigation');
let navToggle = document.getElementById('buttonHide');


navHidden.classList.remove('header-nav_nojs');

buttonTogle.addEventListener('click', function() {
  if (navHidden.classList.contains('header-nav')) {
    navHidden.classList.remove('header-nav');
    navHidden.classList.add('header-nav_hidden');
  } else {
    navHidden.classList.remove('header-nav_hidden');
    navHidden.classList.add('header-nav');
  }
});

navToggle.addEventListener('click', function () {
  if (navHidden.classList.contains('header-nav_hidden')) {
    navHidden.classList.remove('header-nav_hidden');
    navHidden.classList.add('header-nav');
  }
});
