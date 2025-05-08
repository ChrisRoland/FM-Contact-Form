const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // if (form) {
  //   const formData = new FormData(form);
  //   const formDataObject = Object.fromEntries(formData.entries());
  //   console.log(formDataObject);
  // } else {
  //   console.error('Form not found!');
  // }

  // Simulate a successful form submission
  setTimeout(() => {
    form.reset();
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
  }, 1000);
});
// Hide success message after 3 seconds
setTimeout(() => {
  successMessage.style.display = "none";
}, 3000);

//handle textarea validation
const textarea = form.querySelector("textarea");
textarea.addEventListener("input", function () {
  if (this.validity.valid) {
    this.classList.remove("error");
    this.nextElementSibling.style.display = "none";
  } else {
    this.classList.add("error");
    this.nextElementSibling.style.display = "block";
  }
});

//Prevent default form validation error message
const inputs = form.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="password"]'
);
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (this.validity.valid) {
      this.classList.remove("error");
      this.nextElementSibling.style.display = "none";
    } else {
      this.classList.add("error");
      this.nextElementSibling.style.display = "block";
    }
  });
});
const preventDefaultValidation = (event) => {
  event.preventDefault();
  const errorMessage = event.target.nextElementSibling;
  errorMessage.style.display = "block";
};
inputs.forEach((input) => {
  input.addEventListener("invalid", preventDefaultValidation);
});
