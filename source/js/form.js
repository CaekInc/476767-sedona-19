var popupSucces = document.getElementById('popupSucces');
var popupFail = document.getElementById('popupFail');
var formVisitors = document.getElementById('form-visitors');
var formButton = document.getElementById('visitors-button');
var closeSucces = document.getElementById('succes-close');
var closeFail = document.getElementById('fail-close');
var userName = document.getElementById('user-name');
var userSurname = document.getElementById('user-surname');
var userTelephone = document.getElementById('user-telephone');
var userEmail = document.getElementById('user-email');



formVisitors.addEventListener('submit', function(evt) {
  evt.preventDefault();
  if ((!userName.value || !userSurname.value || !userTelephone.value || !userEmail.value)) {
    popupFail.classList.add('popup_show-fail');
    closeFail.focus();
  } else {
    popupSucces.classList.add('popup_show-succes');
    closeSucces.focus();
  }
});

formButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  if ((!userName.value || !userSurname.value || !userTelephone.value || !userEmail.value)) {
    popupFail.classList.add('popup_show-fail');
    closeFail.focus();
  } else {
    popupSucces.classList.add('popup_show-succes');
    closeSucces.focus();
  }
});


closeSucces.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupSucces.classList.remove('popup_show-succes');
});

closeFail.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupFail.classList.remove('popup_show-fail');
});
