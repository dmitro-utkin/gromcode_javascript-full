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