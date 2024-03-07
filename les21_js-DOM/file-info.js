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

export function getTitleElement() {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}

getTitleElement();

export function getInputElement() {
  const inputElem = document.querySelector('input[type="text"]');
  console.dir(inputElem);
  return inputElem;
}

getInputElement();
