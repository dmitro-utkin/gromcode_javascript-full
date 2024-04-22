const baseUrl = 'https://crudcrud.com/api/b83bd80228c44c74aca139bdfb5c83aa/tasks';

const mapTasks = tasks => 
  tasks.map(({ _id, ...rest }) => ({ ...rest, id: _id })
  );
export const getTasksList = () => {
  return fetch(baseUrl)
    .then(response => response.json())
    .then(tasks => mapTasks(tasks));
};

export const createTask = taskData => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(taskData),
  })
};

export const updateTask = (taskId, updatedTaskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(updatedTaskData),
  })
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  })
};