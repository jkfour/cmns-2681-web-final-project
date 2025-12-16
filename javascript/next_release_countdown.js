"use strict";

//A product release countdown timer that displays
//the day of release and the time remaining

/*Execute the function to run and display the countdown clock*/
runClock();
setInterval("runClock()", 1000)

/*Create and run the countdown clock*/
function runClock() {

    /*Store the current date*/
    var currentDay = new Date();


    /*Calculate the days until the next release*/
    var newRelease = new Date("02/18/2026");
    var nextYear = currentDay.getFullYear() + 1;
    newRelease.setFullYear(nextYear);
    var daysLeft = (newRelease - currentDay) / (1000 * 60 * 60 * 24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    /*Display the release date and time left until the next release*/
    document.getElementById("release-date").textContent = "Coming " + newRelease.toLocaleDateString() + ":";

    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}