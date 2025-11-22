class Person{
    name: string; 
    age: number; 
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    getDetails(): string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());