var buttonTogle = document.getElementById('buttonShow');
var navHidden = document.getElementById('navigation');
buttonTogle.classList.remove('page-header__toggle_nojs');
navHidden.classList.remove('header-nav_nojs');

buttonTogle.addEventListener('click', function() {
  if (navHidden.classList.contains('header-nav_visible')) {
    navHidden.classList.remove('header-nav_visible');
    navHidden.classList.add('header-nav_hidden');
    buttonTogle.classList.remove('page-header__toggle');
    buttonTogle.classList.add('page-header__toggle_hide');

  } else {
    navHidden.classList.remove('header-nav_hidden');
    navHidden.classList.add('header-nav_visible');
    buttonTogle.classList.remove('page-header__toggle_hide');
    buttonTogle.classList.add('page-header__toggle');

  }
});
