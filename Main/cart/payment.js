document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("paymentButton").addEventListener("click", function (event) {
      event.preventDefault();

      if (validateForm()) {
          alert("Payment successful!");
         // window.location.href = "index.html";
      } else {
          alert("Please fill in all the required details.");
      }
  });

  loadTotalFromDelivery();
});

function validateForm() {
  var form = document.getElementById("paymentForm");

  return Array.from(form.elements).every(function (element) {
      return !(element.required && !element.value.trim());
  });
}

function loadTotalFromDelivery() {
  var deliveryTotal = getDeliveryTotal();
  displayTotal(deliveryTotal);
}

function getDeliveryTotal() {
  return parseFloat(localStorage.getItem('deliveryTotal')) || 0;
}

function displayTotal(total) {
  const taxRate = 0.06; // 6% tax rate
  const taxAmount = total * taxRate;
  const totalPayable = total + taxAmount;

  const totalElement = document.getElementById('payment-total');
  const taxElement = document.getElementById('tax-total');
  const totalPayableElement = document.getElementById('total');

  totalElement.textContent = total.toFixed(2);
  taxElement.textContent = taxAmount.toFixed(2);
  totalPayableElement.textContent = totalPayable.toFixed(2);
}
