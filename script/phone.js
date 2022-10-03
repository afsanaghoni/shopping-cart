document.getElementById('phone-plus-button').addEventListener('click', function () {
    const productQuantity = getProductQuantity('phone-input', true);
    setInputDisplay('phone-input', productQuantity);
    const productPrice = calculateProductPrice(productQuantity, 1000);

    setTextDisplay('phone-price', productPrice);
    finalCalculation();
})
document.getElementById('phone-minus-button').addEventListener('click', function () {
    const productQuantity = getProductQuantity('phone-input', false);
    setInputDisplay('phone-input', productQuantity);
    const productPrice = calculateProductPrice(productQuantity, 1000);

    setTextDisplay('phone-price', productPrice);
    finalCalculation();
})