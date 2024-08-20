const baseUrl = 'https://662630a1052332d55321f809.mockapi.io/api/v1/users';

const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');

const onInputChange = () => submitBtnElem.disabled = !formElem.reportValidity()

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
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
      submitBtnElem.setAttribute('disabled', true);
  })
    .catch(error => {
      alert('Failed to create user. Please try again later.');
    });
};

formElem.addEventListener('submit', createUserAndSubmitForm);