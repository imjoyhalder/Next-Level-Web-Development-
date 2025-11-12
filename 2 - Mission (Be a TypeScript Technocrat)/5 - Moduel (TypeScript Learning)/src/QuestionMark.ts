// ternary , nullish coalscing, optional chaining

const userTheme = null 
const selectTheme = userTheme ?? 'Light Theme'
console.log(selectTheme);


// optional chaining

const user: {
    name: string, 
    address: {
        division : string, 
        city: string, 
        townCity?: string
    }
} = {
    name: "Joy Halder", 
    address: {
        division: 'Barishal', 
        city: "Barisal", 
    }
}

console.log(user.address.townCity);