let users = [];

fetch("https://ancient-springs-62176.herokuapp.com/show-customers/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function login() {
  // const form = document.getElementById("login");
 
  let inputs = document.getElementsByTagName("input");

  let eml = inputs[0].value;
  let pswrd = inputs[1].value;
  console.log(eml);
  console.log(pswrd);
  let loggedIn = users.filter((user) => {
    return user.email == eml && user.password == pswrd;
  });

  console.log(loggedIn);

  if (loggedIn.length > 0) {
     localStorage.setItem("user", JSON.stringify(logged[0]))
     JSON.parse(localStorage.getItem("user"))
    alert("You are now logged in");
    window.location.href = "/.showtable.html";
    console.log(window.location.href);
  } else {
    alert("Credentials invalid");
  }
}