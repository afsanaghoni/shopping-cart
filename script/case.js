document.getElementById('case-plus-button').addEventListener('click', function () {
    const productQuantity = getProductQuantity('case-input', true);
    setInputDisplay('case-input', productQuantity);
    const productPrice = calculateProductPrice(productQuantity, 50);

    setTextDisplay('case-price', productPrice);
    finalCalculation(productPrice);

})



document.getElementById('case-minus-button').addEventListener('click', function () {
    const productQuantity = getProductQuantity('case-input', false);
    setInputDisplay('case-input', productQuantity);
    const productPrice = calculateProductPrice(productQuantity, 50);
    setTextDisplay('case-price', productPrice);
    finalCalculation(productPrice)

})