
/* OPERATORS
Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators */

/* Write a program to calculate the simple interest given principal, rate, and time.*/
let principal = 1000;
let rate = 12;
let time = 4;

let interest = (principal * rate * time )/100;

console.log ("The interest amount is", interest);

/* Check if a number is divisible by both 3 and 5 using logical operators. */
let number = 15;

function checkDivisibilty (number) {
if ((number % 3 === 0) && (number % 5 === 0)) /* equal value and equal type*/
    {
        console.log(number + " is divisible by both 3 and 5") 
    }else{
        console.log(number + " is not divisible by both 3 and 5");
    }
}
checkDivisibilty (number);

/* Write a program to increment a variable by 5 using both += and the increment (++) operator.*/

let num = 10;
num += 5; /* num ++; num ++; num ++; num ++; num ++; */
console.log("Incrementing the numbber by 5 is ", num);



