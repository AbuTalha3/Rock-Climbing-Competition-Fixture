const humburger = document.getElementById('humburger');
const mobileMenu = document.getElementById('mobile-menu');

humburger.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});