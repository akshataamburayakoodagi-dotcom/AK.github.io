// // Getting the form element by its ID
// const form = document.getElementById("loginForm");

// // Getting the Gmail input field
// const username = document.getElementById("username");

// // Getting the password input field
// const password = document.getElementById("password");

// // Getting the place where Gmail error will be shown
// const usernameError = document.getElementById("usernameError");

// // Getting the place where password error will be shown
// const passwordError = document.getElementById("passwordError");

// // Adding submit event to the form
// form.addEventListener("submit", function (event) {
//   // Prevents page refresh when form is submitted
//   event.preventDefault();

//   // Variable to track whether form is valid
//   let isValid = true;

//   // Clear old error messages before checking again
//   usernameError.textContent = "";
//   passwordError.textContent = "";

//   // Pattern for Gmail validation
//   // Must be a proper Gmail ending with @gmail.com
//   const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

//   // Pattern for password validation
//   // Must contain:
//   // at least 1 letter
//   // at least 1 number
//   // at least 1 special character
//   // minimum 6 characters
//   const passwordPattern =
//     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

//   // Check if Gmail field is empty
//   if (username.value.trim() === "") {
//     usernameError.textContent = "Gmail ID cannot be empty.";
//     isValid = false;
//   }
//   // Check if Gmail format is correct
//   else if (!gmailPattern.test(username.value.trim())) {
//     usernameError.textContent =
//       "Enter a valid Gmail address ending with @gmail.com.";
//     isValid = false;
//   }

//   // Check if password field is empty
//   if (password.value.trim() === "") {
//     passwordError.textContent = "Password cannot be empty.";
//     isValid = false;
//   }
//   // Check if password meets required rules
//   else if (!passwordPattern.test(password.value)) {
//     passwordError.textContent =
//       "Password must be at least 6 characters and include a letter, a number, and a special character.";
//     isValid = false;
//   }

//   // If both Gmail and password are valid
//   if (isValid) {
//     alert("Login successful!");
//   }
// });

// Get form and input fields
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

// Get places to show error messages
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

// Hardcoded login credentials
const adminEmail = "admin@gmail.com";
const adminPassword = "Admin@123";

// const userEmail = "user@gmail.com";
// const userPassword = "User@123";


  // Pattern for Gmail validation
  // Must be a proper Gmail ending with @gmail.com
  const userEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // Pattern for password validation
  // Must contain:
  // at least 1 letter
  // at least 1 number
  // at least 1 special character
  // minimum 6 characters
  const userPassword =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;


// Run when form is submitted
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear old errors
  usernameError.textContent = "";
  passwordError.textContent = "";

  const enteredEmail = username.value.trim();
  const enteredPassword = password.value.trim();

  // Check for empty fields
  if (enteredEmail === "") {
    usernameError.textContent = "Gmail ID cannot be empty.";
    return;
  }

  if (enteredPassword === "") {
    passwordError.textContent = "Password cannot be empty.";
    return;
  }
  // Save entered email so next page can use it
  localStorage.setItem("loggedInUser", enteredEmail);

  // Admin login
  if (enteredEmail === adminEmail && enteredPassword === adminPassword) {
    window.location.href = "admin.html";
  }
  // Normal user login
  else{
    window.location.href = "user.html";
  }
});