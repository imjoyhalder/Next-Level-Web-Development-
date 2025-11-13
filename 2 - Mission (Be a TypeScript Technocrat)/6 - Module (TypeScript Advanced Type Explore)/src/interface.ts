
type User = {
    name: string;
    age: number
}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role

const user1: UserWithRole = {
    name: "Joy Halder",
    age: 21,
    role: 'admin'
}

interface IUser {
    name: string,
    age: number
}

const user2: IUser = {
    name: "Jhon Doe",
    age: 45
}

interface IUserWithRole extends IUser {
    role: 'admin' | 'user'
}

const user3: IUserWithRole = {
    name: "Himel Halder",
    age: 22,
    role: "user"
}

// console.log(user3);

// console.log(user1);
// console.log(user2);

type add = (num1: number, num2: number) => number

const addNumber: add = (num1, num2) => num1 + num2

type Friends = string[]


interface IFriends {
    [index: number]: string;
}

const friends: IFriends = ["A", "B", "C", "D"]

interface IAdd {
    (num1: number, num2: number): number
}

const addnumber: IAdd = (num1, num2) => num1 + num2

console.log(friends);
console.log(addnumber(1, 3));