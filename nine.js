// Create a program that evaluates a person’s eligibility for a loan. The program should:

// Ask for the person’s age, salary, and credit score.

// Use logical operators (&&, ||) to check if the person is eligible for a loan (e.g., age ≥ 21, salary > $30,000, or credit score > 650).

// Log whether the person is approved or denied based on these conditions.

let age=+prompt("enter the age: ")
let salary=+prompt("enter the salary: ")
let creditScore=+prompt("enter the creditScore: ")
if(age>=21 && salary>30000 && creditScore>650){
    console.log("eligible for loan")
}
else{
    console.log("not eligible")
}