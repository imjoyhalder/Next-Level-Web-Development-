
const user: {
    id: number,
    name: {
        firstName: string;
        lastName: string;
    },
    gender: 'male' | 'female',
    contactNo: string,
    address: {
        division: string,
        city: string
    }

} = {
    id: 1234, 
    name: {
        firstName: 'Joy', 
        lastName: "Halder"
    }, 
    gender: 'male', 
    contactNo: '01212', 
    address: {
        division: 'Barishal', 
        city: 'Gournodi'
    }
}


const user2: user =  {
    id: 1234, 
    name: {
        firstName: 'Himel', 
        lastName: "Halder"
    }, 
    gender: 'male', 
    contactNo: '01212', 
    address: {
        division: 'Barishal', 
        city: 'Gournodi'
    }
}

console.log(user2);