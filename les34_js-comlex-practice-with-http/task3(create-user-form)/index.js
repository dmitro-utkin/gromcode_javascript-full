const serverUrl = 'https://662630a1052332d55321f809.mockapi.io/api/v1/users';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.login-form');
  const submitButton = form.querySelector('.submit-button');

  form.addEventListener('input', function () {
    submitButton.disabled = !form.checkValidity();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      return;
    }

    const formData = Object.fromEntries(new FormData(form));
    fetch(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        alert(JSON.stringify(data, null, 2));
        form.reset();
        submitButton.disabled = true;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
});