
// Write a program that calculates the total score of a student based on three input scores:

// Add the scores using arithmetic operators.

// Use a ternary operator to check if the total score is 60 or above to display "Passed" or "Failed."

// Use assignment operators to add bonus points (5) to the total score if it’s below 60, then recheck if the student has passed or failed after applying the bonus.

let sub1=+prompt("enter the marks: ")
let sub2=+prompt("enter the marks: ")
let sub3=+prompt("enter the marks: ")
let totalMarks=(sub1+sub2+sub3)
let Total=(totalMarks>=60) ? console.log("passed"):console.log( "failed")
if(totalMarks<60){
    totalMarks=totalMarks+5
    if(totalMarks>=60){
        console.log("passed")
    }else{
        console.log("failed")
    }
}

