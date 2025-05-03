// const form = document.getElementById("form");
// const successMessage = document.getElementById("success-message");
// const errorMessage = document.getElementById("error-message");
// const submitButton = document.getElementById("submit-button");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Simulate a successful form submission
//   setTimeout(() => {
//     form.reset();
//     successMessage.style.display = "block";
//     errorMessage.style.display = "none";
//   }, 1000);

// });

// // Simulate an error message
// // setTimeout(() => {
// //   successMessage.style.display = "none";
// //   errorMessage.style.display = "block";
// // }, 2000);


  // JavaScript code to handle form submission and success/error messages
  const form = document.getElementById('form');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulate a successful form submission
    setTimeout(() => {
      form.reset();
      successMessage.style.display = 'block';
      errorMessage.style.display = 'none';
    }, 1000);
  });
  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);

//   //handle form validation error state
//   const inputs = form.querySelectorAll('input, textarea');
//   inputs.forEach((input) => {
//     input.addEventListener('input', function () {
//       if (this.validity.valid) {
//         this.classList.remove('error');
//         this.nextElementSibling.style.display = 'none';
//       } else {
//         this.classList.add('error');
//         this.nextElementSibling.style.display = 'block';
//       }
//     });
//   });
//   //handle radio button validation
//   const radioButtons = form.querySelectorAll('input[type="radio"]');
//   radioButtons.forEach((radio) => {
//     radio.addEventListener('change', function () {
//       const radioGroup = this.closest('.form-group-radio');
//       const errorMessage = radioGroup.querySelector('small');
//       if (this.checked) {
//         errorMessage.style.display = 'none';
//       }
//     });
//   });
//   //handle checkbox validation
//   const checkbox = form.querySelector('input[type="checkbox"]');
//   checkbox.addEventListener('change', function () {
//     const errorMessage = document.querySelector('.error-state');
//     if (this.checked) {
//       errorMessage.style.display = 'none';
//     } else {
//       errorMessage.style.display = 'block';
//     }
//   });
  //handle textarea validation
  const textarea = form.querySelector('textarea');
  textarea.addEventListener('input', function () {
    if (this.validity.valid) {
      this.classList.remove('error');
      this.nextElementSibling.style.display = 'none';
    } else {
      this.classList.add('error');
      this.nextElementSibling.style.display = 'block';
    }
  });

  //Prevent default form validation error message
  const preventDefaultValidation = (event) => {
    event.preventDefault();
    const errorMessage = event.target.nextElementSibling;
    errorMessage.style.display = 'block';
  };
  inputs.forEach((input) => {
    input.addEventListener('invalid', preventDefaultValidation);
  });