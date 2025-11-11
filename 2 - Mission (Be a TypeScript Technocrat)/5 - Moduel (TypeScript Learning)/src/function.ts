

function add(num1: number, num2: number): number{
    return num1+num2
}

const addArrow = (num1: number, num2: number): number=> num1+num2


const poorUser = {
    name: 'Joy', 
    balance: 0,

    addBalance(value: number){
        return this.balance + value
    }
}

const arr: number[] = [5,3,6,7,8,9]

const sqrArr = arr.map((elem:number):number=>elem*elem)

console.log(sqrArr);