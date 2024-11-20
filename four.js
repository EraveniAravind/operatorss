// Write a program that takes three numbers from the user. The program should:

// Add the first two numbers and display the result.

// Compare the sum of the first two numbers with the third number using comparison operators.

// Use a logical operator (&&) to check if the sum of the first two numbers is greater than 50 and the third number is less than 100, and log the result.

let a=+prompt("enter your first num")
let b=+prompt("enter your second num")
let c=+prompt("enter your third num")
console.log(a+b);
console.log(a&b>c);
console.log(a+b&&c<100);