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
const atm = Object.freeze(new Atm());//method pembantu untuk memprotect object kita

//overriding function
atm.getSaldo=function(){
    console.log(500000)
}
atm.getSaldo()