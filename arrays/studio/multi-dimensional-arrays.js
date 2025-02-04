const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

food = food.split(',').sort().join(', ');
equipment = equipment.split(',').sort().join(', ');
pets = pets.split(',').sort().join(', ');
sleepAids = sleepAids.split(',').sort().join(',');

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(food, equipment, pets, sleepAids);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let info = input.question('Choose a cabinet between 0 and 3. ');
info = Number(info);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (info > 3 || info < 0) {
    console.log('Error. Invalid Number.');
} else {
    console.log(`Cabinet ${info} contains ${cargoHold[info]}`)
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

cabinet = input.question('Choose a cabinet between 0 and 3. ')
cabinet = Number(cabinet)
let item = input.question('Enter an item. ')

if (cargoHold[cabinet].includes(item)) {
    console.log(`Cabinet $(cabinet) DOES contain ${item}.`)
} else {
    console.log(`Cabinet ${cabinet} DOES NOT contain ${item}.`)
}