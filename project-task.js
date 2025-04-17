/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================



// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/


/*
🔹 Task 2: Transform Product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/


/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/

/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

// ============================================
// 🧪 Console Test Your Work
// ============================================

// console.log("Filtered products:", ...);
// console.log("Uppercased names:", ...);
// console.log("Discounted products:", ...);
// console.log("Total value in stock:", ...);

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// Task 1: Filter Products by Availability
function filterProducts(products, callback) {  //function accepts product array and a callback function
  return products.filter(callback);  //filters array based on callback
}
console.log("In-Stock Products:", filterProducts(products, availability => availability.inStock === true));

//Task 2: Transform Product Names
const transformed = products.map(({ name }) => ({ name: name.toUpperCase() }));  //creates a new array of product names in UPPERCASE.
console.log ('Transform Product Names:', transformed);

//Task 3: Generate Discounted Prices

function applyDiscount(discountPercent) {// higher-order function: Accepts a discount percentage 
  return function(product){   //Returns a function that takes a product
    return {                 //Returns a discounted price
      ...product,
      price: product.price - (product.price * discountPercent),
    }
  }
}
const discounted = products.map(applyDiscount(.1));   //calls function with a .1 discount

console.log ("Discounted:", discounted);


//Task 4: Calculate Total Inventory Value
const inStockTotal = products  //Stores total price of all in stock products
  .filter(product => product.inStock) // filter for in stock products
  .reduce((total, product) => total + product.price, 0);  //Sum prices

console.log("Total Inventory Value:", inStockTotal);


// ============================================
// Console Test
// ============================================
/*
In-Stock Products: [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Tablet', price: 800, inStock: true },
  { name: 'Monitor', price: 300, inStock: true }
]
Transform Product Names: [
  { name: 'LAPTOP' },
  { name: 'PHONE' },
  { name: 'TABLET' },
  { name: 'MONITOR' },
  { name: 'KEYBOARD' }
]
Discounted: [
  { name: 'Laptop', price: 900, inStock: true },
  { name: 'Phone', price: 450, inStock: false },
  { name: 'Tablet', price: 720, inStock: true },
  { name: 'Monitor', price: 270, inStock: true },
  { name: 'Keyboard', price: 90, inStock: false }
]
Total Inventory Value: 2100
*/