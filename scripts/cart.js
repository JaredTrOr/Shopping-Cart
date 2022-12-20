let cartInfo = [];
renderItems();

function renderItems(){
    cartInfo = JSON.parse(localStorage.getItem('shopping-cart'));
    const shoppingBody = document.querySelector('.shopping-body');
    if(cartInfo != null){    
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
                        <input type="number" value="${item.amount}" min="0">
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
            <button id="buy-button" class="buy-total">Buy</button>
        </div>
        
        `

        setNumber();
        shoppingBody.innerHTML = shoppingProduct + shopTotal;
        //The appendChild only works with node elements and doesn´t work with strings
    }
    else{
        let noProductsMessage = '';
        noProductsMessage += `
        <div class='no-products'>
            <h2>You haven't selected any products yet...</h2>
            <img class='no-products-img' src="../images/NoProducts.png" alt="">
        </div>
        `
        
        shoppingBody.innerHTML = noProductsMessage;
    }
    
}

function updateItems(){

}

function removeItems(id){
    const copyItems = cartInfo.filter(item => item.id != id);
    cartInfo = copyItems;
    localStorage.setItem('shopping-cart', JSON.stringify(cartInfo));
    renderItems();
}

function setNumber(){
    let numberOfItems = 0;
    cartInfo.forEach(item => {numberOfItems += item.amount;});
    document.getElementById('number-items').innerHTML = numberOfItems;
}

