
type T = string | number | boolean

const formatValue = (value: T): T => {
    if (typeof value === 'number') {
        return value * 10
    }
    else if (typeof value === 'string') {
        return value.toUpperCase()
    }
    else {
        return !value
    }
}



const getLength = (input: string | number[]): number => {
    if (typeof input === 'string') {
        return input.length
    }
    else {
        return input.length
    }
}


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    getDetails() {
        return `'Name: ${this.name}, Age: ${this.age}'`
    }
}


type bookTyp = {
    title: string;
    rating: number
}

const filterByRating = (books: bookTyp[]): bookTyp[] => {
    const filteredBooks = books.filter((book) => book.rating >= 4)
    return filteredBooks
}



type user = {
    id: number,
    name: string,
    email: string,
    isActive: boolean
}

const filterActiveUsers = (users: user[]): user[] => {
    const activeUser = users.filter((user) => user.isActive)
    return activeUser
}


interface Book {
    title: string
    author: string
    publishedYear: number
    isAvailable: boolean
}

const printBookDetails = (book: Book) => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);;
}



type generic = Array<number | string>
const getUniqueValues = (arr1: generic, arr2: generic): generic => {

    const mergedArray: generic = []
    for (let i of arr1) {
        mergedArray[mergedArray.length] = i
    }
    for (let i of arr2) {
        mergedArray[mergedArray.length] = i
    }

    const uniqueArray: number[] = []

    for (let i = 0; i < mergedArray.length; i++) {
        let found: boolean = false;

        for (let k = 0; k < uniqueArray.length; k++) {
            if (mergedArray[i] === uniqueArray[k]) {
                found = true
                break;
            }
        }
        if (!found) {
            uniqueArray[uniqueArray.length] = mergedArray[i]
        }
    }

    return uniqueArray;
}



type Product = {
    name: string,
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {

    if (products.length === 0) {
        return 0
    }
    else {
        const calculatePrice = products.reduce((acc, item) => {
            const realPrice = item.price * item.quantity
            return acc + realPrice - (realPrice * (item.discount || 0) / 100);
        }, 0)
        return calculatePrice
    }

}