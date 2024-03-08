function squaredNumbers() {
  const numberElements = document.querySelectorAll(".number");
  numberElements.forEach((element) => {
    const number = parseInt(element.dataset.number);
    element.dataset.squaredNumber = number * number;
  });
}
