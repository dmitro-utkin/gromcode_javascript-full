function finishList() {
  const list = document.querySelector(".list");

  const newElement1 = document.createElement("li");
  newElement1.textContent = "1";
  list.prepend(newElement1);

  const newElement2 = document.createElement("li");
  newElement2.textContent = "4";
  list.children[2].after(newElement2);

  const newElement3 = document.createElement("li");
  newElement3.textContent = "6";
  list.children[4].after(newElement3);

  const newElement4 = document.createElement("li");
  newElement4.textContent = "8";
  list.append(newElement4);
}