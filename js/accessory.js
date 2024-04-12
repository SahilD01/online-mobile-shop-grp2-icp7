
function inc() {
    const quantityText = document.getElementById("quantity-text");
    const showQuantity = document.getElementById("show-quantity");
    const showTotal = document.getElementById("show-total");

    let quantity = parseInt(quantityText.innerHTML);
    if (quantity < 5) {
        quantityText.innerHTML = ++quantity;
    }
    else {
        alert("Bss ho gya !!");
    }
    showQuantity.innerText = `${quantity} x 3.43L`;
    showTotal.innerText=`Total: ${quantity * 3.43} L `
}

function dec() {
    const quantityText = document.getElementById("quantity-text");
    const showQuantity = document.getElementById("show-quantity");
    const showTotal = document.getElementById("show-total");

    let quantity = parseInt(quantityText.innerHTML);
    if (quantity > 1) {
        quantityText.innerHTML = --quantity;
    }
    else {
        alert("You can't add less than 1 item")
    }
    showQuantity.innerText = `${quantity} x 3.43`;
    showTotal.innerText=`Total: ${quantity * 3.43} L `

}

const quantityElement = document.getElementById("quantity");
function increment() {
    let quantity = parseInt(quantityElement.innerText);
    const showQuantity = document.getElementById("show-quantity");
    const showTotal = document.getElementById("show-total");
    if (quantity < 10) {
        quantityElement.innerText = ++quantity;
    }
    else {
        alert("You can't Add more than 10 item!")
    }
    showQuantity.innerText = `${quantity} x 899`;
    showTotal.innerText=`Total: ${quantity * 899} `

}
function decrement() {
    let quantity = parseInt(quantityElement.innerText);
    const showQuantity = document.getElementById("show-quantity");
    const showTotal = document.getElementById("show-total");
    if (quantity > 1) {
        quantityElement.innerText = --quantity;
    }
    else {
        alert("You can't Add less than 1 item!")
    }
    showQuantity.innerText = `${quantity} x 899`;
    showTotal.innerText=`Total: ${quantity * 899}  `

}

function add(){
alert("Your item is successfully added!")
}