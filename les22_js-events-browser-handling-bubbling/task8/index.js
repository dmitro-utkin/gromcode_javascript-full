// Explain
// document.addEventListener('DOMContentLoaded', function() {
//   const textInput = document.querySelector('.text-input');

//   textInput.addEventListener('change', function(event) {
//     console.log(event.target.value);
//   });
// });

// --------------

const textInput = document.querySelector('.text-input');

const textToConsole = (event) => {
    console.log(event.target.value);
};

textInput.addEventListener('change', textToConsole);