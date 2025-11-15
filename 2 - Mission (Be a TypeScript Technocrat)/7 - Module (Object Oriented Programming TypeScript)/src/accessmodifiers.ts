// access --> modify

class BankAccount {
    public readonly userId: number;
    public username: string;
    private userBalance: number;

    constructor(userId: number, username: string, userBalance: number) {
        this.userId = userId
        this.username = username
        this.userBalance = userBalance
    }

    enquiryBalance() {
        return this.userBalance
    }

    depositBalance(amount: number) {
        this.userBalance += amount
    }
}

class StudentAccount extends BankAccount{
    test(){
        this.username
    }
}

const account1 = new BankAccount(111,'Joy',100)
account1.depositBalance(100)
console.log(account1);