const burgerMenu = document.getElementById('burger');
const navItems = document.getElementById('nav-items');

burgerMenu.addEventListener('click', () => {
    navItems.classList.toggle('nav-active');
    //burgerMenu.classList.toggle('active');
});