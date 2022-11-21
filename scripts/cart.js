const cartInfo = JSON.parse(localStorage.getItem('shopping-cart'));
document.getElementById('number-items').innerHTML = cartInfo.length;
renderItems();

function renderItems(){
    const shoppingCart = document.querySelector('.shopping-cart');

    const shoppingHeader = `
    <div class="shopping-header">
        <div class="title">
            <p>Cart items</p>
            <hr>
        </div>
    </div>
    `;

    let shoppingBody = '';
    cartInfo.forEach(item => {
        shoppingBody = shoppingBody + 
        `
            <div class="shopping-body">
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
                    <input type="number" value="1" min="0">
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

    shoppingCart.innerHTML = shoppingHeader + shoppingBody + shopTotal;

    //The appendChild only works with node elements and doesn´t work with strings
}

function updateCartTotal(){

}

function numberOfEachItem(items){
    
}
