// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    // buttons
    const takeOffButton = document.getElementById("takeoff");
    const landingButton = this.document.getElementById("landing");
    const abortButton = this.document.getElementById("missionAbort");

    const leftButton = this.document.getElementById("left");
    const rightButton = this.document.getElementById("right");
    const upButton = this.document.getElementById("up");
    const downButton = this.document.getElementById("down");

    let rocketPosX = 0;
    let rocketPosY = 0;

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const rocket = document.getElementById("rocket");
    const altitude = document.getElementById("spaceShuttleHeight");

    console.log(altitude);
    // console.log(shuttleBackground.style.height);
    // console.dir(rocket);

    // rocket.style.top = "90%";


    takeOffButton.addEventListener("click", function() {
        let shouldTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (shouldTakeoff) {
            flightStatus.innerHTML = "Shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue";
            altitude.innerHTML = 10000;

            // let floor = shuttleBackground.style.boxSizing;
            
        }

        
    });

    landingButton.addEventListener("click", function() {
        flightStatus.innerHTML = "Shuttle has landed"
        shuttleBackground.style.backgroundColor = "green";
        altitude.innerHTML = 0;
        resetRocket();  
    });

    //TODO update these this!!
    abortButton.addEventListener("click", function() {
        flightStatus.innerHTML = "Shuttle has landed"
        shuttleBackground.style.backgroundColor = "green";
        resetRocket();
    });

    // event delegation - event.target lets us look at what has been clicked on so we can avoid making click events for each button.
    this.document.addEventListener('click', function(event) {
        console.log(event.target.id);

        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"));

        if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2) - 40) {
            // console.log(rocket.style.left)   // outputting an empty string
            // rocket.style.left -= 
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + "px";
        }

        if (event.target.id === "right") {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + "px";
        }

        if (event.target.id === "up" && altitude < 25000) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosY + "px";
        }

        if (event.target.id === "down") {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosY + "px";
        }
    })

    function resetRocket() {
        rocketPosY = 0;
        rocketPosX = 0;
        altitude.innerHTML = 0;
        rocket.style.marginBottom = 0;
    }
});