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