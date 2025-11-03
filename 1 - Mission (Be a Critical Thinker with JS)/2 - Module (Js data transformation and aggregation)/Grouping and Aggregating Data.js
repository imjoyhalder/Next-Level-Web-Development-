//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
    { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
    { category: "Home", item: "Chair", price: 150, quantity: 1 },
    { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];


const aggregatingData = sales.reduce((acc, item) => {

    if (!acc[item.category]) {
        acc[item.category] = {
            totalRevenue: 0,
            itemCount: 0,
        }
    }

    acc[item.category] = {
        totalRevenue: (acc[item.category].totalRevenue || 0) + (item.price * item.quantity),
        itemCount: acc[item.category].itemCount += item.quantity
    }
    return acc
}, {})

console.log(aggregatingData);


//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };