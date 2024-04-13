
//Product Card Quantity Counter//
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
    showQuantity.innerText = `${quantity} x 99`;
    showTotal.innerText=`Total: ${quantity * 99} `

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
    showQuantity.innerText = `${quantity} x 99`;
    showTotal.innerText=`Total: ${quantity * 99}  `

}
function add(){
    alert("Your item is successfully added!")
    }