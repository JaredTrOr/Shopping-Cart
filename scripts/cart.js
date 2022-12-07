const cartInfo = JSON.parse(localStorage.getItem('shopping-cart'));
renderItems();

function renderItems(){
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
                                <button class="remove option-buttons">
                                    Remove item
                                </button>
                            </div>
                            <div class="buy-now">
                                <button class="buy option-buttons">
                                    Buy now
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

        shoppingBody.innerHTML = shoppingProduct + shopTotal;
        //The appendChild only works with node elements and doesn´t work with strings
    }
    else{
        let noProductsMessage = '';
        noProductsMessage += `
        <h2>You haven't selected any products yet...</h2>
        <img class='no-products-img' src="../images/NoProducts.png" alt="">
        `
        
        shoppingBody.innerHTML = noProductsMessage;
    }
    
}

function updateCartTotal(){

}

function numberOfEachItem(items){
    
}

/*
Check if there are elements inside our array, if there are elements
then we need to render the elements, otherwise, we need to display a message
saying that there are no elements in the car
*/
