const humberger = document.querySelector('.humberger');
const navMobile = document.querySelector('.nav-mobile');
const cross = document.querySelector('.cross');
humberger.addEventListener('click', () => {
  navMobile.style.display = 'block';
});

cross.addEventListener('click', () => {
  navMobile.style.display = 'none';
});