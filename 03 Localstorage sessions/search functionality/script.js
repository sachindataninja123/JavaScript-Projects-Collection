const users = [
  {
    id: 2,
    username: "Emily Smith",
    description: "UI/UX Designer from California.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    username: "David Johnson",
    description: "Full Stack Engineer from Texas.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    username: "Sophia Lee",
    description: "Backend Developer from Washington.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    username: "Michael Brown",
    description: "Mobile App Developer from Florida.",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    username: "Olivia Martinez",
    description: "Mobile Developer from Colorado.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    username: "James Wilson",
    description: "Software Tester from Illinois.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    id: 8,
    username: "Ava Davis",
    description: "Product Manager from Oregon.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    id: 9,
    username: "William Garcia",
    description: "System Analyst from Michigan.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    id: 10,
    username: "Mia Rodriguez",
    description: "Data Scientist from Georgia.",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
];

const cardList = document.getElementById("cardList");
function showUsers(data) {
  cardList.innerHTML = "";

  data.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.image;
    img.classList.add("image");

    // Create details container
    const details = document.createElement("div");
    details.classList.add("card-details");

    const name = document.createElement("h3");
    name.classList.add("username");
    name.textContent = user.username;

    // Create description
    const desc = document.createElement("p");
    desc.classList.add("description");
    desc.textContent = user.description;

    // Assemble the card
    details.appendChild(name);
    details.appendChild(desc);
    card.appendChild(img);
    card.appendChild(details);
    cardList.appendChild(card);
  });
}

var searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = users.filter((user) => {
    return user.username.toLowerCase().includes(searchTerm);
  });
  showUsers(filtered);
});
showUsers(users);
