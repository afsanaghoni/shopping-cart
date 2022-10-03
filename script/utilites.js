function getProductQuantity(id, isIncrease) {
    const productQuantityField = document.getElementById(id);
    const previousProductQuantity = parseInt(productQuantityField.value);
    let newProductQuantity;
    if (isIncrease) {
        newProductQuantity = previousProductQuantity + 1;
    }
    else {
        newProductQuantity = previousProductQuantity - 1;
    }

    return newProductQuantity;
}

function setInputDisplay(id, elementValue) {
    document.getElementById(id).value = elementValue;
}
function setTextDisplay(id, elementValue) {
    document.getElementById(id).innerText = elementValue;
}
function calculateProductPrice(productQuantity, price) {
    const productPrice = price * productQuantity;
    return productPrice;
}
function finalCalculation(productPrice) {

    const subtotalString = document.getElementById('subtotal').innerText;
    let subtotal = parseInt(subtotalString);
    subtotal = subtotal + productPrice;
    setTextDisplay('subtotal', subtotal);
    const tax = parseFloat((subtotal * .1).toFixed(2));
    setTextDisplay('tax', tax);
    const total = subtotal + tax;
    setTextDisplay('total', total);
}