// Write a program that simulates a shopping cart:

// Ask the user to input the total amount.

// Use a ternary operator to apply a 15% discount if the total is over $150; otherwise, apply no discount.

// Use assignment operators to update the total amount after the discount and log the final price.

let total=+prompt("enter total amount: ")
(total>150)?"apply 15% discount":"no discount"
total=(15/100)*total
console.log(total)
