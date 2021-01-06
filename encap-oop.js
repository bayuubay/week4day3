//Encapsulation
//private
class Bank {
    #saldo = 1000;
    getSaldo() {
        console.log(`${this.#saldo}`)
    }
    //set saldo diprotect dengan tanda # supaya tidak bisa diubah disisi client class
    #setSaldo(saldo) {
        this.#saldo += saldo;
    }
    transaction(type,amount) {
        if (type==`debit`){
            this.#saldo+=amount;
        }else
        this.#saldo-=amount;
    }
}
//client
class Atm extends Bank {
    constructor() {
        super();
    }
    withdraw(amount) {
        this.transaction(`credit`,amount)
    }
    payment(amount) {
        this.transaction(`credit`,amount)
    }
    deposit(amount){
        this.transaction(`debit`,amount)
    }

}
//client
const atm = new Atm();
// console.log(atm.saldo);

//saldo awal
atm.getSaldo()

//bayar listrik
atm.payment(500);//500

//ambil uang
atm.withdraw(200);

//nabung
atm.deposit(1000)

//saldo akhir
atm.getSaldo();