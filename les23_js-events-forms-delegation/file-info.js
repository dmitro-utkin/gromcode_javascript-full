// ---------------------------------
// ---------------------------------
// ------------ task 1 -------------
//----------------------------------
// ---------------------------------
/*
Работа с формой из JavaScript
Программист Петя разрабатывает платформу для изучения английского языка. 
  Ему необходимо добавить регистрацию пользователей на сайт. 
  Для этого нужно уметь считывать данные формы
Основные требования:

HTML код:
<main class="page">
  <form class="login-form">
    <h1 class="form-title">Login</h1>
    <div class="form-control">
      <label class="form-label" for="email">Email</label>
      <input
        class="form-input"
        type="email"
        id="email"
        name="email"
        placeholder="mail@example.com"
        required
      />
      <span class="error-text error-text_email"></span>
    </div>
    <div class="form-control">
      <label class="form-label" for="password">Password</label>
      <input class="form-input" type="password" id="password" name="password" required />
      <span class="error-text error-text_password"></span>
    </div>
    <button class="submit-button" type="submit">Submit</button>
  </form>
</main>

CSS стили:
* {
  box-sizing: border-box;
}

main {
  background-color: bisque;
  height: 100vh;
  display: flex;
  font-family: monospace;
  font-size: 16px;
}

form {
  width: 300px;
  background-color: aqua;
  padding: 16px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2);
  margin: auto;
}

.form-title {
  text-align: center;
  text-transform: uppercase;
}

.form-control {
  margin-bottom: 8px;
}

.form-label {
  display: block;
  margin-bottom: 4px;
}

.form-input {
  width: 100%;
  height: 32px;
  border-radius: 4px;
  border: 1px solid grey;
  padding: 4px;
  outline: none;
}

.form-input:invalid {
  border: 3px solid red;
}

.submit-button {
  width: 100%;
  height: 32px;
  text-transform: uppercase;
  border-radius: 4px;
  margin-top: 16px;
  background-color: coral;
  color: white;
}

.error-text {
  color: red;
}

Начальний JavaScript:
// так можно получить данные формы - ВАРИАНТ 1:
// eslint-disable-next-line no-undef
const formFields = [...new FormData(formElem)];
// formFields => [["email", "значение поля email"], ["password", "значение поля password"]]

const formData = formFields.reduce(function (acc, formField) {
  const prop = formField[0]; // здесь "name" инпута
  const value = formField[1]; // здесь "value" инпута
  // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
  // const [prop, value] = formField;
  return {
    // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
    ...acc,
    // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
    [prop]: value,
  };
}, {});

// более простой формат считывания формы - ВАРИАНТ 2:
// const formData = Object.fromEntries(new FormData(formElem));

После подтверждения формы вывести значение полей формы в alert в виде объекта
Формат объекта {"inputName":"inputValue", ...}
Если инпут не удовлетворяет атрибуты валидации, он должен обводиться красной границей
При изменении значений в полях ввода, если значение поля не валидно, нужно показать сообщение про ошибку ввода. Ошибку вывести под соответствующим полем ввода и отобразить красным цветом
Правила валидаций: поле email должно быть не пустое (текст ошибки 'Required') и содержать символ '@' (текст ошибки 'Should be an email')
Правила валидаций: Поле password должно быть не пустое (текст ошибки 'Required')
*/

/*
1. Чтение данных формы:
Для получения данных формы можно использовать два варианта:
Вариант 1:
*/
// const formElem = document.querySelector('.login-form');
// const formFields = [...new FormData(formElem)];
// const formData = formFields.reduce((acc, formField) => {
//   const [prop, value] = formField;
//   return {
//     ...acc,
//     [prop]: value,
//   };
// }, {});
/*
Вариант 2:
*/
const formElem = document.querySelector(".login-form");
const formData = Object.fromEntries(new FormData(formElem));

/*
2. Вывод значений полей формы после подтверждения:
После подтверждения формы, можно вывести значение полей формы в alert в виде объекта:
*/
if (Object.keys(formData).length > 0) {
  alert(JSON.stringify(formData));
}

/*
3. Обводка невалидных полей формы красной границей:
Для обводки невалидных полей формы в красную границу, можно использовать следующий код:
*/
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valueMissing || !emailInput.value.includes("@")) {
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.validity.valueMissing) {
    passwordInput.classList.add("invalid");
  } else {
    passwordInput.classList.remove("invalid");
  }
});

/*
4. Отображение сообщений об ошибках ввода:
Для отображения сообщений об ошибках ввода можно использовать следующий подход:
*/
const emailError = document.querySelector(".error-text_email");
const passwordError = document.querySelector(".error-text_password");

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = "Required";
  } else if (!emailInput.value.includes("@")) {
    emailError.textContent = "Should be an email";
  } else {
    emailError.textContent = "";
  }
});

