import { getItem, setItem, createEvent } from "../common/storage.js";
import { renderEvents } from "./events.js";
import { getDateTime } from "../common/time.utils.js";
import { closeModal } from "../common/modal.js";

export const eventFormElem = document.querySelector(".event-form");
const closeEventFormBtn = document.querySelector(".create-event__close-btn");

function clearEventForm() {
  eventFormElem.reset();
}

function onCloseEventForm() {
  closeModal();
  clearEventForm();
}
async function onCreateEvent(event) {
  event.preventDefault();
  const formData = new FormData(eventFormElem);

  const title = formData.get('title');
  const description = formData.get('description');
  const date = formData.get('date');
  const startTime = formData.get('startTime');
  const endTime = formData.get('endTime');

  const start = getDateTime(date, startTime);
  const end = getDateTime(date, endTime);

  const eventDetails = {
    title,
    description,
    start,
    end,
    date,
  };

  const events = getItem('events') || [];

  const response = await createEvent(eventDetails);

  if (response.ok) {
    events.push(await response.json());
    setItem('events', events);
  } else {
    console.error('Failed to create event:', response.statusText);
  }

  onCloseEventForm();
  renderEvents();
}

export function initEventForm() {
  eventFormElem.addEventListener("submit", onCreateEvent);
  closeEventFormBtn.addEventListener("click", onCloseEventForm);
}


















// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------
// ------------------------------------------------------





// import { getItem, setItem, createEvent } from "../common/storage.js";
// import { renderEvents } from "./events.js";
// import { getDateTime } from "../common/time.utils.js";
// import { closeModal } from "../common/modal.js";

// const eventFormElem = document.querySelector(".event-form");
// const closeEventFormBtn = document.querySelector(".create-event__close-btn");

// function clearEventForm() {
//   // ф-ция должна очистить поля формы от значений
//   eventFormElem.reset();
// }

// function onCloseEventForm() {
//   // здесь нужно закрыть модальное окно и очистить форму
//   closeModal();
//   clearEventForm();
// }

// // function onCreateEvent(event) {
// // // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
// // // создавать или менять DOM элементы здесь не нужно. Этим займутся другие ф-ции
// // // при подтверждении формы нужно считать данные с формы
// // // с формы вы получите поля date, startTime, endTime, title, description
// // // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
// // // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
// // // полученное событие добавляем в массив событий, что хранится в storage
// // // закрываем форму
// // // и запускаем перерисовку событий с помощью renderEvents
// //   event.preventDefault();
// //   const formData = Object.fromEntries(new FormData(eventFormElem));

// //   const { date, startTime, endTime, title, description } = formData;
// //   const events = getItem("events") || [];

// //   events.push({
// //     id: Math.random(),
// //     title,
// //     description,
// //     start: getDateTime(date, startTime),
// //     end: getDateTime(date, endTime),
// //   });

// //   setItem('events', events);
// //   onCloseEventForm();
// //   renderEvents();
// // }

// async function onCreateEvent(event) {
//   event.preventDefault();
//   const formData = Object.fromEntries(new FormData(eventFormElem));

//   const { date, startTime, endTime, title, description } = formData;
//   const start = getDateTime(date, startTime);
//   const end = getDateTime(date, endTime);

//   const eventDetails = {
//     title,
//     description,
//     start,
//     end
//   };

//   const response = await createEvent(eventDetails);

//   if (response.ok) {
//     const events = getItem('events') || [];
//     events.push(await response.json());
//     setItem('events', events);
//     onCloseEventForm();
//     renderEvents();
//   } else {
//     console.error('Failed to create event:', response.statusText);
//   }
// }

// async function updateEvent(id, updatedEventDetails) {

// }

// export function initEventForm() {
//   // подпишитесь на сабмит формы и на закрытие формы
//   // отримуємо форму
//   eventFormElem.addEventListener("submit", onCreateEvent);
//   closeEventFormBtn.addEventListener("click", onCloseEventForm);
// }
