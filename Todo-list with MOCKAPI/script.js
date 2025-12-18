const inputField = document.getElementById("inputText");
const addBtn = document.querySelector(".addBtn");
const editBtn = document.querySelector(".editBtn");
const delBtn = document.querySelector(".delBtn");

const todoContainer = document.querySelector(".todoContainer");

const API = "https://6943813e69b12460f314d2bf.mockapi.io/api/v1/Todos";

addBtn.addEventListener("click", postData);

async function fetchData() {
  const response = await fetch(API);
  const data = await response.json();
  //   console.log(data);

  if (data) {
    todoContainer.innerHTML = "";
    data.forEach((obj) => {
      let div = document.createElement("div");
      div.className = "todo";
      div.innerHTML = `
      <p class= "paraText">${obj.text}</p>
       <input type="text" id="editText" placeholder="Enter your task..." value='${obj.text}'>

                <div>
                    <button class="delBtn">Delete</button>
                    <button class="editBtn">Edit</button>
                     <button class="saveBtn">Save</button>
                </div>`;

      const deleteBtn = div.querySelector(".delBtn");
      const editBtn = div.querySelector(".editBtn");
      const saveBtn = div.querySelector(".saveBtn");
      const paraText = div.querySelector(".paraText");
      const editText = div.querySelector("#editText");

      deleteBtn.addEventListener("click", () => {
        deleteData(obj.id);
      });

      editBtn.addEventListener("click", () => {
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        paraText.style.display = "none";
        editText.style.display = "inline";
      });

      saveBtn.addEventListener("click", async () => {
        let updateValue = editText.value;
        let response = await updateData(obj.id, updateValue);
        if (response.status === 200) {
          fetchData();
        }
        editBtn.style.display = "inline";
        saveBtn.style.display = "none";
        paraText.style.display = "inline";
        editText.style.display = "none";
      });

      todoContainer.append(div);
    });
  }
}

async function postData() {
  let value = inputField.value;
  //   console.log(value);

  let objData = {
    text: value.trim(),
  };

  const response = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  let data = await response.json();
  //   console.log(data);

  if (response.status == 201) {
    fetchData();
    inputField.value = "";
  }
}

async function updateData(id, value) {
  //   console.log(id, value);

  let objData = {
    text: value.trim(),
  };

  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objData),
  });

  //   let data = await response.json();
  //   console.log(data);

  return response;
}

const deleteData = async (id) => {
  //   console.log(id);
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  //   console.log(response);
  if (response.status === 200) {
    fetchData();
  }
};

fetchData();
