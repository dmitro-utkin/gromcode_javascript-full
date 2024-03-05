/*
Таймер
Опишите объект, значение поля которого будет увеличиваться на 1 каждую 1 секунду, и содержать ко-во пройденных минут
Основные требования:
Экспортируйте из файла объект с именем timer
Объект timer содержит поле secondsPassed и поле minsPassed
Метод объекта startTimer должен запустить таймер, который увеличивает значение поля secondsPassed каждую ] секунду на 1. Для запуска таймера используйте метод setInterval
Начальное значение secondsPassed = 0, minsPassed = 0
Когда secondsPassed достигает 60, переменная minsPassed должна увеличивать на 1, а secondsPassed должна обнуляться и цикл начинается сначала
Метод getTime должен вернуть текущее состояние таймера в формате '1:05', где 1 - minsPassed, 45 - secondsPassed. Значение секунд должно быть двузначным (дополнить лидирующим нулем по необходимости)
Метод stopTimer должен остановить таймер и сохранить текущее состояние. Если после остановки снова выполнить startTimer то нужно продолжить с сохраненной позиции
Для остановки таймера воспользуйтесь методом clearInterval. clearInterval принимает в качестве единственного аргумента идентификатор интервала. Идентификатор - это результат работы ф-ции setInterval
Метод resetTimer должен сбросить таймер в изначальное состояние (до старта)
*/

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed++;
      if (this.secondsPassed === 60) {
        this.secondsPassed = 0;
        this.minsPassed++;
      }
    }, 1000);
  },
  getTime() {
    const seconds = this.secondsPassed < 10 ? `0${this.secondsPassed}` : this.secondsPassed;
    return `${this.minsPassed}:${seconds}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  }
};

// const { timer } = require('./timerFile'); // Подставьте путь к вашему файлу с объектом timer

timer.startTimer();

// Ждем несколько секунд для того, чтобы счетчик увеличился
setTimeout(() => {
  console.log(timer.getTime()); // Выводим текущее время
  timer.stopTimer(); // Останавливаем таймер
}, 5000); // Ожидаем 5 секунд и выведем текущее время в консоль

module.exports = { timer };