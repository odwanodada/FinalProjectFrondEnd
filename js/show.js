function getAlldata() {
  // Get element to change
  let list = document.getElementById("container");

  // Fetch the data
  fetch("http://127.0.0.1:5000/show-items/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((card) => createBlogItem(card));
    });
}

function createBlogItem(Books) {
  const item = `
    <div class="column">
    <div class="card">
      <h3>${Books.Title}</h3>
      <p>${Books.Author}</p></p>
     
   </div>
 </div>
`;
  let list = document.getElementsByClassName("container");
  list.innerHTML += item;
}

getAlldata();
