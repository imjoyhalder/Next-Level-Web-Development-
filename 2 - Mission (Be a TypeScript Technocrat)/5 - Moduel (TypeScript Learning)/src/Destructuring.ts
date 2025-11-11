// Destructuring.ts


const user = {
    id: 10,
    name: {
        firstName: 'Joy',
        lastName: "Halder"
    },
    job: 'Full stack developer',
    hobby: 'Traveling'
}

const { hobby, name: { lastName: myLastName } } = user
console.log(hobby, myLastName);
