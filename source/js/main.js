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

