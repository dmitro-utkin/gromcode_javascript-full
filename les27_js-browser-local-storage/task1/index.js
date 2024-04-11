// getLocalStorageData

localStorage.clear();
// localStorage.setItem("name", "Tom");
// localStorage.setItem("hobbies", [1, 2, 3]);
// localStorage.setItem("hobbies", { name: "Tom" });
localStorage.setItem("hobbies", JSON.stringify({ name: "Tom" })); // - серилізація об'єкта
localStorage.setItem("name", JSON.stringify("Tom"));
localStorage.setItem("age", JSON.stringify(17));

// localStorage.getItem("name");
// console.log(JSON.parse(localStorage.getItem("hobbies")));

// const getLocalStorageData = () => {
//   for (let i = 0; i < localStorage.length; i++) {
//     localStorage.key(i);
//   }
// };

// const getLocalStorageData = () => {
//   for (const i of localStorage) {
//     localStorage.key(i);
//   }
// };

const getLocalStorageData = () => {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let newValue;
    try {
      newValue = JSON.parse(value);
    } catch (error) {
      newValue = value;
    }
    return {
      ...acc,
      [key]: newValue,
    };
  }, {});
};

console.log(getLocalStorageData());
