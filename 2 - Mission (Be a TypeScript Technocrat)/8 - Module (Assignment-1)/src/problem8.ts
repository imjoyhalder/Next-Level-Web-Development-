type Product = {
    name: string,
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {

    if (products.length===0) {
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

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));