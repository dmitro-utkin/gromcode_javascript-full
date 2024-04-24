// const serverUrl = 'https://662630a1052332d55321f809.mockapi.io/api/v1/users';

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.querySelector('.login-form');
//   const submitButton = form.querySelector('.submit-button');

//   form.addEventListener('input', function () {
//     submitButton.disabled = !form.reportValidity();
//   });

//   form.addEventListener('submit', function (event) {
//     event.preventDefault();

//     if (!form.reportValidity()) {
//       return;
//     }

//     const formData = Object.fromEntries(new FormData(form));
//     return fetch(serverUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         alert(JSON.stringify(data, null, 2));
//         form.reset();
//         submitButton.disabled = true;
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   });
// });

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');
const nameInput = document.querySelector('[name="name"]');

const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const onInputChange = () => {
  const isValidForm = formElem.reportValidity();
  if (isValidForm) {
    submitBtnElem.removeAttribute('disabled');
  } else {
    submitBtnElem.setAttribute('disabled', true);
  }
};

emailInput.addEventListener('input', onInputChange);
passwordInput.addEventListener('input', onInputChange);
nameInput.addEventListener('input', onInputChange);

const baseUrl = 'https://662630a1052332d55321f809.mockapi.io/api/v1/users';

const createUser = userData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  });
};

const clearForm = () => {
  emailInput.value = '';
  passwordInput.value = '';
  nameInput.value = '';
};

const onError = () => {
  errorElem.textContent = 'Failed to create user';
};

const onFormSubmit = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  createUser(formData)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      clearForm();
    })
    .catch(onError);
};

formElem.addEventListener('submit', onFormSubmit);