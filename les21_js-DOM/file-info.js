// Document Object Model (DOM)
/*
$0 - останій вибраний елемент на сторінці
$0.parentNode - батьківський елемент останього вибраного елемента

window.innerHeight - можна узать висоту документа
window.innerWidth - можна узать ширину документа

$0.clientWidth - можна узать ширину останього елемента
$0.clientHeight - можна узать висоту останього елемента

$0.scrollIntoView() - вибраний елемент підніметься вгору
window.scrollTo(0, 50) - підніме документ на початок сторінки
window.scrollBy(0, 50) - листатиме то сторінку по 50рх вниз
pageYOfset - нинішнє положення scroll на сторінці

$0.getClientRects() - відображає ін-ію про елемент , який вибраний

У об'єкта 'window' велика кількість об'єктів і методів, якими можна користуватися 
і які специфічні саме для браузера (на сервері цього немає)

document.querySelector('.mw-headline')                      -таким чином знайдемо перший елемент з таким класом 
document.querySelectorAll('.mw-headline')                   -таким чином отримаємо колекцію елементів з такою назвою
document.querySelectorAll('.mw-headline').map               -це саме колекція а не масив, тому методів масивів тут немає
                                                            -це псевдомасив і щоб пройтись по ньому існує кілька способів
                                                            -старий спосіб - це заімствованіє методів,
[...document.querySelectorAll('.mw-headline')].map          -цей псевдомасив преобразувать в масив за допомогою спред-оператора
Array.from(document.querySelectorAll('.mw-headline')).map   -або статичного метода масива Array.from

document.getElementById() - шукає елемент по ID

старі методи:
  document.getElementByName();
  document.getElementByTagName();
  document.getElementByClassName();
*/

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 2 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Поиск элемента на странице
С помощью JavaScript найдите элемент на странице
Основные требования:
  HTML находится в редакторе ниже
  DOM элементы на странице ищите с помощью метода document.querySelector
  Напишите ф-цию getTitleElement, которая найдет на странице элемент с классом .title, 
    выведет найденый элемент в консоль с помощью console.dir(titleElem) и вернет его
  Напишите ф-цию getInputElement, которая найдет на странице input c типом text 
    выведет найденый элемент в консоль с помощью console.dir(inputElem) и вернет его
  Ф-ции должны быть в файле index.js и экспортироваться из него под своими именами
  <body>
  <h1 class="title">Todo List</h1>
  <main class="todo-list">
    <div class="actions">
      <input class="task-input" type="text" />
      <button class="btn create-task-btn">Create</button>
    </div>
    <ul class="list">
      <!-- Элементы списка должны генерироваться и добавлятся на страницу с помощью JavaScript -->
      <li class="list__item">
        <input type="checkbox" class="list__item-checkbox" />
        Buy milk
      </li>
      <!-- ... -->
      <li class="list__item list__item_done">
        <input type="checkbox" class="list__item-checkbox" />
        Visit doctor
      </li>
      <!-- ... -->
    </ul>
  </main>
</body>
*/

// export function getTitleElement() {
//   const titleElem = document.querySelector('.title');
//   console.dir(titleElem);
//   return titleElem;
// }

// getTitleElement();

// export function getInputElement() {
//   const inputElem = document.querySelector('input[type="text"]');
//   console.dir(inputElem);
//   return inputElem;
// }

// getInputElement();

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 3 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Поиск нескольких элементов на странице
С помощью JavaScript найдите все элементы на странице, которые удовлетворяют условие селектора
Основные требования:
HTML код:
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM elements</title>
  </head>

  <body>
    <ul>
      <li class="technology">HTML</li>
      <li class="technology">CSS</li>
      <li class="technology">React</li>
      <li class="technology">Redux</li>
    </ul>
    <ul>
      <li class="tool">Webpack</li>
      <li class="tool">npm</li>
      <li class="tool">ESLint</li>
      <li class="tool">Babel</li>
    </ul>
    <script src="index.js"></script>
  </body>
  </html>
DOM элементы на странице ищите с помощью метода document.querySelectorAll
Напишите ф-цию getItemsList, которая найдет на странице все элементы с классом .technology
  , выведет полученные элементы в консоль с помощью console.dir(elementsList) и вернет список из ф-ции
Напишите ф-цию getItemsArray, которая найдет на странице все элементы с классом .tool
  , преобразует полученный список в массив, выведет этот массив в консоль с помощью 
  console.dir(elementsArray) и вернет массив из ф-ции. Преобразуйте полученный список 
  (NodeList) в массив с помощь Array.from
Ф-ции должны быть в файле index.js и экспортироваться из него под своими именами
*/
// Функция getItemsList ищет на странице все элементы с классом .technology
// и выводит полученные элементы в консоль с помощью console.dir
// Затем она возвращает список из функции
// export function getItemsList() {
//   const elementsList = document.querySelectorAll('.technology');
//   console.dir(elementsList);
//   return elementsList;
//  }

