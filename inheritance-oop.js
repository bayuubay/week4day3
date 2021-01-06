//parrent class / super class
class Engine {
    startEngine() {
        console.log(`${this.type} mesin menyala`);
    }
    stopEngine() {}

}

class Car extends Engine {
    horn() {}

};


//child class / sub-class
class Toyota extends Car {


    constructor(type) {
        //akan memanggil semua property dari parent
        super();
        this.type = type;
    }
}
class Honda extends Car {

    constructor(type) {
        super();
        this.type = type;
    }
}
class Daihatsu extends Car {

    constructor(type) {
        super();
        this.type = type;
    }
}

//instance
const avanza = new Toyota('Avanza')
const mobilio = new Honda('Mobilio')
const xpander = new Daihatsu('Xpander')
avanza.startEngine();
mobilio.startEngine()
xpander.startEngine()
console.log(avanza.type);
console.log(mobilio.type)
console.log(xpander.type)
