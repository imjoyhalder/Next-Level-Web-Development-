
type Product = {
    id: number, 
    name: string, 
    price: number; 
    stock: number; 
    color?: string
}


// select kore notun type toiri kora jay 
type productSummary = Pick<Product, 'id'|'name'>

const product1: productSummary = {
    name: 'apple watch', 
    id: 2
}

// select kora property gula bade baki gula niya type toiri kore
type summary = Omit<Product, 'id'|'name'>

const product2: summary = {
    price: 200, 
    stock: 10
}


// sob gula field ke required kore dey optional filed gula keo required kore dibe 

type productWithColor = Required<Product>

const product3: productWithColor={
    id: 2, 
    name: "Oramio Watch", 
    price: 2000, 
    stock: 3, 
    color: 'black'
}

// sob filed gulo ke optional kore dey 

type optionalProduct = Partial<Product>

const product4: optionalProduct = {
    id: 1
}

// sob filed gulo ke sudhu read kora jabe kono edit ba onno kicu kora jabe na 

type ProductReadOnly = Readonly<Product>

const emptyObject : Record<string,unknown> = {}