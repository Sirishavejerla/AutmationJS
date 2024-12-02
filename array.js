/* An array is a special variable, which can hold more than one value: */
/* Create an array of integers and find the maximum and minimum values.*/

const number = [1, 23, 19, 16, 14]

let max = number [0];
let min = number [0];

for (i = 1; i < number.length; i++) {
    if (number[i] > max){
        max = number[i]
    }
    if (number[i] < min){
        min = number[i]
    }
}

/*max = number [0], max = 1
min = number [0], min = 1
 i= 1 number[1] > max , 
 1 > 1 max remains 1
 i =1 number[1] < min,
 1 < 1 min remins 1

 i=2 number[2] > max
 23 > 1 max remains 23
i=2 number[2] < min
 23 < 1 min remains 1

*/

console.log("Maximum value:", max);
console.log("Minimum value:", min);