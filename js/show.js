function getAlldata() {
  // Fetch the data
  fetch("http://127.0.0.1:5000/show-items/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((card) => displayItems(card));
    });
}

function displayItems(Items) {
  const item = `<div id="card" class="content">
                     <img src="${Items.Images}"/>
                     <h3>${Items.Title}</h3>
                     <p>${Items.Author}</p>
                     <p>${Items.Genres}</p>
                     <p>${Items.Originally_published}</p>
                     <p>R${Items.Price}</p>
                   <button class="buy">AddToCart</button>
                </div> `;
  let list = document.getElementById("container");
  list.innerHTML += item;
}

getAlldata();

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
