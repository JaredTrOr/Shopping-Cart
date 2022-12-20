let cartInfo = [];
renderItems();

function renderItems(){
    cartInfo = JSON.parse(localStorage.getItem('shopping-cart') || '[]');
    const shoppingBody = document.querySelector('.shopping-body');
    if(cartInfo.length != 0){    
        let shoppingProduct = '';

        cartInfo.forEach(item => {
            shoppingProduct +=  
            `
                <div class="shopping-product">
                    <div class="item-info">
                        <div class="info">
                            <div class="img">
                                <img src="${item.image}" alt="">
                            </div>
                            
                            <div>
                                ${item.info}
                            </div>
                        </div>
                        <div class="options">
                            <div>
                                <button id='${item.id}' onclick='removeItems(${item.id})' class="option-buttons">
                                    Remove item
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="item-amount flexing">
                        <input type="number" value="${item.amount}" onchange='updateAmount(${item.id}, value)' min="1">
                    </div>

                    <div class="item-price flexing"> 
                        ${item.price}
                    </div>
                </div>
            `;
        });

        const shopTotal = `
        <div class="shop-total">
            <div>
                Total: <span id="total"></span>
            </div>
            <button id="buy-button" onclick='buyButton()' class="buy-total">Buy</button>
        </div>
        
        `

        setNumber();
        shoppingBody.innerHTML = shoppingProduct + shopTotal;
        calculateTotal();

        //The appendChild only works with node elements and doesn´t work with strings
    }
    else{
        let noProductsMessage = '';
        noProductsMessage += `
        <div class='no-products'>
            <h2>No products available</h2>
            <img class='no-products-img' src="../images/NoProducts.png" alt="">
        </div>
        `
        
        shoppingBody.innerHTML = noProductsMessage;
    }
    
}

function updateAmount(itemId, value){
    let itemSelected = cartInfo.find(item => item.id == itemId);
    itemSelected.amount = value;
    let copyItems = cartInfo.filter(item => item.id != itemId);
    copyItems.push(itemSelected);
    cartInfo = copyItems;
    calculateTotal();
}

function removeItems(id){
    const copyItems = cartInfo.filter(item => item.id != id);
    cartInfo = copyItems;
    localStorage.setItem('shopping-cart', JSON.stringify(cartInfo));
    renderItems();
    setNumber();
}

function setNumber(){
    document.getElementById('number-items').innerHTML = cartInfo.length;
}

function calculateTotal(){
    let subtotal = 0;
    let total = 0;
    cartInfo.forEach(product => {
        subtotal = product.price * product.amount;
        total += subtotal;
    });
    document.querySelector('#total').innerHTML = `$${total}`;
}

function buyButton(){
    const total = document.querySelector('#total').innerHTML;
    Swal.fire({
        title: 'Thank you for your purchase!!',
        text: `The total is: ${total}`,
        confirmButtonText: 'Close',
        icon: 'success'
    });

    localStorage.removeItem('shopping-cart');
    setNumber();
    renderItems();
}

