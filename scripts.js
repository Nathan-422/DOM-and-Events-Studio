// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log("Window loaded");

    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    takeOff.addEventListener("click", function() {
        window.confirm("Confirm that the shuttle is ready for takeoff.");
        flightStatus.innerHTML = "Shuttle in flight."
        shuttleBackground.style.backgroundColor = "blue";
    });
});