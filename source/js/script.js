'use strict';

//мобильное меню
var navMain = document.querySelector('.nav-main');
var navToggle = document.querySelector('.nav-main__toggle');
var navLogo = document.querySelector('.nav-main__image');

navMain.classList.remove('nav-main--nojs');
navLogo.src = 'img/ejpro-logo-white.svg';

navToggle.addEventListener('click', function(evt) {
  if (navMain.classList.contains('nav-main--closed')) {
    evt.preventDefault();
    navMain.classList.remove('nav-main--closed');
    navMain.classList.add('nav-main--opened');
    navLogo.src = 'nav-main--opened';
  } else {
    navMain.classList.add('nav-main--closed');
    navMain.classList.remove('nav-main--opened');
    navLogo.src = 'img/ejpro-logo-white.svg';
  }
});

//выпадающее меню для каталога

if (document.querySelector('.catalog__filter-menu')) {
  var sortingLink = document.querySelector('.catalog__btn');
  var sortingPopup = document.querySelector('.catalog__filter-menu');

  sortingLink.addEventListener('click', function (a) {
    a.preventDefault();
    console.log("Клик по ссылке вход");
    sortingPopup.classList.toggle('catalog__filter-menu--opened');
  });
}

if (document.querySelector('.catalog__brands-menu')) {
  var menuButton = document.querySelector('.catalog__filter-link--btn');
  var menuPopup = document.querySelector('.catalog__brands-menu');

  menuButton.addEventListener('click', function (a) {
    a.preventDefault();
    console.log("Клик по ссылке вход");
    menuPopup.classList.toggle('catalog__brands-menu--opened');
  });
}

//вкладки в подробном описании продуктовой карточки
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs__btn'),
        tabContent = document.querySelectorAll('.tabs__content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};


tab();

//множество модальных окон

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {
   var modalButtons = document.querySelectorAll('.modal--open-js'),
       overlay      = document.querySelector('.modal--overlay-js'),
       closeButtons = document.querySelectorAll('.modal--close-js');

   modalButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
         modalElem.classList.add('active');
         overlay.classList.add('active');
      });
   });

   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });
   });


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.modal__overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');

        this.classList.remove('active');
    });
});

//форма заказа звонка/ Пока не работает


if(document.querySelector('.popup-call')) {
  var popup = document.querySelector('.popup-call');
  var buttonOpen = document.querySelectorAll('.button--call');
  var buttonClose = popup.querySelector('.popup-call__toggle');

  // Popup "Товар добавлен в корзину"
  for (i = 0; i < buttonOpen.length; i++) {
      buttonOpen[i].addEventListener('click', function (event) {
          event.preventDefault();
          console.log('Отзовись!');
          popup.classList.add('popup-call--show');
      })
  };
  //закрытие попапа по Х
  buttonClose.addEventListener('click', function (event) {
      event.preventDefault();
      popup.classList.remove('popup-call--show');
  });
}
