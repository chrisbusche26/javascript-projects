let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
num = 123.45
let num1 = String(num).slice(0, 3);
let num2 = String(num).slice(4, 6);
console.log((num1 + num2).length);

//This is so much easier!
console.log(String(num).length - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
num = 1234.56
if (String(num).includes(".")) {
    console.log(String(num).length - 1);
} else {
    console.log(String(num).length);
}
