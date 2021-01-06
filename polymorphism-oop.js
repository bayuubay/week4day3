//DEPENDENCY INJECTION
//parent class
class Car {
    checkWheel() {
        console.log(`ada 4 roda`)
    }
}
//parent class
class Motorcycle {
    checkWheel() {
        console.log(`ada 2 roda`)
    }
}
class Engine {
    checkEngine() {
        console.log(`engine is fine`)
    }
}
//child class
class Honda {
    constructor(type, dependency) {
        this.type = type;
        this.car = dependency.car;
        this.motorcycle = dependency.motorcycle;
        this.engine = dependency.engine;
    }
}

//instance
const car = new Car();
const motorcycle = new Motorcycle();
const engine = new Engine()

const dependency = {
    car,
    motorcycle,
    engine
}; //untuk menyingkat, menggunakan object array data
const mobilio = new Honda(`Mobilio`, dependency);

//panggil code
mobilio.car.checkWheel();
mobilio.motorcycle.checkWheel();
mobilio.engine.checkEngine()