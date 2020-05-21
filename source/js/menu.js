var buttonTogle = document.getElementById('buttonShow');
var navHidden = document.getElementById('navigation');
var navToggle = document.getElementById('buttonHide');
//  popup js
var popupSucces = document.getElementById('popupSucces');
var popupFail = document.getElementById('popupFail');
var formVisitors = document.getElementById('form-visitors');
var formButton = document.getElementById('visitors-button');
var closeSucces = document.getElementById('succes-close');
var closeFail = document.getElementById('fail-close');

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


//  popup js






formVisitors.addEventListener('submit', function (evt) {
   if (formVisitors.checkValidity() === true) {
    evt.preventDefault();
    popupSucces.classList.add('popup_show-succes');
    closeSucces.focus();
   }
    else if (formVisitors.checkValidity() === false) {
    evt.preventDefault();
    popupFail.classList.add('popup_show-fail');
    closeFail.focus();
  }
});

closeSucces.addEventListener('click', function () {
  if (popupSucces.classList.contains('popup_show-succes')) {
    popupSucces.classList.remove('popup_show-succes');
  }
});

closeFail.addEventListener('click', function () {
  if (popupFail.classList.contains('popup_show-fail')) {
    popupFail.classList.remove('popup_show-fail');
  }
});
