class Parent{
    constructor(public name: string, public age: number, public address: string){
        this.name = name
        this.age = age 
        this.address = address
    }

    // common method
    getSleep(numOfHours: number){
        return `${this.name} ${numOfHours} ghonta ghumay`
    }
}

class Student extends Parent{
    constructor(public name: string, public age: number, public address: string){
        super(name,age,address)
        
    }
}