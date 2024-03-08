// document.addEventListener('DOMContentLoaded', function() {
//     const buttons = document.querySelectorAll('.btn');
  
//     function handleClick(event) {
//       console.log(event.target.textContent);
//     }
  
//     buttons.forEach(function(button) {
//       button.addEventListener('click', handleClick);
//     });
//   });

// -------------------------------

const buttons = document.querySelectorAll('.btn');

const handleClick = (event) => {
    console.log(event.target.textContent);
}

buttons.forEach(function(button) {
    button.addEventListener('click', handleClick);
});
