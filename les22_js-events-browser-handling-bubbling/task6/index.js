// Explain
// document.addEventListener('DOMContentLoaded', function() {
//   const singleUseBtn = document.querySelector('.single-use-btn');

//   function handleClick() {
//     console.log('Clicked');
//     singleUseBtn.removeEventListener('click', handleClick);
//   }

//   singleUseBtn.addEventListener('click', handleClick);
// });

// -------------------------------------------

const singleUseBtn = document.querySelector('.single-use-btn');

const clickedToConsole = () => {
    console.log('clicked');
    singleUseBtn.removeEventListener('click', clickedToConsole);
};

singleUseBtn.addEventListener('click', clickedToConsole);