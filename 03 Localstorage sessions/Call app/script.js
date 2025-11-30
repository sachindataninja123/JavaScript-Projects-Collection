const formContainer = document.getElementById("callForm");
const openForm = document.getElementById("addForm");
const closeForm = document.getElementById("close");

const cardStack = document.querySelector(".card-stack");
const upBtn = document.querySelector("#upbtn");
const downBtn = document.querySelector("#downbtn");

let tasks = [];

const form2 = document.querySelector("form");

// Individual inputs
const photoInput = form2.querySelector('input[name="photo"]');
const fullNameInput = form2.querySelector('input[name="fullname"]');
const homeTownInput = form2.querySelector('input[name="hometown"]');
const purposeInput = form2.querySelector('input[name="purpose"]');

// All radio buttons in category
const categoryRadios = form2.querySelectorAll('input[name="category"]');

const submitBtn = form2.querySelector("#submit");

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

// Example: on submit, prevent default and log values
form2.addEventListener("submit", (e) => {
  e.preventDefault(); // so page doesn't reload

  const data = {
    photo: photoInput.value.trim(),
    fullname: fullNameInput.value.trim(),
    hometown: homeTownInput.value.trim(),
    purpose: purposeInput.value.trim(),
  };

  let selected = false;
  categoryRadios.forEach((cat) => {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  const { photo, fullname, hometown, purpose, category } = data;

  if (photo === "") {
    alert("please enter a image URL!");
    return;
  }
  if (fullname === "") {
    alert("please enter Full Name!");
    return;
  }
  if (purpose === "") {
    alert("please enter a purpose!");
    return;
  }
  if (hometown === "") {
    alert("please enter a Hometown!");
    return;
  }
  if (!selected) {
    alert("please enter a Category!");
    return;
  }

  saveToLocalStorage({
    photo,
    fullname,
    hometown,
    purpose,
    selected,
  });

  alert("Form submitted successfully!");
  form2.reset();
  formContainer.style.display = "none";
  return;
});

function showCards() {
  let allTasks = JSON.parse(localStorage.getItem("tasks"));

  allTasks.forEach((task) => {
    // Create outer div.card
    const card = document.createElement("div");
    card.className = "card";

    // Create img
    const img = document.createElement("img");
    img.src = task.photo;
    img.alt = "User";
    card.appendChild(img);

    // Create card-details container
    const cardDetails = document.createElement("div");
    cardDetails.className = "card-details";

    // Add h3
    const h3 = document.createElement("h3");
    h3.textContent = task.fullname;
    cardDetails.appendChild(h3);

    // Info 1
    const info1 = document.createElement("div");
    info1.className = "info";
    const span1a = document.createElement("span");
    span1a.textContent = "Home town";
    const span1b = document.createElement("span");
    span1b.textContent = task.hometown;
    info1.appendChild(span1a);
    info1.appendChild(span1b);
    cardDetails.appendChild(info1);

    // Info 2
    const info2 = document.createElement("div");
    info2.className = "info";
    const span2a = document.createElement("span");
    span2a.textContent = "Purpose";
    const span2b = document.createElement("span");
    span2b.textContent = task.purpose;
    info2.appendChild(span2a);
    info2.appendChild(span2b);
    cardDetails.appendChild(info2);

    // Card buttons
    const cardButtons = document.createElement("div");
    cardButtons.className = "card-buttons";

    const callBtn = document.createElement("button");
    callBtn.textContent = "📞 Call";
    const msgBtn = document.createElement("button");
    msgBtn.textContent = "💬 Message";

    cardButtons.appendChild(callBtn);
    cardButtons.appendChild(msgBtn);
    cardDetails.appendChild(cardButtons);

    // Append cardDetails to card
    card.appendChild(cardDetails);

    // Append card to wherever you want, e.g., card-stack
    document.querySelector(".card-stack").appendChild(card);
  });
}
showCards();

function updateTask() {
  const cards = document.querySelectorAll(".card-stack .cards");

  cards.forEach((card, index) => {
    card.style.zIndex = 3 - index;
    card.style.transform = `translateY(${index * 10}px) scale(${
      1 - index * 0.02
    })`;
    card.style.opacity = `${1 - index * 0.02}`;
  });
}

upBtn.addEventListener("click", () => {
  let lastElemChild = cardStack.lastElementChild;
  if (lastElemChild) {
    cardStack.insertBefore(lastElemChild, cardStack.firstElementChild);
    //update
    updateTask();
  }
});
downBtn.addEventListener("click", () => {
  let firstElemChild = cardStack.firstElementChild;
  if (firstElemChild) {
    cardStack.appendChild(firstElemChild);
    //update
    updateTask();
  }
});

openForm.addEventListener("click", () => {
  console.log("hii")
  formContainer.style.display = "initial";
});

closeForm.addEventListener("click", () => {
  formContainer.style.display = "none";
});
