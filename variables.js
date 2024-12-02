/* Variables 
Var, let and const
For the old browsers we use var
always use const if the type/value doe snot change
let if we don't use const */

let x = 10;
let y = 20;
console.log (x+y);

/* below i have declared b as let , if i declared it as const the it will throw an error */

/* const variables must be assigned a value when they are declared: */
const z = 1;
const a = 2;
let b = z + a;
console.log(b=2);



/* Identifiers = JavaScript variables must be identified with unique names.
Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter.
Names can also begin with $ and _ (but we will not use it in this tutorial).
Names are case sensitive (y and Y are different variables).
Reserved words (like JavaScript keywords) cannot be used as names.
*/

/*  = is an Assignment operaor not an equals too */


/* const arrays */

const bike = ["vespa", "pulser", "royalEnfield"];
console.log(bike);

/* change an element */
bike[0] = ("KTM");
console.log(bike);

/* Add an element */

bike.push("R15");
console.log(bike);
