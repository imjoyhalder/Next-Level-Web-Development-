
const add = (num1: string | number, num2: string | number) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
    }
    else {
        return num1.toString() + num2.toString()
    }
}

type NormalUser = {
    name: string
}

type AdminUser = {
    name: string
    role: "Admin"
}

const getUserInfo = (user: NormalUser | AdminUser )=>{
    if('role' in user){
        console.log(`This ${user.name} and his role is : ${user.role}`);
    }
}

getUserInfo({name: 'Normal'})