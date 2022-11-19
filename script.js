localStorage.removeItem('shopping-cart');

const burgerMenu = document.getElementById('burger');
const navItems = document.getElementById('nav-items');
const buttons = document.querySelectorAll('button');

const cartItems = [];

buttons.forEach(button => button.addEventListener('click', (e) => {
    addItemToCart(e);
    showMessage();
}));

function addItemToCart(e){
    const parentElement = e.target.parentElement.parentElement;
    let price = parentElement.querySelector('.product-price')
    .innerText.replace('$','');
    let info = parentElement.querySelector('.product-info').innerText;

    let product = {price,info}
    cartItems.push(product);
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));

    changeNumber();
}

function changeNumber(){
    const numberOfItems = document.getElementById('number-items');
    numberOfItems.innerHTML = cartItems.length;
}

function showMessage(){
    Swal.fire({
        title: 'Item added!!',
        text: 'You added an item to the cart',
        confirmButtonText: 'Close',
        icon: 'success'
    });
}

