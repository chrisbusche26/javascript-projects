//Code Your Solution Below
function init() {
    window.addEventListener("load", function () {
        let form = document.querySelector("form");
        form.addEventListener("submit", function (event) {
            let testNameInput = document.querySelector("input[name = testName]");
            let testDateInput = document.querySelector("input[name = testDate]");
            let rocketTypeInput = document.querySelector("input[name = rocketType]");
            let boosterCountInput = document.querySelector("input[name = boosterCount]");
            let windRatingInput = document.querySelector("input[name = windRating]");
            let prodServersInput = document.querySelector("input[name = producitonServers]");
            if (testNameInput.value === ""
                || testDateInput.value === ""
                || rocketTypeInput.value === ""
                || boosterCountInput.value === ""
                || windRatingInput.value === ""
                || prodServersInput.value === "") {
                alert("All fields are required!");
            }
        });
    });
};

window.addEventListener("load", init);