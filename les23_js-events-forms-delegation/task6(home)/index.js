/*
Рішення яке працює.
*/

// const tasks = [
//   { text: "Buy milk", done: false, id: "1" },
//   { text: "Pick up Tom from airport", done: false, id: "2" },
//   { text: "Visit party", done: false, id: "3" },
//   { text: "Visit doctor", done: true, id: "4" },
//   { text: "Buy meat", done: true, id: "5" },
// ];

// const listElem = document.querySelector(".list");
// const taskInput = document.querySelector(".task-input");
// const createTaskBtn = document.querySelector(".create-task-btn");

// const renderTasks = (tasksList) => {
//   listElem.innerHTML = "";

//   const tasksElems = tasksList
//     .sort((a, b) => a.done - b.done)
//     .map(({ id, text, done }) => {
//       const listItemElem = document.createElement("li");
//       listItemElem.classList.add("list__item");
//       listItemElem.setAttribute("data-task-id", id);

//       const checkbox = document.createElement("input");
//       checkbox.setAttribute("type", "checkbox");
//       checkbox.setAttribute("id", id);
//       checkbox.checked = done;
//       checkbox.classList.add("list__item-checkbox");
//       if (done) {
//         listItemElem.classList.add("list__item_done");
//       }
//       checkbox.addEventListener("change", toggleTaskStatus);
//       const taskTextElem = document.createElement("span");
//       taskTextElem.innerText = text;
//       listItemElem.append(checkbox, text);
//       listElem.appendChild(listItemElem);

//       return listItemElem;
//     });

//   listElem.append(...tasksElems);
// };

// // put your code here
// createTaskBtn.addEventListener("click", () => {
//   const taskText = taskInput.value.trim();
//   if (taskText) {
//     const newTask = {
//       id: `task${tasks.length + 1}`,
//       text: taskText,
//       done: false,
//     };
//     tasks.push(newTask);
//     renderTasks(tasks);
//     taskInput.value = "";
//   }
// });

// function toggleTaskStatus(e) {
//   const taskIndex = tasks.findIndex((task) => task.id === e.target.id);
//   if (taskIndex !== -1) {
//     tasks[taskIndex].done = !tasks[taskIndex].done;
//     renderTasks(tasks);
//   }
// }

// renderTasks(tasks);

// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // ------------------------------------
// // -------- Рішення, яке дав ментор ---
// // ------ для проходження тесту -------
// // ------------------------------------
// // ------------------------------------
const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false, id: '1' },
  { text: 'Pick up Tom from airport', done: false, id: '2' },
  { text: 'Visit party', done: false, id: '3' },
  { text: 'Visit doctor', done: true, id: '4' },
  { text: 'Buy meat', done: true, id: '5' },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderTasks(tasks);
};

listElem.addEventListener('click', onToggleTask);

const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }
  taskTitleInputElem.value = '';

  tasks.push({
    text,
    done: false,
    id: Math.random().toString(),
  });
  renderTasks(tasks);
};

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);