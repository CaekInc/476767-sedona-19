var buttonTogle = document.getElementById('buttonShow');
var navHidden = document.getElementById('navigation');
// var navToggle = document.getElementById('buttonHide');
buttonTogle.classList.remove('page-header__toggle_nojs');
navHidden.classList.remove('header-nav_nojs');



buttonTogle.addEventListener('click', function() {
  if (navHidden.classList.contains('header-nav_visible')) {
    navHidden.classList.remove('header-nav_visible');
    navHidden.classList.add('header-nav_hidden');
    buttonTogle.classList.remove('page-header__toggle');
    buttonTogle.innerHTML = '';
    buttonTogle.innerHTML = ' <svg width="22" height="22"><use xlink:href="img/sprite.svg#icon-cross"></use></svg> ';
    buttonTogle.classList.add('page-header__toggle_hide');

  } else {
    navHidden.classList.remove('header-nav_hidden');
    navHidden.classList.add('header-nav_visible');
    buttonTogle.classList.remove('page-header__toggle_hide');
    buttonTogle.innerHTML = '';
    buttonTogle.innerHTML = '<svg width="23" height="22"><use xlink:href="img/sprite.svg#icon-menu"></use></svg>';
    buttonTogle.classList.add('page-header__toggle');

  }
});

// navToggle.addEventListener('click', function () {
//   if (navHidden.classList.contains('header-nav_hidden')) {
//     navHidden.classList.remove('header-nav_hidden');
//     navHidden.classList.add('header-nav_visible');
//     buttonTogle.classList.remove('page-header__toggle_hide');
//     buttonTogle.classList.add('page-header__toggle');
//   }
// });
