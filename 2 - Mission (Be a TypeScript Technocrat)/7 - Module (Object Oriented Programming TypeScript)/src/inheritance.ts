class Parent{
    name:string; 
    age: number; 
    address: string; 
    constructor(name: string, age: number, address: string){
        this.name = name
        this.age = age 
        this.address = address
    }

    // common method
    getSleep(numOfHours: number){
        return `${this.name} ${numOfHours} ghonta ghumay`
    }
}

class Teacher extends Parent{
    designation: string 
    constructor(name: string, age: number, address: string, designation: string ){
        super(name,age,address)
        this.designation = designation
    }

    takeClass(numberHours: number){
        return `${this.name} take ${numberHours} class`
    }
}

const teacher1 = new Teacher("Joy", 21, 'Barisal', 'Senior teacher')
console.log(teacher1.takeClass(23));

class Student extends Parent{
    constructor(name: string, age: number, address: string){
        super(name,age,address)
        
    }
}

