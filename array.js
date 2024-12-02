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

/* Write a program to count the number of even and odd numbers in an array. */

const num = [1, 1, 3, 4, 5,,9, 8, 7];
let evenCount = 0;
let oddCount = 0;

function countEvenodd (num) {
   for(let i = 0; i < num.length; i++){
      if (num[i] % 2 === 0) {
        evenCount++;  // Increment even count if the number is even
        } else {
        oddCount++;   // Increment odd count if the number is odd
        }
    }
    return {
        evenCount: evenCount,
        oddCount: oddCount
    };
}

const result = countEvenodd (num);

console.log(`Even numbers count: ${result.evenCount}`);
console.log(`Odd numbers count: ${result.oddCount}`);


/* Remove duplicates from an array of numbers.*/

function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        // If the element is not already in the uniqueArray, add it
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }

    return uniqueArray;
}

const arr = [1, 3, 2, 3, 4, 4, 6, 5, 6];
const res = removeDuplicates(arr);

console.log(res);

/* Create an array of strings and sort them alphabetically.*/

const arrayString = ["Apple", "Cat", "Dog", "Ball"]

arrayString.sort();

console.log(arrayString);
