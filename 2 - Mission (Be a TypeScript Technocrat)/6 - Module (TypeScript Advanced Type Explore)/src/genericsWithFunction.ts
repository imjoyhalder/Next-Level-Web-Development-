

const createArrayWithGeneric = <T>(value: T) =>{
    return [value]
}

const arrNum = createArrayWithGeneric(12)
const arrString = createArrayWithGeneric('Hello man ')
const arrObject = createArrayWithGeneric({id: 1, name: "Joy"})

// tuple

const createArrayWithTuple = (param1: string, param2: string) =>[param1,param2]
const createArrayTupleWithGeneric = <X,Y>(param1: X, param2: Y)=>[param1, param2]

const res1 = createArrayTupleWithGeneric(1222,'Hello')
console.log(res1);

const addStudentToCourse =<T>(studentInfo: T)=>{
    return {
        course: "Next Level", 
        ...studentInfo
    }
}

const student1 = {
    id: 123, 
    name: "Mahabub", 
    hasCar: false
}

console.log(addStudentToCourse(student1));