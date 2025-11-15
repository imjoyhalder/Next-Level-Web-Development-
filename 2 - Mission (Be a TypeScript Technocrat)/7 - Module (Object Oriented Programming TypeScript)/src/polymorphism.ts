
class Person {
    getSleep() {
        console.log('Normal manush 10 ghonta ghumay ');
    }
}

class Student extends Person {
    getSleep() {
        console.log('Student 9 ghonta ghumay');
    }
}

class NextLevelDeveloper {
    getSleep() {
        console.log("Next level Developer 6 ghonta ghumay");
    }
}

const getSleepingHours = (param: Person) => {
    param.getSleep()
}

const person1 = new Person()
const student1 = new Student()
const nextDev1 = new NextLevelDeveloper()

// getSleepingHours(person1)
// getSleepingHours(student1)
// getSleepingHours(nextDev1)

class Shape {
    getArea() {
        console.log(0);
    }
}

class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getArea() {
        console.log(Math.PI*this.radius*this.radius)
    };
}

class Rectangle extends Shape {
    height: number;
    width: number
    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }
    getArea() {
        console.log(this.height*this.width); 
    }
}

const shape1 = new Shape()
const shape2 = new Circle(4)
const shape3 = new Rectangle(10,20)

const getArea = (param: Shape)=>{
    param.getArea()
}

getArea(shape1)
getArea(shape2)
getArea(shape3)