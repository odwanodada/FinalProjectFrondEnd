let card = [];
function showAll() {
  // Fetch the data
  fetch("https://ancient-springs-62176.herokuapp.com/show-items/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => {
        displayItems(item);
        card.push(item);
      });
    });
}

function addToCart(id) {
  let cart = document.getElementById("body-modal");
  let inCartItems = card.filter((Items) => Items.id == id); //does nothing
  let selectedItem = inCartItems[0];
  console.log(cart, card, inCartItems, selectedItem);
  let cartItem = `
        <li class="rec-li" id="Items${id}" Items-price=${selectedItem.price}>
          ${selectedItem.name} 
        <button onclick="removefromCart(${id})">Remove</button></li>
      `;
  cart.innerHTML += cartItem;

  function calcTotal() {
    let recieptTotal = document.getElementById("total")[0];
    let y = parseInt(recieptTotal.innerHTML);
    let x = document.getElementById("Items" + id).getAttribute("Items-price");

    let total = parseInt(y) + parseInt(x);

    if (total <= 0) {
      alert("Something went Wrong ,Reload Page");
    }

    recieptTotal.innerHTML = total;
    console.log(total);
  }
  calcTotal();
}

showAll();