//  // Функция getItemsArray ищет на странице все элементы с классом .tool
//  // и преобразует полученный список в массив
//  // Затем выводит этот массив в консоль с помощью console.dir
//  // и возвращает массив из функции
//  // Для преобразования полученного списка (NodeList) в массив используем Array.from
//  export function getItemsArray() {
//   const elementsArray = Array.from(document.querySelectorAll('.tool'));
//   console.dir(elementsArray);
//   return elementsArray;
//  }

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 4 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Получение содержимого элемента
С помощью JavaScript найдите элемент на странице и получите его содержимое
Основные требования:
HTML код:
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM elements</title>
  </head>

  <body>
    <h1 class="title">I am <i>Front-End</i> developer</h1>
    <p class="about">I am good at <code>HTML / CSS</code> and <code>JavaScript</code></p>
    <p class="plans">I will learn <b>Redux</b> and <b>React</b> soon</p>
    <p class="goal">And will become <b>world class</b> software engineer in a year</p>

    <script type="module" src="./index.js"></script>
  </body>
</html>
DOM элементы на странице ищите с помощью метода document.querySelector
Напишите ф-цию getTitle, которая найдет на странице элемент с классом .title
  и вернет его текстовый контент с помощью textContent
Напишите ф-цию getDescription, которая найдет на странице элемент с классом .about
  и вернет его текстовый контент с помощью innerText
Напишите ф-цию getPlans, которая найдет на странице элемент с классом .plans
  и вернет его текстовый контент с помощью innerHTML
Напишите ф-цию getGoal, которая найдет на странице элемент с классом .goal
  и вернет его текстовый контент с помощью outerHTML
Ф-ции должны быть в файле index.js и экспортироваться из него под своими именами
*/

// // Функция getTitle ищет на странице элемент с классом .title
// // и возвращает его текстовый контент с помощью textContent
// export function getTitle() {
//   const titleElement = document.querySelector(".title");
//   return titleElement.textContent;
// }

// // Функция getDescription ищет на странице элемент с классом .about
// // и возвращает его текстовый контент с помощью innerText
// export function getDescription() {
//   const descriptionElement = document.querySelector(".about");
//   return descriptionElement.innerText;
// }

// // Функция getPlans ищет на странице элемент с классом .plans
// // и возвращает его текстовый контент с помощью innerHTML
// export function getPlans() {
//   const plansElement = document.querySelector(".plans");
//   return plansElement.innerHTML;
// }

// // Функция getGoal ищет на странице элемент с классом .goal
// // и возвращает его текстовый контент с помощью outerHTML
// export function getGoal() {
//   const goalElement = document.querySelector(".goal");
//   return goalElement.outerHTML;
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 5 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Update text content
С помощью JavaScript найди элемент на странице и вставьте туда текст
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM elements</title>
  </head>

  <body>
    <h1 class="title">I am <i>Front-End</i> developer</h1>
    <script src="index.js"></script>
  </body>
</html>
DOM элементы на странице ищи с помощью метода document.querySelector
Напиши ф-цию setTitle, которая принимает единственный аргумент text (строка). 
  setTitle должна найти на странице элемент с классом .title и установить в него заданный текст
Текст вставляй с помощью textContent
Ф-ция должна быть в файле index.js и экспортироваться из него под своим именем
*/

// Функция setTitle принимает единственный аргумент text (строка)
// Находит на странице элемент с классом .title и устанавливает в него заданный текст
// Текст вставляется с помощью textContent
// export function setTitle(text) {
//   const titleElement = document.querySelector(".title");
//   titleElement.textContent = text;
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 6 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Установка дочерних элементов
С помощью JavaScript найдите элемент задайте ему дочерние элементы
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM elements</title>
    <script src="index.js"></script>
  </head>

  <body></body>
</html>
DOM элементы на странице ищите с помощью метода document.querySelector
Напишите ф-цию setButton, которая принимает единственный аргумент buttonText(строка)
setButton должна найти на странице элемент body и установит в него строку '<button>button text</button>'
  , где button text - это строка, полученная в аргументе ф-ции
Содержимое body устанавливайте с помощью innerHTML
Ф-ция должна быть в файле index.js и экспортироваться из него под своим именем
Дополнительно. Попробуйте вставить ту же строку в body, но с помощью textContent.
  Как видите, innerHTML создал HTML кнопку, а textContent вставил текст "как есть"
*/
// Функция setButton принимает единственный аргумент buttonText (строка)
// Находит на странице элемент body и устанавливает в него строку '<button>button text</button>',
// где button text - это строка, полученная в аргументе функции
// Содержимое body устанавливается с помощью innerHTML
// export function setButton(buttonText) {
//   const bodyElement = document.querySelector("body");
//   bodyElement.innerHTML = `<button>${buttonText}</button>`;

//   // Дополнительно: вставляем ту же строку в body, но с помощью textContent
//   const buttonTextElement = document.createElement("button");
//   buttonTextElement.textContent = buttonText;
//   bodyElement.appendChild(buttonTextElement);
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 7 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Очистка элемента
С помощью JavaScript найдите элемент на странице и удалите его содержимое
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clear element content</title>
  </head>

  <body>
    <ul class="categories">
      <li class="tool">Cars</li>
      <li class="tool">Planes</li>
      <li class="tool">Ships</li>
      <li class="tool">Bicycles</li>
    </ul>
  </body>
