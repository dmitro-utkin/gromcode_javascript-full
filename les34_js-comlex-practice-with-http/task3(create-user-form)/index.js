const serverUrl = 'https://662630a1052332d55321f809.mockapi.io/api/v1/users';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.login-form');
  const submitButton = form.querySelector('.submit-button');

  form.addEventListener('input', function () {
    submitButton.disabled = !form.reportValidity();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(form));
    fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(JSON.stringify(data));
        form.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});