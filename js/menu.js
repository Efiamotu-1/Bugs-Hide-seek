const hamburger = document.querySelector('.hamburger');
const ul = document.querySelector('.nav-active');
const envelope = document.querySelector('.mail');
const showClose = document.querySelector('.show-close-menu');
const open = document.querySelector('.nav');
const close = document.querySelector('.close-menu');
const list = document.querySelector('.nav-links');

const showMenu = () => {
  open.classList.toggle('nav');
  open.classList.toggle('mobile-menu');
  ul.classList.toggle('menu');
  showClose.classList.toggle('menu-img');
  envelope.style.display = 'none';
  list.forEach((item) => {
    item.classList.toggle('nav-links');
    item.classList.toggle('menu-text');
  });
};

const closeMenu = () => {
  open.classList.toggle('nav');
  open.classList.toggle('mobile-menu');
  ul.classList.toggle('menu');
  showClose.classList.toggle('menu-img');
  envelope.style.display = 'block';
  list.forEach((item) => {
    item.classList.toggle('nav-links');
    item.classList.toggle('menu-text');
  });
};

hamburger.addEventListener('click', showMenu);

close.addEventListener('click', closeMenu);

list.forEach((item) => {
  item.addEventListener('click', () => {
    if (open.classList.contains('nav')) {
      return;
    }

    open.classList.add('nav');

    open.classList.remove('mobile-menu');
    ul.classList.remove('menu');
    showClose.classList.remove('menu-img');
    envelope.style.display = 'block';
    list.forEach((item) => {
      item.classList.toggle('nav-links');
      item.classList.toggle('menu-text');
    });
  });
});