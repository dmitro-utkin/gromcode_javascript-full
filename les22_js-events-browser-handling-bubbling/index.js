const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`
    // eventsListElem.textContent += `<span style="color: ${color}; margin-left: 8px">${text}</span>`
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// Фаза погруженія (перехвата) - capturing
// divElem.addEventListener('click', logGreyDiv, { capture: true });
// pElem.addEventListener('click', logGreyP, true); // короткий запис(просто 3-й аргумент = true)
// spanElem.addEventListener('click', logGreySpan, true);

// фаза целі - target

// Фаза всплитія - bubbling
// divElem.addEventListener('click', logGreenDiv);
// pElem.addEventListener('click', logGreenP);
// pElem.addEventListener('click', event => {
//     logGreenP();
//     event.stopPropagation();
// });
// spanElem.addEventListener('click', logGreenSpan);

divElem.addEventListener('click', logGreyDiv, { capture: true });
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);




// Додавання обробника подій
// elem.addEventListener('click', () => {
//     console.log('div');
// });

// const handler = () => {
//     console.log('div1');
// }

// elem.addEventListener('click', () => {
//     console.log('div1');
// });

// // Видалення обробника подій
// elem.removeEventListener('click', () => {
//     console.log('div1');
// });

// Так буде працювать не коректно, тому що функцію краще винести в окрему константу
// elem.addEventListener('click', () => {
//     console.log('div1');
// });

// const handler = () => {
//     console.log('div');
// }

// elem.addEventListener('click', handler);

// elem.removeEventListener('click', handler);
