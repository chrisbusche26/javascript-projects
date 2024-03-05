//TODO: Add Your Code Below
window.addEventListener("load", function () {
    //let json = [];
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        response.json().then(function (json) {
            let div = document.getElementById("container");
            console.log(json);
            let skills = "";
            json = json.sort(function (a, b) {
                return a.hoursInSpace - b.hoursInSpace;
            });
            for (let obj of json) {
                console.log(obj);
                let color = "";
                if (obj.active) {
                    color = "green";
                }
                skills += obj.skills;
                skills.split(",").join(", ");
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${obj.firstName} ${obj.lastName}</h3>
                        <ul>
                        <li>Hours in space: ${obj.hoursInSpace}</li>
                        <li style="color: ${color}">Active: ${obj.active}</li>
                        <li>Skills: ${obj.skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${obj.picture}>
                </div>
                `;
                // let activeStatus = document.getElementById("active");
                // if (obj.active === true) {
                //     activeStatus.style.color = "green";
                // }
            }
        });
    });
});