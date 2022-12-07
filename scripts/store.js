localStorage.removeItem('shopping-cart');
localStorage.removeItem('number-items');

const buttons = document.querySelectorAll('button');

let cartItems = [];

buttons.forEach(button => button.addEventListener('click', (e) => {
    const id = e.target.id;
    let itemInserted = cartItems.filter(item => item.id === id)[0];

    if(cartItems.includes(itemInserted)) updateItems(itemInserted, id) 
    else addItemToCart(e,id);
}));

function addItemToCart(e, id){
    let parentElement = e.target.parentElement.parentElement;
    let price = parentElement.querySelector('.product-price')
    .innerText.replace('$','');
    let info = parentElement.querySelector('.product-info').innerText;

    //Get the image
    let parentImage = parentElement.parentElement
    let image = parentImage.querySelector('.link-img').firstElementChild.getAttribute('src');

    let product = {id,price,info,image, amount: 1}
    cartItems.push(product);

    addToLocalStorage();
    showMessage(info);
    setNumber(cartItems);
}

function updateItems(itemInserted, id){
    showMessage(itemInserted.info);

    let copyItems = cartItems.filter(item => item.id !== id);
    itemInserted.amount += 1;
    copyItems.push(itemInserted);
    cartItems = copyItems;
    addToLocalStorage();
    setNumber();
}

function addToLocalStorage(){
    localStorage.setItem('shopping-cart', JSON.stringify(cartItems));
}

function setNumber(){
    let numberOfItems = 0;
    cartItems.forEach(item => {numberOfItems += item.amount;});
    document.getElementById('number-items').innerHTML = numberOfItems;
}

function showMessage(info){
    Swal.fire({
        title: 'Item added!!',
        text: `You added "${info}" to the cart`,
        confirmButtonText: 'Close',
        icon: 'success'
    });
}


