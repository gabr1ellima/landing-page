const btnMobile = document.querySelector('.btn-mobile');
const menuMobile = document.querySelector('.menu-list');

btnMobile.addEventListener('click', () => {
  menuMobile.classList.toggle('active');
});