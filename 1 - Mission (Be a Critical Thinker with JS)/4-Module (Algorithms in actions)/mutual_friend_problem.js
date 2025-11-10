
const USER_COUNT = 5000
const userA = []
const userB = []

const createUser = (id) =>({id: `user_${id}`, name: `User ${id}`})

for(let i=0; i<USER_COUNT;  i++){
    userA.push(createUser(i))
    userB.push(createUser(i+25000))
}

console.log(userA);
console.log(userB);