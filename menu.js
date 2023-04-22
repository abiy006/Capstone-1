const burgerMenu = document.getElementById('mobileMenuid');
const mobileMenu = document.getElementById('mobile-menu-page-id');

const mobileMenuClose = document.getElementById('mobile-menu-close-id');
const mobileMenuListLi = document.getElementById('moblie-menu-list-ul').querySelectorAll('li');

const headerId = document.getElementById('section-header-mobile-id');

const sectionBody1 = document.getElementById('section-body1-id');

mobileMenu.style.display = 'none';

function openMobilemenu() {
  headerId.style.backgroundColor = '#d3d3d3';
  sectionBody1.style.backgroundColor = '#d3d3d3';

  // headerId.classList.add('blur');
  // sectionBody1.classList.add('blur');

  mobileMenu.style.display = 'block';
}

function mobileMenuclose() {
  mobileMenu.style.display = 'none';

  // headerId.style.backgroundColor = 'white';
  // sectionBody1.style.backgroundColor = 'white';
  // sectionBody1.classList.remove('blur');
  // headerId.classList.remove('blur');
}

burgerMenu.addEventListener('click', openMobilemenu);
mobileMenuClose.addEventListener('click', mobileMenuclose);

mobileMenuListLi.forEach((listitems) => {
  listitems.addEventListener('click', mobileMenuclose);
});
