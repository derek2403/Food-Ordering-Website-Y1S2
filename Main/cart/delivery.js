// delivery.js
window.onload = init;

function init() {
    document.getElementById("delivery").onclick = turnOnDelivery;
    document.getElementById("pickup").onclick = turnOnPickup;
    document.forms[0].onsubmit = function () {
        setTimeout(function () {
            window.location.href = "payment.html";
        }, 100);
        return false; 
    };
}

function turnOnDelivery() {
    document.getElementById("addressBox").disabled = false;
    document.getElementById("delBox").disabled = false;
    document.getElementById("pickupBox").disabled = true;
    document.getElementById("pickupLocation").disabled = true;
    document.getElementById("delfees").hidden = false;

    const totalElement = document.getElementById('delivery-total');
    const currentTotal = parseFloat(totalElement.textContent);
    totalElement.textContent = (currentTotal + 10).toFixed(2);

    // Call the callback to update localStorage
    updateDeliveryTotal(currentTotal + 10);
}

function turnOnPickup() {
    document.getElementById("addressBox").disabled = true;
    document.getElementById("delBox").disabled = true;
    document.getElementById("pickupBox").disabled = false;
    document.getElementById("pickupLocation").disabled = false;
    document.getElementById("delfees").hidden = true;

    const totalElement = document.getElementById('delivery-total');
    const originalTotal = parseFloat(totalElement.getAttribute('data-original-total'));

    totalElement.textContent = originalTotal.toFixed(2);
    updateDeliveryTotal(originalTotal);
}


function navigateToDelivery() {
    saveCart();
    window.location.href = "delivery.html";
}

function loadCartForDelivery() {
    var savedCart = getSavedCart();
    displayCartForDelivery(savedCart);

    const totalElement = document.getElementById('delivery-total');
    const totalPrice = parseFloat(totalElement.textContent);
    totalElement.setAttribute('data-original-total', totalPrice);      
}

function getSavedCart() {
    var savedCart = localStorage.getItem('savedCart');
    return JSON.parse(savedCart) || [];
}

function displayCartForDelivery(cart) {
    const cartItemsElement = document.getElementById('delivery-cart-items');
    const totalElement = document.getElementById('delivery-total');

    cartItemsElement.innerHTML = '';

    if (!cart || cart.length === 0) {
        totalElement.textContent = '0.00';
        return;
    }

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    totalElement.textContent = totalPrice.toFixed(2);

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity}`;
        cartItemsElement.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    loadCartForDelivery();
});

// Function to update the total in localStorage
function updateDeliveryTotal(total) {
    localStorage.setItem('deliveryTotal', total.toFixed(2));
}