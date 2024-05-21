let cart = [];


function addToCart(productName, price) {
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        if (cart.length >= 14) {
            alert('Maximum cart limit reached. You cannot add more items to the cart.');
            return;
        }

        cart.push({ name: productName, quantity: 1, price: parseFloat(price) });
    }

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    totalElement.textContent = totalPrice.toFixed(2);

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity}`;
        cartItemsElement.appendChild(listItem);
    });
}

function saveCart() {
    localStorage.setItem('savedCart', JSON.stringify(cart));

    alert('Cart information saved! You can now proceed to delivery.');
}

function getCartData() {
    var cartItems = document.querySelectorAll('#cart-items li');
    var cartData = [];

    cartItems.forEach(function (item) {
        var itemName = item.getAttribute('data-product-name');
        var itemPrice = parseFloat(item.getAttribute('data-product-price'));
        var itemQuantity = parseInt(item.getAttribute('data-quantity'));

        cartData.push({
            name: itemName,
            price: itemPrice,
            quantity: itemQuantity
        });
    });

    return cartData;
}
