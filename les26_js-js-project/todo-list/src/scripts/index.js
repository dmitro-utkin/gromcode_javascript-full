
import { tasks } from './storage.js';
import { renderListItems } from './tasksList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderListItems(tasks);
})


const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find(task => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderListItems(tasks);
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
  renderListItems(tasks);
};

const createBtnElem = document.querySelector('.create-task-btn');
createBtnElem.addEventListener('click', onCreateTask);