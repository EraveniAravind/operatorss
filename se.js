// Create a program that accepts a sentence from the user and:

// Use string operators to reverse the sentence.

// Check if the reversed sentence is longer than 15 characters using a comparison operator.

// Use a logical operator (||) to log a message if either the original or reversed sentence has more than 20 characters.

let user=prompt("enter the sentence: ")
let rev=(user.split("").reverse().join())
console.log(rev)
if(rev>15){
    console.log("longer than 15 characters")
}else{
    console.log("less than 15  characters")
}
if(rev>20 || user>20){
    console.log("longer than 20 characters")
}
else{
    console.log("less than 20 characters")
}
