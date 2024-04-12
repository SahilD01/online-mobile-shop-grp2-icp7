
//Product Card Quantity Counter//
const quantityElement = document.getElementById("quantity");
function increment() {
    let quantity = parseInt(quantityElement.innerText);
    if (quantity < 10) {
        quantityElement.innerText = ++quantity;
    }
    else {
        alert("You can't Add more than 10 item!")
    }

}
function decrement() {
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantityElement.innerText = --quantity;
    }
    else {
        alert("You can't Add less than 1 item!")
    }

}
function add(){
alert("Your item is successfully added!")
}


function blackBtn(){
document.getElementById('changeImg').src = '/Images/mobilepic/mainpic.jpg';
}

function blueBtn(){
document.getElementById('changeImg').src = '/Images/mobilepic/w.jpeg';

}

function yellowBtn(){
document.getElementById('changeImg').src = '/Images/mobilepic/y.jpg';
}
function redBtn(){
document.getElementById('changeImg').src = '/Images/mobilepic/r.jpg';
}

