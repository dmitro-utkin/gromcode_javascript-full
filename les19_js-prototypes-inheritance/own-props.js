// own props

// const vehicle = {
//   isMoving: false,
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   name: "Aurora",
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log("lifting anchor down");
//   },
//   liftAnchorUp() {
//     console.log("lifting anchor up");
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

/**

За допомогою for_in можна учітовать момент про цепочку 
унаслєдованія (собствєні свойства і унаслєдовані свойства)

*/

// for (const prop in ship) {
//   console.log(prop);
// } // в цьому випадку виведе усі свойства і собствєні і успадковані

/* Щоб це избежать є спец.метод `hasOwnProperty`*/
// for (const prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

/* 
Проте сучасні методи язика вирішують 
ці питання набагато краще і простіше
Наприклад, щоб отримать власні свойства об'єкта можна
просто виколристати 'Object.keys'
*/
// console.log(Object.keys(ship))