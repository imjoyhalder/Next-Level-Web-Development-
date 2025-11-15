class BankAccount {
    public readonly userId: number;
    public username: string;
    private _userBalance: number;

    constructor(userId: number, username: string, userBalance: number) {
        this.userId = userId
        this.username = username
        this._userBalance = userBalance
    }

    // enquiryBalance() {
    //     return this._userBalance
    // }

    // depositBalance(amount: number) {
    //     this._userBalance += amount
    // }

    // setter method using set keyword 
    set depositBalance(amount: number){
        this._userBalance += amount
    }

    // getter method using get keyword
    get enquiryBalance(){
        return this._userBalance
    }
}

const account1 = new BankAccount(111,'Joy',100)
account1.depositBalance = 100
console.log(account1.enquiryBalance);
console.log(account1);