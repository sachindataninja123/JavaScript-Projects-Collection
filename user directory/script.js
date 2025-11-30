/*Two Tasks*/
//list
//search

const userContainer = document.querySelector(".Directory");
const searchInput = document.querySelector("#searchInput");

const users = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
  },
  {
    name: "Ben Johnson",
    email: "ben@example.com",
  },
  {
    name: "John Cena",
    email: "john@example.com",
  },
  {
    name: "David John",
    email: "david@example.com",
  },
];

function renderUsers(arr) {
  userContainer.innerHTML = "";
  arr.map((obj) => {
    // console.log(obj);
    let { name, email } = obj;
    console.log(name, email);

    let divElem = document.createElement("div");
    divElem.className = "Directory-card";
    divElem.innerHTML = `
     <div class="logo">
                    <img src="../image/image1.png" alt="user1" >
            </div>
                <div class="user-details">
                    <h2>${name}</h2>
                    <p>${email}</p>
                </div>
    `;
    userContainer.append(divElem);
  });
}
renderUsers(users); //initial render

function handleSearch(e) {
//   console.log(e.target.value);
let searchValue = e.target.value;

  let filteredUsers = users.filter((obj) => {
    return (
      obj.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      obj.email.toLowerCase().includes(searchValue.toLowerCase())
    );
  });
  renderUsers(filteredUsers);
}

searchInput.addEventListener("input", handleSearch);
