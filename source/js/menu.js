var buttonTogle = document.getElementById('buttonShow');
var navHidden = document.getElementById('navigation');
var navToggle = document.getElementById('buttonHide');

var popupSucces = document.getElementById('popupSucces');
var popupFail = document.getElementById('popupFail');


navHidden.classList.remove('header-nav_nojs');

buttonTogle.addEventListener('click', function() {
  if (navHidden.classList.contains('header-nav_visible')) {
    navHidden.classList.remove('header-nav_visible');
    navHidden.classList.add('header-nav_hidden');
  } else {
    navHidden.classList.remove('header-nav_hidden');
    navHidden.classList.add('header-nav_visible');
  }
});

navToggle.addEventListener('click', function () {
  if (navHidden.classList.contains('header-nav_hidden')) {
    navHidden.classList.remove('header-nav_hidden');
    navHidden.classList.add('header-nav_visible');
  }
});
