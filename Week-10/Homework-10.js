function Vehicle(name, color, engine, fuel, wheels) {
  this.name = name;
  this.color = color;
  this.engine = engine;
  this.fuel = fuel;
  this.wheels = wheels;
}
Vehicle.prototype.drive = function () {};
Vehicle.prototype.park = function () {};

function Car(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Car.WHEELS);
}
Car.WHEELS = 4;
Car.prototype = Object.create(Vehicle.prototype);
function Moto(name, color, engine, fuel) {
  Vehicle.call(this, name, color, engine, fuel, Moto.WHEELS);
}
Moto.WHEELS = 2;
Moto.prototype = Object.create(Vehicle.prototype);
function Bus(name, engine, fuel) {
  Vehicle.call(this, name, Bus.WHEELS, engine, fuel, Bus.WHEELS);
}
Bus.WHEELS = 16;
Bus.COLOR = "yellow";
Bus.prototype = Object.create(Vehicle.prototype);
function Engine(name, capacity) {
  this.name = name;
  this.capacity = capacity;
}
Engine.prototype.run = function () {
  console.log("Running");
};
Engine.prototype.start = function () {
  console.log("Starting");
  this.run();
};
Engine.prototype.stop = function () {
  console.log("Has stopped");
};

function Fleet(fleetName, lotNumber) {
  this.name = fleetName;
  this.lotNumber = lotNumber;
  this.fleet = [];
}
Fleet.prototype = {
  add(vehicle) {
    this.fleet.push(vehicle);
  },
  remove(vehicle) {
    if (this.fleet.indexOf(vehicle) > -1) {
      this.fleet.splice(this.fleet.indexOf(vehicle), 1);
    }
  },
};

let auto1 = new Car("dacia", "blue", "1.2", "gas");
let auto2 = new Car("dacia", "blue", "1.2", "gas");
let auto3 = new Car("dacia", "red", "22", "gas");

let carFleet = new Fleet("car Fleet", 111);

carFleet.add(auto1);
carFleet.add(auto2);
carFleet.add(auto3);
console.log(carFleet);
let moto1 = new Moto("Suzuki", "black", 11, "gas");
let moto2 = new Moto("Suzuki", "black", 11, "gas");

let motoFleet = new Fleet("motorcycle fleet", 001);

motoFleet.add(moto1);
motoFleet.add(moto2);

console.log(motoFleet);

// function Fleet(fleetName, lotNumber) {
//   this.fleetName = fleetName;
//   this.lotNumber = lotNumber;
//   this.fleet = [];
// }

// Fleet.prototype.add = function (vehicle) {
//   this.fleet.push(vehicle);
// };
// Fleet.prototype.remove = function (vehicle) {
//   const index = this.fleet.indexOf(vehicle);
//   if (index > -1) {
//     this.fleet.splice(index, 1);
//   }
// };

// let auto1 = new Car("dacia", "blue", "1.2", "gas");
// let auto2 = new Car("dacia", "yellow", "1.2", "gas");
// let auto3 = new Car("dacia", "red", "22", "gas");

// let carFleet = new Fleet("car Fleet", 111);

// carFleet.add(auto1);
// carFleet.add(auto2);
// carFleet.add(auto3);
// carFleet.remove(auto2);

// console.log(carFleet);
