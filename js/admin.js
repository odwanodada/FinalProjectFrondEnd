function listAll() {
  // Fetch the data
  fetch("http://127.0.0.1:5000/show-items/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((show) => showAll(show));
    });
}

function deleteItem(id) {
  // Fetch the data
  let apiUrl = "http://127.0.0.1:5000/delete-records/" + id;
  alert("Deleted");
  fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
}

function showAll(Items) {
  const item = `  <ul id="diplaylist">
                        <li>${Items.id}</li>
                        <li>${Items.Title}</li>
                        <li>${Items.Author}</li>
                        <li>${Items.Genres}</li>
                        <li>${Items.Originally_published}</li>
                        <li>${Items.Price}</li>  
                        <li>${Items.Images}</li> 
                        <li> <button id="create-form" onclick="event.preventDefault(); deleteItem(${Items.id});" type="button">Delete</button> </li> 
                    </ul>`;
  let list = document.getElementById("list1");
  list.innerHTML += item;
}

listAll();

function addItem() {
  const inputs = document.getElementsByTagName("input");
  fetch("http://127.0.0.1:5000/add-books/" ,{
    method: "POST",
    body: JSON.stringify({
      title: inputs[0].value,
      author: inputs[1].value,
      genres: inputs[2].value,
      originally_published: inputs[3].value,
      price: inputs[4].value,
      images: inputs[5].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      alert("Item have been added to items");
      document.getElementById("reg-form").reset();
    });
}
