function submitForm() {
    // Display success message
    alert("Form submitted successfully!");

    // Clear form fields
    document.getElementById('emailInput').value = "";
    document.getElementById('nameInput').value = "";
    document.getElementById('positionInput').value = "";
    location.reload();
}
