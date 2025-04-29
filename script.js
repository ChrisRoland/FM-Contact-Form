const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Simulate a successful form submission
  setTimeout(() => {
    form.reset();
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
  }, 1000);

});

// Simulate an error message
setTimeout(() => {
  successMessage.style.display = "none";
  errorMessage.style.display = "block";
}, 2000);


