// vehicle and ship

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// }

// vehicle.move();

// console.log(vehicle.toString);
// console.log(vehicle);

// ------------------------------------

/*

Прототипом можно управлять для створення 
пользовательських об'єктів.
Для цього існує декілька способів.

 */

/*

У нас є засіб пересування 'vehicle' і ми хочемо 
створити новий засіб на основі існуючогго з 
додаванням деяких нових властивостей

*/

// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// }

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down')
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
//   __proto__: vehicle, // не крща практика устанавлювать прототипи
// };

// // ship.move();

// // console.log(ship);

// // ship.run(); // run is not a function

// ------------------------------------------------
// -- Є статичний метод установки прототипів ---
// const vehicle = {
//   move() {
//     console.log('moving');
//   },
//   stop() {
//     console.log('stopped');
//   },
// }

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down')
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// ship.move();

// ----------------------------------

// const vehicle = {
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// }

// const ship = {
//   name: 'Aurora',
//   hasWheels: false,
//   liftAnchorDown() {
//     console.log('lifting anchor down')
//   },
//   liftAnchorUp() {
//     console.log('lifting anchor up');
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// ship.move();