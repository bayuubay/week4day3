class Car {
    constructor(nama) {
        this.nama = nama;
    };
    startEngine() {};
    stopEngine() {};

    //getter-->untuk mengambil nilai property
    getNama() {
        return this.nama;
    }
    //setter-->untuk mengubah nama property
    setNama(nama) {
        this.nama = nama;
    }
}

const car = new Car('honda');
const car2 = new Car('toyota');

//getter
car.setNama('suzuki');
// console.log(car.nama);
// console.log(car2.nama)
console.log(car.getNama());