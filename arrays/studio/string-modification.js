const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

cutLetters = str.slice(0, 3);
newStr = str.slice(3) + cutLetters;


//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`We can use string methods to turn ${str} into ${newStr}.`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let userInput = input.question('You try! Enter a number: ');

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (Number(userInput) > str.length) {
    cutLetters = str.slice(0, 3);
    newStr = str.slice(3) + cutLetters;
    console.log(`Input was longer than word length. Defaulting to 3 characters: ${newStr}.`);
} else if (Number(userInput) <= str.length && Number(userInput) >= 0) {
    cutLetters = str.slice(0, Number(userInput));
    newStr = str.slice(Number(userInput), str.length) + cutLetters;
    console.log(`${newStr}`);
} 