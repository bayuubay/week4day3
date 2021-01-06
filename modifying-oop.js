class Car {
    constructor() {
        this.brand = "suzuki";

    }
    startEngine() {
        console.log("mesin menyala");
    }
}

const car = new Car();

//modifying atau overriding
car.brand = "Honda";
car.startEngine = function () {
    console.log("methodnya dibajak");
}
car.startEngine();
console.log(car.brand)