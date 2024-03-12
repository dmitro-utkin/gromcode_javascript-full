const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const taskInput = document.querySelector(".task-input");
const createTaskBtn = document.querySelector(".create-task-btn");

const renderTasks = tasksList => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      listItemElem.setAttribute("data-task-id", id);
      
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      checkbox.addEventListener("change", () => toggleTaskStatus(id));
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
createTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const newTask = {
      id: `task${tasks.length + 1}`,
      text: taskText,
      done: false,
    };
    tasks.push(newTask);
    renderTasks(tasks);
    taskInput.value = "";
  }
});

const toggleTaskStatus = (taskId) => {
  const taskIndex = tasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    renderTasks(tasks);
  }
};
