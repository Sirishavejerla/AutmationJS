/* Declare a variable for each data type (string, number, boolean, null, undefined) and print their values. */

let x = "Hello Java script";
let y = 10;
let z = 3;
let d;

console.log("String:", x);
console.log("Number:", y);
console.log("Boolean:", y>z);
console.log("undefined:", d);


/* Swap the values of two variables without using a temporary variable.*/

let a = 10;
let b = 20;
/* using destructing assignment */
[a , b] = [b , a];

console.log("A value is swapped as b:", a);
console.log("B value is swapped as a:", b);

/* Declare a constant for the value of π (pi) and calculate the area of a circle with a given radius. */
/* declaring pi is assigned the value of Math.PI which is a built-in constant in JavaScript */
const pi = Math.PI;
let radius = 15;
/* Decalaring a function named areaOfCircle that takes two parameters radius and pi.*/
const areOfCircle = (pi, radius) => {
    return pi * radius * radius;
}
/* we use console.log() to display the result of calling areaOfCircle with radius and pi as arguments.*/
console.log("Area of circle", areOfCircle(pi, radius));
