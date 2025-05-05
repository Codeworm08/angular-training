class BankAccount{
    private balance: number;
    deposit(amount:number){
        if(!this.balance)
            this.balance=0;
        this.balance+=amount;
    }
    getBalance():number{        
        return this.balance;
    }
}

let acc:BankAccount = new BankAccount();
acc.deposit(200);
acc.deposit(100)
console.log("Balance: ",acc.getBalance())