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


    const item = `<div class="card" id="card">
    <img src="${Items.Images}" alt="" style="width:100%">
    <h1>${Items.Title}</h1>
    <p class="price">$19.99</p>
    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
    <p><button>Add to Cart</button></p>
  </div>

`;
    let list = document.getElementById("container");
    list.innerHTML += item;
  }
  
  getAlldata();