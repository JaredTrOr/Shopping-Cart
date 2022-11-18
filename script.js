const burgerMenu = document.getElementById('burger');
const navItems = document.getElementById('nav-items');
const buttons = document.querySelectorAll('button');


burgerMenu.addEventListener('click', () => {
    navItems.classList.toggle('nav-active');
    //burgerMenu.classList.toggle('active');
});

buttons.forEach(button => button.addEventListener('click', () => {
    Swal.fire({
        title: 'Item added!!',
        text: 'You added an item to the cart',
        confirmButtonText: 'Close',
        icon: 'success'
    });
}));
