/* Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed */

/* Check whether a given year is a leap year. */
let year = 2017;

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else{
        return false;
    }
}
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }

/* Write a program to determine if a person is eligible to vote based on their age. */
let age = 16;

function eligibleForVote (age) {
    return age >= 18;
}

if (eligibleForVote (age)) {
    console.log("He/She is egilbile for vote")
}else{
    console.log('He/she is not eligible for vote')
}

/* Create a program to check if a character is a vowel or consonant. */
function checkTheCharacter (char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        return "Vowel";
      } else if (char >= 'a' && char <= 'z') {
        return "Consonant";
      } else {
        // If the character is not a letter
        return "Invalid input! Please enter an alphabetic character.";
      }
}
const prompt = require("prompt-sync")();
let char = prompt("Enter a character:"); // Prompt the user for a character

let result = checkTheCharacter(char);
console.log(result);