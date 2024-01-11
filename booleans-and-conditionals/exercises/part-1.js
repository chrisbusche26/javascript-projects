// Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 21000;
let engineTemperature = 1200;
let commandOveride = true;

// BEFORE running the code, predict what will be printed to the console by the following statements:

//The first two statements will not print because the conditions return as false.  Therefore, the string tied to the else statement will print.
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}

//Conditionals for safety rules:

//crewStatus
if (crewStatus === true) {
   console.log("Crew Ready");
} else {
   console.log("Crew Not Ready");
}

//computerStatusCode
if (computerStatusCode === 200) {
   console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
   console.log("Success! Computer online.");
} else {
   console.log("ALERT: Computer Offline!");
}

//shuttleSpeed
if (shuttleSpeed > 17500) {
   console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
   console.log("ALERT: Cannot maintain orbit!");
} else {
   console.log("Stable speed");
}

//Do these code blacks produce the same result? Yes or No.

if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
   console.log("all systems go");
} else {
   console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
   console.log("WARNING. Not ready");
} else {
   console.log("all systems go");
}

/* Yes. In the first example, since all of the conditions return true we print the string attached to the if statement.
In the second example, since not one of the conditions return true we print the string attached to the else statement. */

//Fuel Status
if (fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight === "red blinking") {
  console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
  console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good.");
} else {
  console.log("Fuel and engine status pending...");
}

//commandOveride
if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOveride) {
   console.log("Cleared to launch!");
} else {
   console.log("Launch scrubbed");
}