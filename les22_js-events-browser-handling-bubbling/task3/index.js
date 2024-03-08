// document.addEventListener('DOMContentLoaded', function() {
//     const textInput = document.querySelector('.text-input');
  
//     textInput.addEventListener('change', function() {
//       console.log(textInput.value);
//     });
//   });

//-------------------------------

const textInput = document.querySelector('.text-input');

const textToConsole = () => {
    console.log(textInput.value);
}

textInput.addEventListener('change', textToConsole);