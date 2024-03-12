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
const formElem = document.querySelector('.login-form');
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
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('input', function () {
  if (emailInput.validity.valueMissing || !emailInput.value.includes('@')) {
    emailInput.classList.add('invalid');
  } else {
    emailInput.classList.remove('invalid');
  }
});

passwordInput.addEventListener('input', function () {
  if (passwordInput.validity.valueMissing) {
    passwordInput.classList.add('invalid');
  } else {
    passwordInput.classList.remove('invalid');
  }
});

/*
4. Отображение сообщений об ошибках ввода:
Для отображения сообщений об ошибках ввода можно использовать следующий подход:
*/
const emailError = document.querySelector('.error-text_email');
const passwordError = document.querySelector('.error-text_password');

emailInput.addEventListener('input', function () {
  if (emailInput.validity.valueMissing) {
    emailError.textContent = 'Required';
  } else if (!emailInput.value.includes('@')) {
    emailError.textContent = 'Should be an email';
  } else {
    emailError.textContent = '';
  }
});

passwordInput.addEventListener('input', function () {
  if (passwordInput.validity.valueMissing) {
    passwordError.textContent = 'Required';
  } else {
    passwordError.textContent = '';
  }
});

/*
Если форма заполнена валидными данными и пользователь нажимает кнопку "Submit", то можно вывести данные формы в alert с использованием следующего JavaScript кода:
*/
// Выбираем форму
// const formElem = document.querySelector('.login-form');

// Обработчик события отправки формы
formElem.addEventListener('submit', function(event) {
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
