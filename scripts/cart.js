function getCartInformation(){
    const cartInfo = JSON.parse(localStorage.getItem('shopping-cart'));
    const numberOfItems = localStorage.getItem('number-items');
    document.getElementById('number-items').innerHTML = numberOfItems;

    
}

getCartInformation();