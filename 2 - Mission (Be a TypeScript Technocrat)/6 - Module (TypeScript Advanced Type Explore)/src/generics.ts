type coordinates<X, Y> = [X, Y]

type user = {
    name: string,
    address: {
        country: string;
        city: string,
        homeTown: string
    }
}

const coordinates1: coordinates<string, number> = ['Joy ', 12]
const coordinates2: coordinates<string, user> = ['Joy ', {
    name: "Alex", address: {
        country: "BD",
        city: "Dhaka",
        homeTown: "Barisal"
    }
}]
console.log(coordinates2);

type GenericArray<X, Y> = [X, Y]

