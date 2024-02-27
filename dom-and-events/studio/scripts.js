// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const flightStatus = document.getElementById("flightStatus");
    const flightScreen = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = 0;
    rocket.style.left = 0;
    
    takeOffButton.addEventListener("click", function () {
        let answer = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (answer === true) {
            flightStatus.innerHTML = "Shuttle in flight.";
            flightScreen.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }
    });

    landButton.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        flightScreen.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = 0;
        rocket.style.left = 0;
    });

    abortButton.addEventListener("mouseover", function (event) {
        let button = event.target;
        button.style.backgroundColor = "red";
    });
    
    abortButton.addEventListener("mouseout", function (event) {
        let button = event.target;
        button.style.backgroundColor = "";
    });

    abortButton.addEventListener("click", function () {
        let answer = window.confirm("Confirm that you want to abort mission.");
        if (answer === true) {
            flightStatus.innerHTML = "Mission aborted.";
            flightScreen.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = 0;
            rocket.style.left = 0;
        }
    });

    upButton.addEventListener("click", function () {
        if (parseInt(spaceShuttleHeight.innerHTML) < 250000) {
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        }
    });

    downButton.addEventListener("click", function () {
        if (parseInt(spaceShuttleHeight.innerHTML) > 0) {
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        }
    });

    leftButton.addEventListener("click", function () { 
        if (parseInt(rocket.style.left) > 0) {
            rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
        }
    });

    rightButton.addEventListener("click", function () { 
        if (parseInt(rocket.style.left) < 440) {
            rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
        }
    });
    

}

window.addEventListener("load", init);