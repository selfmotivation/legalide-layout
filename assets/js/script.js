const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.navbar__list');
const search = document.querySelector('.search');
const cart = document.querySelector('.cart');

burger.addEventListener('click', () => {
  if (burgerMenu.classList.contains('navbar__list_hidden')) {
    setTimeout(() => {
      burgerMenu.classList.toggle('navbar__list_shown');
    }, 0);
    burgerMenu.classList.toggle('navbar__list_hidden');
    
    document.body.style.overflow = 'hidden';
  } else {
    setTimeout(() => {
      burgerMenu.classList.toggle('navbar__list_hidden');
    }, 300);
    burgerMenu.classList.toggle('navbar__list_shown');

    document.body.style.overflow = 'auto';
  }
  search.classList.toggle('search_shown');
  cart.classList.toggle('cart_shown');
  burger.classList.toggle('burger_shown');
})