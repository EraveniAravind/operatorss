// Write a program that accepts two numbers from the user. The program should:

// Perform a bitwise &, |, and ^ operation on the numbers and display the results.

// Shift the bits of the first number two places to the left and display the result.

// Compare the original and shifted number using comparison operators and log the results.


let num1=+prompt("enter the num1: ")
let num2=+prompt("enter the num2: ")
console.log(num1 & num2)
console.log(num1 | num2)
console.log(num1 ^ num2)
let as=(num1<<2)
console.log(num1==as)