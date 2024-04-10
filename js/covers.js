
function inc(){
    const quantityText = document.getElementById('qnty-text');
     const showQuantity = document.getElementById("show-qnty");
     const showTotal = document.getElementById("show-total");

     let quantity = parseInt(quantityText.innerText);
     
     if(quantity<10)
     {
     quantityText.innerText = ++quantity;
     } 
     else{
         alert("You can't add more than 10 items");
     }
     showQuantity.innerText = `${quantity}  X 179`;
     showTotal.innerText = `Total : ${quantity * 179}`;
     showTotal.innerText = `Total : ${quantity * 179}`
   
}
function dec(){

     const quantityText = document.getElementById('qnty-text');
     const showQuantity = document.getElementById("show-qnty");
     const showTotal = document.getElementById("show-total");
      let quantity = parseInt(quantityText.innerText);
      if(quantity>1)
      {
      quantityText.innerText = --quantity;
    }
     else
     {
         alert("You can't add less than 1 items");
     }
     showQuantity.innerText = `${quantity}  X 179`;
     showTotal.innerText = `Total : ${quantity * 179}`;
     showTotal.innerText = `Total : ${quantity * 179}`

 }
