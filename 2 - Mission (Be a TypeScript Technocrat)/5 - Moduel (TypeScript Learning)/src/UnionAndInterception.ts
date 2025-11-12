type userRole = 'admin' | 'user' 

const getDashboard = (role: userRole): string=>{
    if(role === 'admin'){
        return "Admin dashboard"
    }
    else if(role == 'user'){
        return "User Dashboard"
    }
    else{
        return 'Guest Dashboard'
    }
}
// console.log(getDashboard('admin'));

// intersection 
type Employee = {
    id: string, 
    name: string, 
    phoneNode: string
}

type Manager = {
    designation: string, 
    teamSize: number
}

type EmployeeManager = Employee & Manager

const Halder: EmployeeManager = {
    id: '12', 
    name: "Joy Halder", 
    phoneNode: "013323", 
    designation: "HR", 
    teamSize: 10
} 
console.log(Halder);