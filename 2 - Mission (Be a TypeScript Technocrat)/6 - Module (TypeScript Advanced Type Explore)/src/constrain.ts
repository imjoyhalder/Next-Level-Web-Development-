// set constraint with dynamic type or generic 
type Student = {
    id:number, 
    name:string
}

const addStudentToCourse =<T extends Student>(studentInfo: T)=>{
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
const student2 = {
    hasWatch:false,
    id: 123, 
    name: "Mahabub", 
}

console.log(addStudentToCourse(student1));
addStudentToCourse(student2)