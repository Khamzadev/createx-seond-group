const burger = document.querySelector('.burger');
const links = document.querySelector('.header__links')


burger.addEventListener('click', function () {
  burger.classList.toggle('burger__active')
  links.classList.toggle('header__links_active')
})

