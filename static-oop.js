class Car{
    //static property-->harus dipanggil dengan nama class bukan nama instance
    static brand2="honda";
    constructor(){
        //instance property
        this.brand='toyota';
        this.model='yaris'
    };
    startEngine(){
        console.log(`${this.brand} ${this.model} menyala`)
    };
    stopEngine(){};
  /**  
    //getter-->untuk mengambil nilai property
    getNama(){
    return this.nama;
    }
    //setter-->untuk mengubah nama property
    setNama(nama){
        this.nama=nama;
    }
    */
  static getBrand2(){
       return Car.brand2;
   }
}

//inisiasi instance
const car=new Car();
// const car2=new Car('toyota');


// car.setNama('suzuki');
// console.log(car.nama);
// console.log(car2.nama)
// console.log(car.getNama());
// car.startEngine();
console.log(Car.brand2);
console.log(Car.getBrand2());
