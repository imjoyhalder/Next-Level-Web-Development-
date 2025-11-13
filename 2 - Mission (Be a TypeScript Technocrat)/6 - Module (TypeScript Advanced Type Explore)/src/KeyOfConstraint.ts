
type RichPeople = {
    car: string,
    bike: string,
    cng: string
}

type MyVehicle1 = 'bike' | 'car' | 'cng'
type MyVehicle2 = keyof RichPeople

const myVehicle: MyVehicle2 = "car"

type User = {
    id: number, 
    name: string, 
    profession: string
}

const user: User = {
    id: 12,
    name: "Joy Halder",
    profession: "Student"
}

type Student = {
    id: number;
    name: string; 
    class_: number; 
}

const student: Student = {
    id: 123, 
    name: "Niloy", 
    class_: 10
}

const getPropertyFromObj = <X>(obj: X, key: keyof X)=>{
    return obj[key]
}

const result = getPropertyFromObj(user, "profession")
console.log(result);

const result2 = getPropertyFromObj(student,'class_')
console.log(result2);