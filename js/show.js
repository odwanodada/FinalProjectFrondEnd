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
                   <button class="buy">Buy Now</button>
                </div> `;
  let list = document.getElementById("container");
  list.innerHTML += item;
}

getAlldata();
