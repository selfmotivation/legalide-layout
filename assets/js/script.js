const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.navbar__list');

console.log(burgerMenu);
console.log(burger);

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
  burger.classList.toggle('burger_shown');
})