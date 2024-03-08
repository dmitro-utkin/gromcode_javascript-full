// document.addEventListener('DOMContentLoaded', function() {
//     const searchInput = document.querySelector('.search__input');
//     const searchBtn = document.querySelector('.search__btn');
  
//     searchBtn.addEventListener('click', function() {
//       console.log(searchInput.value);
//     });
//   });

// -----------------------------------

const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__btn');

const textToConsole = () => {
    console.log(searchInput.value);
}

searchBtn.addEventListener('click', textToConsole);