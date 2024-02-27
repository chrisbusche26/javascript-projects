function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    //when take off button clicked, change text to Houston, we have liftoff!
    button.addEventListener("click", function (event) {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });

    missionAbort.addEventListener("mouseover", function (event) {
        let button = event.target;
        button.style.backgroundColor = "red";
    });
    
    missionAbort.addEventListener("mouseout", function (event) {
        let button = event.target;
        button.style.backgroundColor = "";
    });

    missionAbort.addEventListener("click", function (event) {
        let answer = window.confirm("Are you sure you want to abort the mission?");
        if (answer === true) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home";
        };
    });

}

window.addEventListener("load", init);
