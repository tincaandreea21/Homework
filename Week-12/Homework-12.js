/*
Part 1.
* Recreati tema cu masinile pe autostrada folosind clasele din ES6
* Creati un meniu de navigare care seteaza un hash (#my-custom-has)
* Atasati un eveniment de popstate cu care ascultam navigarile (efectuate cu API-ul history)
* Creati un buton GoTo pentru a naviga la o ruta specifica (pushState())
* Creati un buton de Back si alt buton de Forward care navigheaza prin history (back() si forward())
* Exemplificati rescrierea unei rute (replaceState())
*/

// class declaration
class Vehicle {
  constructor(name, color, engine, fuel, wheels) {
    this.name = name;
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = wheels;
  }
  drive() {
    console.log(`${this.name} is driving`);
  }
  park() {}
}

class Car extends Vehicle {
  constructor(name, color, engine, fuel) {
    super(name, color, engine, fuel, Car.WHEELS);
  }
}

Car.WHEELS = 4;

let car1 = new Car("dacia", "red", "1.1", "gas");
console.log(car1);
car1.drive();

class Motorcycle extends Vehicle {
  constructor(name, color, engine, fuel) {
    super(name, color, engine, fuel, Motorcycle.WHEELS);
  }
}
Motorcycle.WHEELS = 2;

let moto1 = new Motorcycle("harley", "black", 111, "diesel");
console.log(moto1);

class Bus extends Vehicle {
  constructor(name, engine, fuel) {
    super(name, Bus.COLOR, engine, fuel, Bus.WHEELS);
  }
}

Bus.WHEELS = 12;
Bus.COLOR = "yellow";

let bus1 = new Bus("solaris", 222, "diesel");
console.log(bus1);

class CarFleet {
  constructor() {
    this.cars = [];
  }
  newCar(car) {
    this.cars.push(car);
  }
}

var cars = new CarFleet();

cars.newCar(new Car("Dacia", "blue", 1.2, "gas"));
cars.newCar(new Car("Dacia", "blue", 1.2, "gas"));
cars.newCar(new Car("Dacia", "red", 1.2, "gas"));
console.log(cars);

history.pushState({ page_id: 00, user_id: 1 }, null, "#my-hash");

let btnBack = document.createElement("button");
btnBack.setAttribute("id", "back");
btnBack.innerText = "Back";
document.body.appendChild(btnBack);

btnBack.addEventListener("click", function () {
  history.back();
});

let btnForward = document.createElement("button");
btnForward.setAttribute("id", "forward");
btnForward.innerText = "Forward";
document.body.appendChild(btnForward);

btnForward.addEventListener("click", function () {
  history.forward();
});

let btnGoTo = document.createElement("button");
btnGoTo.innerText = "GoTo";
document.body.appendChild(btnGoTo);

btnGoTo.addEventListener("click", function () {
  const state = { page_id: 1, user_id: 5 };
  const url = "hello-world.html";

  history.pushState(state, "", url);
});

// const stateObj = { page_id: 22 };
// history.replaceState(stateObj, "", "bar2.html");

window.addEventListener("popstate", (event) => {
  console.log(
    "location: " + document.location + ", state: " + JSON.stringify(event.state)
  );
});
