// oop: instance iof type guard/type narrowing

class Person {
    name: string;

    constructor(name: string) {
        this.name = name
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name)
    }

    getSleep(numberOfHours: number) {
        console.log(`${this.name} doinki ${numberOfHours} ghonta ghumay`);
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name)
    }

    takeClass(numberOfHours: number) {
        console.log(`${this.name} doinik ${numberOfHours} ghonta class koray`);
    }
}

// function guard 
const isStudent = (user: Person)=>{
    return user instanceof Student
}

const isTeacher = (user: Person)=>{
    return user instanceof Teacher
}

const getUserInfo = (user: Person) => {
    if (isStudent(user)) {
        user.getSleep(14)
    }
    else if (isTeacher(user)) {
        user.takeClass(10)
    }
    else{
        console.log("Nothing");
    }
}

const person1 = new Student('he')
getUserInfo(person1)

// console.log(person1 instanceof Student);