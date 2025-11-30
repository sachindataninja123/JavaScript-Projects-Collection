let email = document.getElementById("emailInput");
let password = document.getElementById("passwordInput");

let form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  document.getElementById("emailerror").textContent = "";
  document.getElementById("passworderror").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;

  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);
  let isValid = true;

  if (!emailAns) {
    document.getElementById("emailerror").textContent = "Email is incorrect.";
    isValid = false;
  }
  if (!passwordAns) {
    document.getElementById("passworderror").textContent =
      "Password is incorrect.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("message").textContent = "Everything is good!";
  }
});
