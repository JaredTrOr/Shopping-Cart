localStorage.removeItem('shopping-cart');
localStorage.removeItem('number-items');

const buttons = document.querySelectorAll('button');

const cartItems = [];

buttons.forEach(button => button.addEventListener('click', (e) => {
    addItemToCart(e);
}));

function addItemToCart(e){
    let parentElement = e.target.parentElement.parentElement;
    let price = parentElement.querySelector('.product-price')
    .innerText.replace('$','');
    let info = parentElement.querySelector('.product-info').innerText;

    //Get the image
    let parentImage = parentElement.parentElement
    let image = parentImage.querySelector('.link-img').firstElementChild.getAttribute('src');

    let product = {price,info,image}
    cartItems.push(product);
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));

    showMessage(info);
    numberOfItems();
}

function numberOfItems(){
    const numberOfItemsElement = document.getElementById('number-items');
    let number = cartItems.length;
    numberOfItemsElement.innerHTML = number;

    //Add the number of items to localstorage
    localStorage.setItem('number-items',number);
}

function showMessage(info){
    Swal.fire({
        title: 'Item added!!',
        text: `You added "${info}" to the cart`,
        confirmButtonText: 'Close',
        icon: 'success'
    });
}


