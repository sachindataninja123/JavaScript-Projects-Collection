const submitBtn = document.querySelector("#submitBtn");
const nameError = document.getElementById("nameErr");
const emailError = document.getElementById("emailErr");
const passwordError = document.getElementById("passwordErr");
const RePasswordErr = document.getElementById("RePasswordErr");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    ReValidationPassword()
  ) {
    alert("Form Submitted SuccessFully");

    document.getElementById("myForm").reset();

    const icons = document.querySelectorAll(".fa-check, .fa-xmark");
    icons.forEach((icon) => {
      icon.classList.remove("fa-check", "fa-xmark");
      icon.style.color = "";
    });
  }
});

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerText = "Name is required!";
    nameError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!name.match(/^[A-Z][a-z]+ [A-Z][a-z]+$/)) {
    nameError.innerText = "Write Full Name!";
    nameError.previousElementSibling.classList.add("fa-xmark");

    return false;
  }

  nameError.innerText = "";
  nameError.previousElementSibling.classList.add("fa-check");
  nameError.previousElementSibling.style.color = "green";
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailError.innerText = "Email is required!";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!email.match(/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/)) {
    emailError.innerText = "Enter Valid Email Address!";
    emailError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  emailError.innerText = "";
  emailError.previousElementSibling.classList.add("fa-check");
  emailError.previousElementSibling.style.color = "green";
  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length == 0) {
    passwordError.innerText = "Password is required!";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{1,30}$/)) {
    passwordError.innerText =
      "Password should contain 8 characters that have 1 Uppercase, 1 Lowercase and 1 Digit !";
    passwordError.previousElementSibling.classList.add("fa-xmark");
    return false;
  }
  passwordError.innerText = "";
  passwordError.previousElementSibling.classList.add("fa-check");
  passwordError.previousElementSibling.style.color = "green";
  return true;
}

function ReValidationPassword() {
  let RePassword = document.getElementById("RePassword").value;
  let password = document.getElementById("password").value;

  if (RePassword !== password) {
    RePasswordErr.innerText = "Password Mismatch!";
    RePasswordErr.previousElementSibling.classList.add("fa-xmark");
    return false;
  } else {
    RePasswordErr.innerText = "";
    RePasswordErr.previousElementSibling.classList.add("fa-check");
    RePasswordErr.previousElementSibling.style.color = "green";
  }

  return true;
}
