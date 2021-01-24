console.log('1');
var mainHeader = document.querySelector('.main-header');
var mainNav = mainHeader.querySelector('.main-nav');
var buttonToggle = mainNav.querySelector('.main-nav__toggle');
var navList = mainNav.querySelector('.main-nav__list');

var mainNavTogglerHandler = function () {
  if (buttonToggle.classList.contains('main-nav__toggle--open')) {
    navList.classList.remove('display-none');
    buttonToggle.classList.add('main-nav__toggle--close')
    buttonToggle.classList.remove('main-nav__toggle--open');

  } else {
    buttonToggle.classList.add('main-nav__toggle--open');
    buttonToggle.classList.remove('main-nav__toggle--close');
    navList.classList.add('display-none');
  }

};

buttonToggle.addEventListener('click', mainNavTogglerHandler);

// Всплывающее окно

var orderButton = document.querySelector('.top-product__button');
var popup = document.querySelector('.popup');

orderButton.addEventListener('click', function(evt){
  evt.preventDefault();
  popup.classList.remove('popup--close');
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains('popup-close')) {
      evt.preventDefault();
    } else {
      evt.preventDefault();
      popup.classList.add('popup--close');
    }
  }
});
