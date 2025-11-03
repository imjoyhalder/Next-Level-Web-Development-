
const cartItem = [{ "id": 1, "name": "Ceramic Bakeware Set", "price": 49.99, "quantity ": "33339" },
{ "id": 2, "name": "Homestyle Beef Stew", "price": 7.99, "quantity ": "85539" },
{ "id": 3, "name": "Garlic Herb Marinade", "price": 3.29, "quantity ": "34521" },
{ "id": 4, "name": "Peach Fruit Cups", "price": 1.99, "quantity ": "59" },
{ "id": 5, "name": "Plant Growing Kit", "price": 22.99, "quantity ": "139" },
{ "id": 6, "name": "Camping Tent", "price": 79.99, "quantity ": "972" },
{ "id": 7, "name": "Cushion Covers", "price": 35, "quantity ": "92670" },
{ "id": 8, "name": "Organic Coconut Flour", "price": 5.49, "quantity ": "010" },
{ "id": 9, "name": "Foam Roller for Muscle Recovery", "price": 29.99, "quantity ": "1" },
{ "id": 10, "name": "Herbal Tea Infuser", "price": 9.99, "quantity ": "90" },
{ "id": 11, "name": "Customizable Name Plate", "price": 19.99, "quantity ": "2" },
{ "id": 12, "name": "Lemon Herb Chicken", "price": 7.49, "quantity ": "332" },
{ "id": 13, "name": "Buffalo Sauce", "price": 2.99, "quantity ": "0811" },
{ "id": 14, "name": "Tuna Fish (canned)", "price": 2.29, "quantity ": "17" },
{ "id": 15, "name": "Pumpkin Spice Coffee", "price": 7.99, "quantity ": "17" },
{ "id": 16, "name": "Pet Water Bottle", "price": 18.99, "quantity ": "5002" },
{ "id": 17, "name": "Laptop Backpack", "price": 69.99, "quantity ": "0" },
{ "id": 18, "name": "Portable Air Pump", "price": 19.99, "quantity ": "454" },
{ "id": 19, "name": "Cranberry Juice", "price": 3.69, "quantity ": "500" },
{ "id": 20, "name": "Wireless Earbuds", "price": 69.99, "quantity ": "25488" },
{ "id": 21, "name": "Portable Pet Bathing Tool", "price": 29.99, "quantity ": "327" },
{ "id": 22, "name": "Magnet Travel Fridge Magnets", "price": 12.99, "quantity ": "23" },
{ "id": 23, "name": "Digital Photo Frame", "price": 79.99, "quantity ": "445" },
{ "id": 24, "name": "Sports Bottle", "price": 15.99, "quantity ": "27" },
{ "id": 25, "name": "Travel Shoe Bags Set", "price": 15.99, "quantity ": "119" },
{ "id": 26, "name": "Classic Black Dress", "price": 79.99, "quantity ": "2" },
{ "id": 27, "name": "Pesto Pasta Salad", "price": 4.99, "quantity ": "48848" },
{ "id": 28, "name": "Luxury Rolling Makeup Case", "price": 99.99, "quantity ": "5689" },
{ "id": 29, "name": "Hot Dog Buns", "price": 2.49, "quantity ": "54" },
{ "id": 30, "name": "Craft Beer Mustard", "price": 3.99, "quantity ": "6488" },
{ "id": 31, "name": "Almond Joy Munch Bars", "price": 1.39, "quantity ": "489" },
{ "id": 32, "name": "Sriracha Hot Chili Sauce", "price": 2.99, "quantity ": "12" },
{ "id": 33, "name": "Grilled Vegetable Medley", "price": 4.49, "quantity ": "674" },
{ "id": 34, "name": "Knitted Infinity Scarf", "price": 29.99, "quantity ": "16" },
{ "id": 35, "name": "Lentil Soup", "price": 2.49, "quantity ": "48" },
{ "id": 36, "name": "Butternut Squash Soup", "price": 3.49, "quantity ": "334" },
{ "id": 37, "name": "Portable Pet Pooper Scooper", "price": 12.99, "quantity ": "602" },
{ "id": 38, "name": "Suction Cup Hooks", "price": 9.99, "quantity ": "41" },
{ "id": 39, "name": "Adjustable Standing Desk", "price": 299.99, "quantity ": "6" },
{ "id": 40, "name": "Party Mini Dress", "price": 69.99, "quantity ": "2214" },
{ "id": 41, "name": "Vintage Button-Down Shirt", "price": 45.99, "quantity ": "11" },
{ "id": 42, "name": "Granola Clusters", "price": 4.99, "quantity ": "0" },
{ "id": 43, "name": "Durable Hiking Boots", "price": 89.99, "quantity ": "3" },
{ "id": 44, "name": "Portable Bluetooth Keyboard", "price": 39.99, "quantity ": "070" },
{ "id": 45, "name": "Floral Summer Dress", "price": 39.99, "quantity ": "7401" },
{ "id": 46, "name": "Luxe Velvet Blazer", "price": 89.99, "quantity ": "90425" },
{ "id": 47, "name": "Tandoori Chicken Skewers", "price": 7.99, "quantity ": "1" },
{ "id": 48, "name": "Lemon Basil Pasta Sauce", "price": 4.99, "quantity ": "0407" },
{ "id": 49, "name": "Sketchbook", "price": 14.99, "quantity ": "6" },
{ "id": 50, "name": "Home Karaoke System", "price": 129.99, "quantity ": "74629" }]


const subTotal = cartItem.reduce((subTotal, product) => {
    return subTotal + (product.price * product["quantity "])
}, 0)


// console.log(subTotal.toFixed(2));

const players = [
    { name: 'Jamal', score: 88 },
    { name: 'Morsalin', score: 81 },
    { name: 'Rakib', score: 95 },
    { name: 'Topu', score: 91 },
    { name: 'Rana', score: 720 }
]

const bestPlayer = players.reduce((bestPlayer, player) => {
    console.log(bestPlayer);
    if(bestPlayer.score>player.score){
        return bestPlayer
    }
    return player
}, players[0])

console.log(bestPlayer);