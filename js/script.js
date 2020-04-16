'use strict';
// растворение .opacity--0

const headerMenuElement = document.querySelector('.header__menu')
//здесь можно разобраться с дребезжанием
document.addEventListener('scroll', function () {
  if (document.documentElement.scrollTop <= 1) {
    headerMenuElement.classList.remove('fixed');
  } else {
    headerMenuElement.classList.add('fixed');
  }
})

// плавный скролл якорей

// $(document).ready(function () {
//   $('a').on('click', function (event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;

//       $('html, body').animate({
//         scrollTop: ($(hash).offset().top) - 100
//       }, 800);
//     }
//   });
// });

// При нажатии на "поиск и категории" 
// появляется строка поиска и разворачивается облако категорий и тегов.
// .tags.active

const tagsElement = document.querySelector('.tags')
const searchInputElement = document.querySelector('.search__input')
const searchLabelElement = document.querySelector('.search__label')
const tagsLinkElements = document.querySelectorAll('.tags__link');
const searchResetElement = document.querySelector('.search__reset')

searchInputElement.addEventListener('click', function () {
  tagsElement.classList.add('active')
  setTimeout(function () {
    tagsElement.classList.remove('opacity--0');
  }, 0);
})

searchLabelElement.addEventListener('click', function () {
  tagsElement.classList.add('active')
  searchLabelElement.classList.add('opacity--0')
  setTimeout(function () {
    tagsElement.classList.remove('opacity--0');
  }, 0);
})



searchResetElement.addEventListener('click', function () {
  setTimeout(function () {
    tagsElement.classList.add('opacity--0');
  }, 0);

  setTimeout(function () {
    tagsElement.classList.remove('active')
    tagsLinkElements.forEach(element => {
      element.addEventListener('click', function () {
        element.classList.remove('active')
      })
    })
  }, 400)
})

// Категории / теги : при нажатии на любое из значений — моментально фильтруется выдача 
// (выводятся записи, содержащие выбранное значение). После нажатия на значение оно меняет цвет на черный. При повторном нажатии выбор отменяется. 
// Возможно одновременно выбрать сколько угодно значений.


tagsLinkElements.forEach(element => {
  element.addEventListener('click', function () {
    element.classList.add('active')
  })
})