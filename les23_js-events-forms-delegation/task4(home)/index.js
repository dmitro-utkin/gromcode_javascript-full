const formElem = document.querySelector('.login-form');
const formData = Object.fromEntries(new FormData(formElem));

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', function () {
  if (emailInput.validity.valueMissing || !emailInput.value.includes('@')) {
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }
});

passwordInput.addEventListener('input', function () {
  if (passwordInput.validity.valueMissing) {
    passwordInput.classList.add('invalid');
  } else {
    passwordInput.classList.remove('invalid');
  }
});

const emailError = document.querySelector('.error-text_email');
const passwordError = document.querySelector('.error-text_password');

emailInput.addEventListener('input', function () {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = 'Required';
  } else if (!emailInput.value.includes('@')) {
    emailError.textContent = 'Should be an email';
  } else {
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('input', function () {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = 'Required';
  } else {
    passwordError.textContent = '';
  }
});

formElem.addEventListener('submit', function(event) {
  event.preventDefault();
  const formFields = new FormData(event.target);
  const formData = Object.fromEntries(formFields);
  alert(JSON.stringify(formData, null, 2));
});