passwordInput.addEventListener("input", function () {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = "Required";
  } else {
    passwordError.textContent = "";
  }
});

/*
Если форма заполнена валидными данными и пользователь нажимает кнопку "Submit", то можно вывести данные формы в alert с использованием следующего JavaScript кода:
*/
// Выбираем форму
// const formElem = document.querySelector('.login-form');

// Обработчик события отправки формы
formElem.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  const formFields = new FormData(event.target); // Получаем данные формы
  const formData = Object.fromEntries(formFields); // Преобразуем данные формы в объект
  alert(JSON.stringify(formData, null, 2)); // Выводим данные в виде объекта в alert
});
/*
Этот код добавляет обработчик события отправки формы, который предотвращает отправку формы по умолчанию, извлекает данные формы и выводит их в виде объекта в alert, если форма заполнена валидными данными и пользователь нажимает кнопку "Submit".
*/

// ---------------------------------
// ---------------------------------
// ------------ task 2 -------------
//----------------------------------
// ---------------------------------
/*
Делегирование событий
Отобрази координаты выбранного места на стадионе по клику на это мeсто
CSS:
.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
}

.arena {
  display: flex;
}

.sector {
  display: flex;
  flex-direction: column;
  background-color: coral;
  margin: 16px;
}

.sector__line {
  display: flex;
  height: 20px;
  width: 200px;
  align-items: center;
  justify-content: space-around;
}

.sector__seat {
  height: 16px;
  width: 16px;
  background-color: aqua;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  cursor: pointer;
}

.board {
  height: 100px;
  width: 200px;
  background-color: goldenrod;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-transform: uppercase;
}

HTML:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
      integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body class="page">
    <div class="arena"></div>
    <div class="board">
      <span>Selected seat</span>
      <span class="board__selected-seat">-</span>
    </div>
  </body>
</html>

Основные требования:
Отрисуй 3 сектора стадиона по 100 мест в каждом (10 х 10). 
  Сектора нумеруются слева направо (1..3). 
  Места нумеруются слева направо (1..10), ряды (CSS класс .sector__line) сверху вниз (1..10)
По клику мыши по месту, должны отобразиться координаты места в отведенном для этого блоке. Формат текста S 2 - L 7 - S 3. Cледи за пробелами
Секторы - CSS класс .sector, сидения - CSS класс .sector__seat, табло - CSS класс .board
*/

// ---------------------------------
// ---------------------------------
// ------------ task 3 -------------
// - Todo list - create/update task -
// ---------------------------------
// ---------------------------------
/*
Todo List - create/update task
Задача - добавить возможность создавать новую задачу в списке дел и отмечать существующие задачи как выполненные / не выполненные
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Todo List</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
      integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <h1 class="title">Todo List</h1>
    <main class="todo-list">
      <div class="actions">
        <input class="task-input" type="text" />
        <button class="btn create-task-btn">Create</button>
      </div>
      <ul class="list"></ul>
    </main>

    <script src="index.js"></script>
  </body>
</html>

CSS код:
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.title {
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
}

.todo-list {
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  background-color: coral;
  border-radius: 8px;
  padding: 8px;
  max-width: 600px;
  margin: auto;
}

.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin: auto;
  width: 100%;
}

.list__item {
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 8px;
  background-color: wheat;
  margin-bottom: 8px;
  padding: 8px;
}

.list__item_done {
  text-decoration: line-through;
  opacity: 0.7;
}

.list__item:last-child {
  margin-bottom: 0;
}

.list__item-checkbox {
  margin-right: 8px;
}

.btn {
  height: 32px;
  min-width: 64px;
  border: 3px solid #ccc;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  margin-left: 16px;
}

.actions {
  display: flex;
  margin-bottom: 8px;
}

.task-input {
  height: 32px;
  border: 3px solid #ccc;
  border-radius: 8px;
  flex: 1;
}

Початковий JavaScript:
const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
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

// put your code here

В начальнем массиве для тестовых данных должно быть 5 задач, 
  2 любые из которых - выполненные.
При клике на чекбокс, статус дела должен переключаться между выполнено / не выполнено. 
  Соответственно список должен отобразить новое состояние дел
При нажатии на кнопку Create, должна создаться новая запись с текстом 
  из поля ввода и добавиться в список. Если поле пустое, то не добавлять задачу. 
  После успешого добавления нужно почистить поле ввода
Выполненные задачи должны отображаться внизу, не выполненные - сверху

Рекомендации по реализации:
Когда добавляешь / изменяешь задачу - сперва добавь / обнови соответствующий 
  элемент в массиве, где ты хранишь задачи. После этого, заново отрисуй весь список 
  в соответствии с обновленным массивом - вызов функции render
Обязательно назначь каждой задаче в массиве уникальный id. 
  Этот id устанавливай в data-атрибут для чекбокса при рендере. 
  И именно по этому id определяй, у какой именно задачи нужно переключить статус done 
  при клике на checkbox
При рендере задач в качестве дата-атрибута лучше всего использовать id таски, 
  не индексы или что-то другое (!)
Учитывай, что дата-атрибут будет иметь тип данных string

Ключевые цели задачи:
Разобраться с тем как разоботает базовые web-flow по отрисовке/обновлению данных на веб-страницах
Взаимодействие разных функций
Доп практика с ДОМ, ивентами, массивами и объектами
Попрактиковать алгоритм к решению задачи (здесь это критически важно) и качество кода (рефакторинг)
*/
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// ------- початковий варіант -----
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// --------------------------------
// const tasks = [
//   { id: 'task1', text: 'Buy milk', done: false },
//   { id: 'task2', text: 'Pick up Tom from airport', done: false },
//   { id: 'task3', text: 'Visit party', done: false },
//   { id: 'task4', text: 'Visit doctor', done: true },
//   { id: 'task5', text: 'Buy meat', done: true },
// ];

