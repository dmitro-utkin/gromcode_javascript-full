// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 1 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Всплытие и погружение событий
Напишите инструмент для демонстрации работы событий
Основные требования:
CSS:
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  
  .rect {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    align-items: center;
  }
  
  .rect_div {
    width: 300px;
    height: 300px;
    background-color: coral;
    margin-top: 16px;
  }
  
  .rect_p {
    display: flex;
    width: 200px;
    height: 200px;
    background-color: aqua;
  }
  
  .rect_span {
    display: flex;
    width: 100px;
    height: 100px;
    background-color: wheat;
  }
  
  .events-list {
    display: flex;
    flex: 1;
    height: 100px;
    border: 3px solid #ccc;
    margin: 16px;
    flex-direction: row;
    overflow-x: auto;
    padding: 8px;
    justify-content: start;
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
HTML:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Events propagation</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css"
      integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <div class="rect rect_div">
      div
      <p class="rect rect_p">
        p
        <span class="rect rect_span">span</span>
      </p>
    </div>
    <div class="rect events-list">
      <!-- this spans are generated with clicks -->
      <span style="color: grey; margin-left: 8px">div</span>
      <span style="color: grey; margin-left: 8px">p</span>
      <span style="color: green; margin-left: 8px">p</span>
      <span style="color: green; margin-left: 8px">div</span>
    </div>
    <button class="btn clear-btn">Clear</button>
    <button class="btn remove-handlers-btn">Remove handleds</button>
    <button class="btn attach-handlers-btn">Attach handleds</button>
    <script src="index.js"></script>
  </body>
</html>
По клику на квадрат в списке попадает список элементов, на которых сработали обработчики: серый - на погружении, зеленый - на всплытии. Добавляйте в .events-list спаны вида <span style="color: grey; margin-left: 8px;">div</span>
По умолчанию .events-list должен быть пуст
Кнопка "Clear" чистит поле с событиями
Кнопка "Attach handlers" включает обработчики для квадратов
Кнопка "Remove handlers" выключает обработчики для квадратов
По умолчанию все обработчики должны быть включены
*/

// const divElem = document.querySelector('.rect_div');
// const pElem = document.querySelector('.rect_p');
// const spanElem = document.querySelector('.rect_span');

// const logTarget = (text, color) => {
//     const eventsListElem = document.querySelector('.events-list');
//     eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
// }

// const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
// const logGreenP = logTarget.bind(null, 'P', 'green');
// const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

// const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
// const logGreyP = logTarget.bind(null, 'P', 'grey');
// const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// divElem.addEventListener('click', logGreyDiv, true);
// divElem.addEventListener('click', logGreenDiv);

// pElem.addEventListener('click', logGreyP, true);
// pElem.addEventListener('click', logGreenP);

// spanElem.addEventListener('click', logGreySpan, true);
// spanElem.addEventListener('click', logGreenSpan);

// // ----------------------------------------------------

// const clearedField = document.querySelector('.clear-btn');
// const attachedHandlers = document.querySelector('.attach-handlers-btn');
// const removedHandlers = document.querySelector('.remove-handlers-btn');

// // Attach the event handlers
// function attachHandlers() {
//     divElem.addEventListener('click', logGreyDiv, true);
//     divElem.addEventListener('click', logGreenDiv);

//     pElem.addEventListener('click', logGreyP, true);
//     pElem.addEventListener('click', logGreenP);

//     spanElem.addEventListener('click', logGreySpan, true);
//     spanElem.addEventListener('click', logGreenSpan);
// }

// // Remove the event handlers
// function removeHandlers() {
//     divElem.removeEventListener('click', logGreyDiv, true);
//     divElem.removeEventListener('click', logGreenDiv);

//     pElem.removeEventListener('click', logGreyP, true);
//     pElem.removeEventListener('click', logGreenP);

//     spanElem.removeEventListener('click', logGreySpan, true);
//     spanElem.removeEventListener('click', logGreenSpan);
// }

// // Function to clear the events-list
// function clearEventsList() {
//     const eventsList = document.querySelector('.events-list');
//     eventsList.innerHTML = '';
// }

// // Add event listeners to the buttons
// clearedField.addEventListener('click', clearEventsList);
// attachedHandlers.addEventListener('click', attachHandlers);
// removedHandlers.addEventListener('click', removeHandlers);

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 2 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Обработка события 'click'
Добавьте обработчик на клик по кнопке
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event handler</title>
  </head>

  <body>
    <button class="create-btn">Create</button>

    <script src="index.js"></script>
  </body>
</html>
Повесьте обработчик события 'click' на кнопку с классом .create-btn
Для назначения обработчика используйте addEventListener
При клике на кнопку выведите в alert текст done
*/
// const btnElem = document.querySelector('.create-btn');

// const alertDone = () => {
//     alert('done');
// }

// btnElem.addEventListener('click', alertDone)

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 3 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Обработка события 'change'
Добавьте обработчик на изменение текста в инпуте
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Change handler</title>
  </head>

  <body>
    <input type="text" class="text-input" />

    <script src="index.js"></script>
  </body>
</html>
Повесьте обработчик события 'change' на инпут с классом .text-input
Для назначения обработчика используйте addEventListener
При вводе текста в поле ввода текст из инпута нужно вывести в консоль
Текст из инпута можно получить через свойство value DOM элемента (inputElem.value)
*/
// const textInput = document.querySelector('.text-input');

// const textToConsole = () => {
//     console.log(textInput.value);
// }

// textInput.addEventListener('change', textToConsole);

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 4 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Handle event for checkbox
Попрактикуемся с обработчиками на изменение состояния чекбокса
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Change handler</title>
  </head>

  <body>
    <input type="checkbox" class="task-status" />

    <script src="index.js"></script>
  </body>
</html>
Повесь обработчик события 'change' на чекбокс с классом .task-status
Для назначения обработчика используй addEventListener
При клике на чекбокс выводите в консоль его состояние - true, если чекбокс отмечен и false, если нет
Состояние (true / false) чекбокса  можно получить через свойство checked DOM элемента
Ради интереса, проверь, чему равно значение свойства value DOM элемента (checkboxElem.value) при разном состоянии чекбокса
*/
// const taskStatus = document.querySelector('.task-status');

// const checkTaskStatus = () => {
//     console.log(taskStatus.checked);
//     console.log('Value property:', taskStatus.value);
// };

// taskStatus.addEventListener('change', checkTaskStatus);

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 4 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*