// Explain
// document.addEventListener('DOMContentLoaded', function() {
//   const taskStatus = document.querySelector('.task-status');

//   taskStatus.addEventListener('change', function(event) {
//     console.log(event.target.checked);
//   });
// });

// --------------------------------------------

const taskStatus = document.querySelector('.task-status');

const checkTaskStatus = (event) => {
    console.log(event.target.checked);
};

taskStatus.addEventListener('change', checkTaskStatus);