// const listElem = document.querySelector('.list');
// const taskInput = document.querySelector('.task-input');
// const createTaskBtn = document.querySelector('.create-task-btn');

// const renderTasks = tasksList => {
//   listElem.innerHTML = ''; // Clear the list before rendering

//   const sortedTasks = tasksList.sort((a, b) => a.done - b.done);
//   sortedTasks.forEach(({ id, text, done }) => {
//     const listItemElem = document.createElement('li');
//     listItemElem.classList.add('list__item');
//     listItemElem.setAttribute('data-task-id', id); // Set unique id as a data attribute

//     const checkbox = document.createElement('input');
//     checkbox.setAttribute('type', 'checkbox');
//     checkbox.checked = done;
//     checkbox.classList.add('list__item-checkbox');
//     if (done) {
//       listItemElem.classList.add('list__item_done');
//     }
//     checkbox.addEventListener('change', () => toggleTaskStatus(id)); // Toggle task status on checkbox change

//     const taskTextElem = document.createElement('span');
//     taskTextElem.innerText = text;

//     listItemElem.append(checkbox, taskTextElem);
//     listElem.appendChild(listItemElem);
//   });
// };

// createTaskBtn.addEventListener('click', () => {
//   const taskText = taskInput.value.trim();
//   if (taskText) {
//     const newTask = { id: `task${tasks.length + 1}`, text: taskText, done: false };
//     tasks.push(newTask);
//     renderTasks(tasks);
//     taskInput.value = ''; // Clear the input field
//   }
// });

// const toggleTaskStatus = taskId => {
//   const taskIndex = tasks.findIndex(task => task.id === taskId);
//   if (taskIndex !== -1) {
//     tasks[taskIndex].done = !tasks[taskIndex].done;
//     renderTasks(tasks);
//   }
// };

// renderTasks(tasks);


// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----- Працюючий варіант з однією помилкою ----
// ----------------------------------------------
const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");
const taskInput = document.querySelector(".task-input");
const createTaskBtn = document.querySelector(".create-task-btn");

const renderTasks = (tasksList) => {
  listElem.innerHTML = "";

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ id, text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      listItemElem.setAttribute("data-task-id", id);

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      checkbox.addEventListener("change", () => {
        const taskId = listItemElem.getAttribute("data-task-id");
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
          tasks[taskIndex].done = event.target.checked;
          renderTasks(tasks);
        }
      });
      const taskTextElem = document.createElement("span");
      taskTextElem.innerText = text;
      listItemElem.append(checkbox, text);
      listElem.appendChild(listItemElem);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

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

renderTasks(tasks);

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// ---------- Останій виправлений варіант -----------
// --------------------------------------------------
// --------------------------------------------------
const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const taskInput = document.querySelector('.task-input');
const createTaskBtn = document.querySelector('.create-task-btn');


const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      checkbox.addEventListener('change', () => toggleTaskStatus(index)); // Добавление обработчика события для чекбокса
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.innerHTML = ''; // Очистка списка перед обновлением
  listElem.append(...tasksElems); // Обновление списка с новым состоянием дел
};

function toggleTaskStatus(index) {
  tasks[index].done = !tasks[index].done; // Переключение статуса выполнения/невыполнения дела
  renderTasks(tasks); // Повторное отображение списка с обновленным состоянием
}

createTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, done: false });
    renderTasks(tasks);
    taskInput.value = '';
  }
});

renderTasks(tasks);