</html>
DOM элементы на странице ищите с помощью метода document.querySelector
Напишите ф-цию clearList, которая должна найти на странице элемент .categories
  и установить его содержимое как пустую строку '' с помощью innerHTML
Как видите, это один из способов удалить содержимое элемента
Ф-ция должна быть в файле index.js и экспортироваться из него под своим именем
*/
// // Функция clearList ищет на странице элемент .categories
// // и устанавливает его содержимое как пустую строку ''
// // с помощью innerHTML
// export function clearList() {
//   const categoriesElement = document.querySelector(".categories");
//   categoriesElement.innerHTML = "";
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 8 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Создание DOM элементов и вставка на страницу
С помощью JavaScript создайте DOM элемент и добавьте его на страницу
Основные требования:
HTML код:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Clear element content</title>
  </head>

  <body>
    <ul class="categories">
      <li class="tool">Cars</li>
      <li class="tool">Planes</li>
      <li class="tool">Ships</li>
      <li class="tool">Bicycles</li>
    </ul>
  </body>
</html>

Напишите ф-цию createButton, которая принимает единственный аргумент buttonText(строка)
createButton должна создать DOM элемент button c помощью document.createElement
  и вставить его в body с помощью append. Текст кнопки передается в аргументе ф-ции createButton
Ф-ция должна быть в файле index.js и экспортироваться из него под своим именем
Используйте textContent для назначения текста кнопке
Пример работы: createButton('Send Email') добавит <button>Send Email</button> в тело документа
*/
// // Функция createButton принимает единственный аргумент buttonText (строка)
// // Создает DOM элемент button с помощью document.createElement
// // Вставляет его в body с помощью appendChild. Текст кнопки передается в аргументе функции createButton
// export function createButton(buttonText) {
//   const buttonElement = document.createElement("button");
//   buttonElement.textContent = buttonText;
//   document.body.appendChild(buttonElement);
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 9 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Создание DOM элементов и вставка на страницу - 2
С помощью JavaScript создайте недостающие элементы списка и добавьте их на свои места, чтобы дополнить список
Основные требования:
Стартовый HTML:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add elements to the DOM</title>
  </head>

  <body>
    <ul class="list">
      <li>2</li>
      <li>3</li>
      <li class="special">5</li>
      <li>7</li>
    </ul>
    <script src="index.js" type="module"></script>
  </body>
</html>

Напишите ф-цию finishList, которая должна создать и добавить в список недостающие элементы
Используйте document.createElement для создания элементов списка
Текст в созданные элементы вставляйте с помощью textContent
Используйте методы append, prepend, before, after для вставки элементов на страницу
После того, как ф-ция отработает, должен получиться список от 1 до 8.
Ф-ция должна быть в файле index.js и экспортироваться из него под своим именем
*/
// // Функция finishList создает и добавляет в список недостающие элементы, чтобы дополнить список
// // The finishList function creates and adds the missing list elements to complete the list
// export function finishList() {
//   const list = document.querySelector(".list");

//   const newElement1 = document.createElement("li");
//   newElement1.textContent = "1";
//   list.prepend(newElement1);

//   const newElement2 = document.createElement("li");
//   newElement2.textContent = "4";
//   list.children[2].after(newElement2);

//   const newElement3 = document.createElement("li");
//   newElement3.textContent = "6";
//   list.children[4].after(newElement3);

//   const newElement4 = document.createElement("li");
//   newElement4.textContent = "8";
//   list.append(newElement4);
// }

// ---------------------------------------------------------------
// ---------------------------------------------------------------
// --------------------------- task 10 ----------------------------
// ---------------------------------------------------------------
// ---------------------------------------------------------------
/*
Установка атрибутов для DOM элементов
С помощью JavaScript создай недостающие элементы формы
Основные требования:
Стартовый HTML:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Setting attributes</title>
  </head>

  <body>
    <form class="login-form">
      <input type="text" name="password" />
    </form>
    <script src="index.js" type="module"></script>
  </body>
</html>
Напиши функцию finishForm, которая должна дополнить логин форму
finishForm должна вставить в начало формы инпут текстового типа с name="login"
finishForm должна изменить атрибут type с text на password для инпута с паролем
Функция должна быть в файле index.js и экспортироваться из него под своим именем
*/
// The finishForm function creates and inserts the missing form elements
// It also modifies the attribute type for the password input
export function finishForm() {
  const loginForm = document.querySelector(".login-form");

  // Create and insert input for login name
  const loginInput = document.createElement("input");
  loginInput.setAttribute("type", "text");
  loginInput.setAttribute("name", "login");
  loginForm.prepend(loginInput);

  // Modify the attribute type for the password input
  const passwordInput = loginForm.querySelector('input[name="password"]');
  passwordInput.setAttribute("type", "password");
}
