
type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: 'male' | 'female';
    contactNo: string;
    address: {
        division: string;
        city: string;
    }

}


const user2: User =  {
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

// function 

type addFunc = (num1: number ,num2: number) =>number

const add: addFunc = (num1, num2) => num1+num2

console.log(add(1,3));