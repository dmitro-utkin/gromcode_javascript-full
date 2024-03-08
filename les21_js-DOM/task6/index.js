function setButton(buttonText) {
  const bodyElement = document.querySelector("body");
  bodyElement.innerHTML = `<button>${buttonText}</button>`;

  const buttonTextElement = document.createElement("button");
  buttonTextElement.textContent = buttonText;
  bodyElement.appendChild(buttonTextElement);
}