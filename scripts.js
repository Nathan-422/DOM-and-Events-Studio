// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
  // buttons
  const takeOffButton = document.getElementById("takeoff");
  const landingButton = this.document.getElementById("landing");
  const abortButton = this.document.getElementById("missionAbort");

  let rocketPosX = 0;
  let rocketPosY = 0;
  let altitude = 0;

  const flightStatus = document.getElementById("flightStatus");
  const shuttleBackground = document.getElementById("shuttleBackground");
  const rocket = document.getElementById("rocket");
  const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

  takeOffButton.addEventListener("click", function () {
    if (flightStatus.innerHTML !== "Shuttle in flight") {
      let shouldTakeoff = window.confirm(
        "Confirm that the shuttle is ready for takeoff."
      );

      if (shouldTakeoff) {
        flightStatus.innerHTML = "Shuttle in flight";
        shuttleBackground.style.backgroundColor = "blue";
        rocketPosY = 10;
        altitude = 10000;
        rocket.style.marginBottom = rocketPosY + "px";
        spaceShuttleHeight.innerHTML = altitude;
      }
    }
  });

  landingButton.addEventListener("click", function () {
    if (flightStatus.innerHTML === "Shuttle in flight") {
      flightStatus.innerHTML = "The shuttle is landing. Landing gear engaged.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = 0;
      resetRocket();
    }
  });

  //TODO update these this!!
  abortButton.addEventListener("click", function () {
    if (flightStatus.innerHTML === "Shuttle in flight") {
      let shouldAbort = confirm("Confirm that you want to abort the mission.");

      if (shouldAbort) {
        flightStatus.innerHTML =
          "The shuttle is landing. Landing gear engaged.";
        shuttleBackground.style.backgroundColor = "green";
        resetRocket();
      }
    }
  });

  // event delegation - event.target lets us look at what has been clicked on so we
  // can avoid making click events for each button.
  this.document.addEventListener("click", function (event) {
    // console.log(event.target.id);

    let bkgWidth = parseInt(
      window.getComputedStyle(shuttleBackground).getPropertyValue("width")
    );
    // console.log(bkgWidth);

    if (flightStatus.innerHTML === "Shuttle in flight") {
      if (event.target.id === "left" && rocketPosX > -(bkgWidth / 2 - 40)) {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + "px";
        // console.log(rocketPosX); // debugging
      }

      if (event.target.id === "right" && rocketPosX < bkgWidth / 2 - 37) {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + "px";
        // console.log(rocketPosX);  // debugging
      }

      if (event.target.id === "up" && altitude < 250000) {
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + "px";
        altitude += 10000;
        spaceShuttleHeight.innerHTML = altitude;
    }
    
    if (event.target.id === "down" && altitude > 10000) {
        rocketPosY -= 10;
        rocket.style.marginBottom = rocketPosY + "px";
        altitude -= 10000;
        spaceShuttleHeight.innerHTML = altitude;
    }
    }
  });

  function resetRocket() {
    rocketPosY = 0;
    rocketPosX = 0;
    altitude = 0;
    spaceShuttleHeight.innerHTML = 0;
    rocket.style.marginBottom = 0;
    rocket.style.marginLeft = 0;
  }
});
