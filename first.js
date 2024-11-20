// Question 1:
// Write a program that asks the user for two numbers. Perform the following:
// Add, subtract, multiply, and divide the two numbers using arithmetic operators.
// Compare the two numbers using comparison operators (>, <, ==) and log the result.
// Use an assignment operator (+=) to add 5 to the first number and log the updated value.
let a=+prompt('enter first num:  ');
let b=+prompt('enter second num: ');
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a>b);
console.log(a<b);
console.log(a==b);
a+=5;
console.log(a)