/*
1.
* Creati clasa Highway care primeste o lista de vehicule
- Fiecare vehicul va putea rula pe highway (.drive())
* Adaugati un comentariu unde identificati ca s-au folosit conceptele OOP:
* Mostenire
* Compozitie
* Polimorfism


*/
/*
function Vehicle(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
}

function Highway(name, minSpeed) {
  this.name = name;
  this.minSpeed = minSpeed;
  //   this.vehicles = [];
}
Highway.prototype.drive = function (vehicles) {
  vehicles.forEach((vehicle) => {
    // this.vehicles.push(vehicle);
    if (vehicle.maxSpeed >= this.minSpeed) {
      console.log(`${vehicle.name} can drive on ${this.name}`);
    } else {
      console.log(`${vehicle.name} is NOT allowed on ${this.name}`);
    }
  });
};

let dacia = new Vehicle("Dacia", 100);
let tesla = new Vehicle("Tesla", 180);
let zoe = new Vehicle("Zoe", 120);

let a1 = new Highway("A1", 120);
a1.drive([dacia, tesla, zoe]);
console.log(a1);

let a2 = new Highway("A2", 150);
a2.drive([dacia, tesla, zoe]);
console.log(a2);

*/
function Vehicle(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
}

Vehicle.prototype.drive = function () {
  console.log(`${this.name} can drive `);
};

function Car(name, maxSpeed) {
  Vehicle.call(this, name, maxSpeed);
}

Car.prototype = Object.create(Vehicle.prototype);

function Moto(name, maxSpeed) {
  Vehicle.call(this, name, maxSpeed);
}

Moto.prototype = Object.create(Vehicle.prototype);

function Bus(name, maxSpeed) {
  Vehicle.call(this, name, maxSpeed);
}
Bus.prototype = Object.create(Vehicle.prototype);

function Highway(vehicles) {
  vehicles.forEach((vehicle) => {
    vehicle.drive();
  });
}

let dacia = new Car("Dacia", 100);
let zoe = new Car("Zoe", 100);
let tesla = new Car("Tesla", 250);

//composition
new Highway([dacia, zoe, tesla]);

// 2. Scrieti 3 exemple de promise-uri in care folositi
// odata .then().catch() si odata async/await

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("lottery draw is in progress");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("you win");
    } else {
      reject(new Error("you lose"));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

/////

var myPromise = new Promise(function (resolve, reject) {
  resolve("my response from myPromise");
});

myPromise
  .then(function (resp) {
    console.log(resp);
  })
  .then(function () {
    console.log("resp2");
  })
  .finally(function () {
    console.log("this is finally");
  });

async function loadAsyncAwaitExample() {
  var response;
  try {
    response = await new Promise(function (resolve) {
      setTimeout(function () {
        resolve("promise rezolvat");
      }, 100);
    });
    console.log("response...", response);
  } catch (error) {
    console.log(error);
  }
}
loadAsyncAwaitExample();
