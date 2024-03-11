// ці собитія касаються загрузки сторінки
const img = document.querySelector('img');

document.addEventListener('DOMContentLoaded', () => {
  console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`);
});

window.addEventListener('Load', () => {
  console.log(`img: ${img.offsetWidth} x ${img.offsetHeight}`);
});

window.addEventListener('beforeunload', () => {
  // alert('Sure?');
  e.returnValue = '';
});

window.addEventListener('unload', () => {
  console.log('Page left');
});
