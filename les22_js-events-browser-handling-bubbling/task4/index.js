// // Explain
// document.addEventListener('DOMContentLoaded', function() {
//   const taskStatusCheckbox = document.querySelector('.task-status');

//   taskStatusCheckbox.addEventListener('change', function() {
//     console.log(taskStatusCheckbox.checked);
    
//     // Проверка значения свойства value DOM элемента при разных состояниях чекбокса
//     console.log('Value property:', taskStatusCheckbox.value);
//   });
// });

//--------------------------------------

const taskStatus = document.querySelector('.task-status');

const checkTaskStatus = () => {
    console.log(taskStatus.checked);
    console.log('Value property:', taskStatus.value);
};

taskStatus.addEventListener('change', checkTaskStatus);