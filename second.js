// Create a program that accepts the user's first name, last name, and age as inputs. The program should:

// Concatenate the first and last name to display the full name.

// Use a ternary operator to check if the user is 18 or older and display a message indicating whether they are eligible to vote.

// Use a string operator to calculate the length of the full name and log whether the name is longer than 10 characters.

let firstName=prompt("enter your firstName: ")
let lastName=prompt("enter your lastName: ")
let age=+prompt("enter your age: ")
let fullName=firstName+lastName;
console.log(fullName);
console.log(fullName.length);
(fullName.length>10)? console.log("name has 10 characters"): console.log("less than 10 characters")
(age>=18)? console.log("eligible to vote"): console.log("not eligible")



