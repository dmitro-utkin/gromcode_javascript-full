export function finishForm() {
  const loginForm = document.querySelector(".login-form");

  const loginInput = document.createElement("input");
  loginInput.setAttribute("type", "text");
  loginInput.setAttribute("name", "login");
  loginForm.prepend(loginInput);

  const passwordInput = loginForm.querySelector('input[name="password"]');
  passwordInput.setAttribute("type", "password");
}