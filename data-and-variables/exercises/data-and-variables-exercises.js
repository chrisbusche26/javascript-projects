// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let marsDistanceKm = 225000000;
let moonDistanceKm = 384400;
const milesPerKilometer = 0.621;


// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof marsDistanceKm);
console.log(typeof moonDistanceKm);
console.log(typeof milesPerKilometer); 

// Calculate a space mission below
let milesToMars = marsDistanceKm * milesPerKilometer;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24; 

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = moonDistanceKm * milesPerKilometer;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon."); 