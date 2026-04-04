// Getting the form element by its ID
const form = document.getElementById("loginForm");

// Getting the Gmail input field
const username = document.getElementById("username");

// Getting the password input field
const password = document.getElementById("password");

// Getting the place where Gmail error will be shown
const usernameError = document.getElementById("usernameError");

// Getting the place where password error will be shown
const passwordError = document.getElementById("passwordError");

// Adding submit event to the form
form.addEventListener("submit", function (event) {
  // Prevents page refresh when form is submitted
  event.preventDefault();

  // Variable to track whether form is valid
  let isValid = true;

  // Clear old error messages before checking again
  usernameError.textContent = "";
  passwordError.textContent = "";

  // Pattern for Gmail validation
  // Must be a proper Gmail ending with @gmail.com
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // Pattern for password validation
  // Must contain:
  // at least 1 letter
  // at least 1 number
  // at least 1 special character
  // minimum 6 characters
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

  // Check if Gmail field is empty
  if (username.value.trim() === "") {
    usernameError.textContent = "Gmail ID cannot be empty.";
    isValid = false;
  }
  // Check if Gmail format is correct
  else if (!gmailPattern.test(username.value.trim())) {
    usernameError.textContent =
      "Enter a valid Gmail address ending with @gmail.com.";
    isValid = false;
  }

  // Check if password field is empty
  if (password.value.trim() === "") {
    passwordError.textContent = "Password cannot be empty.";
    isValid = false;
  }
  // Check if password meets required rules
  else if (!passwordPattern.test(password.value)) {
    passwordError.textContent =
      "Password must be at least 6 characters and include a letter, a number, and a special character.";
    isValid = false;
  }

  // If both Gmail and password are valid
  if (isValid) {
    alert("Login successful!");
  }
});