// const vehicle = {
//   move() {
//     console.log(`${this.name} moving`);
//   },
//   stop() {
//     console.log(`${this.name} stopped`);
//   },
// };

// const ship = {
//   hasWheels: false,
//   name: "Chaika",
//   liftAnchorUp() {
//     console.log(`${this.name} lifting anchor up`);
//   },
//   liftAnchorDown() {
//     console.log(`${this.name} lifting anchor down`);
//   },
//   startMachine() {
//     this.liftAnchorUp();
//     this.move();
//   },
//   stopMachine() {
//     this.stop();
//     this.liftAnchorDown();
//   },
// };

// Object.setPrototypeOf(ship, vehicle);

// Так не правильно, і не рекомендують тому переробимо

// eslint-disable-next-line max-classes-per-file
class Vehicle {
  constructor(name, hasWheels) {
    this.hasWheels = hasWheels;
    this.name = name;
  }

  move() {
    console.log(`${this.name} moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stopMachine() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship("Aurora", 17);

ship1.stop();

// console.log(ship1);
