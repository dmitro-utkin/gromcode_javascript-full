const baseUrl = 'https://662630a1052332d55321f809.mockapi.io/api/v1/users';

const inputElems = document.querySelectorAll('.form-input');
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

formElem.addEventListener('input', onInputChange)

const createUserAndSubmitForm = event => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(formElem));

  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (response.ok) {
        return response.json().then(data => {
          alert(JSON.stringify(data));
          formElem.reset();
        });
      } 
      else {
        return response.json().then(errorData => {
          alert(`Error creating user: ${errorData.message}`);
        });
      }
    })
    .catch(error => {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again later.');
    });
};

formElem.addEventListener('submit', createUserAndSubmitForm);