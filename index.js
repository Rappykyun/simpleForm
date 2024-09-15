const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("submit");

email.addEventListener("input", validateEmail);
country.addEventListener("input", validateCountry);
zipcode.addEventListener("input", validateZipcode);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirmPassword);

submit.addEventListener("click", (e) => {
  e.preventDefault();
  validateEmail();
  validateCountry();
  validateZipcode();
  validatePassword();
  validateConfirmPassword();
});

function validateEmail() {
  const emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!emailRegex.test(emailValue)) {
    setErrorFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }
}

function validateCountry() {
  const countryValue = country.value.trim();
  if (countryValue === "") {
    setErrorFor(country, "Country cannot be blank");
  } else {
    setSuccessFor(country);
  }
}

function validateZipcode() {
  const zipcodeValue = zipcode.value.trim();
  const zipCodeRegex = /^\d{5}$/;
  if (zipcodeValue === "") {
    setErrorFor(zipcode, "Zipcode cannot be blank");
  } else if (!zipCodeRegex.test(zipcodeValue)) {
    setErrorFor(zipcode, "Zipcode must be 5 digits");
  } else {
    setSuccessFor(zipcode);
  }
}

function validatePassword() {
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "Password must be at least 8 characters");
  } else if (passwordValue.length > 20) {
    setErrorFor(password, "Password must be less than 20 characters");
  } else {
    setSuccessFor(password);
  }
}

function validateConfirmPassword() {
  const confirmPasswordValue = confirmPassword.value.trim();
  const passwordValue = password.value.trim();
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot be blank");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Passwords do not match");
  } else {
    setSuccessFor(confirmPassword);
  }
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  const errorSpan = formControl.querySelector("span");
  errorSpan.textContent = "";
  errorSpan.classList.add("hidden");
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  const errorSpan = formControl.querySelector("span");
  errorSpan.textContent = message;
  errorSpan.classList.remove("hidden");
}
