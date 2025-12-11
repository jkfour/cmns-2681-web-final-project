"use strict";

/*Execute the function to run and display the countdown clock*/
runClock();
setInterval("runClock()", 1000)

/*Function to create and run the countdown clock*/
function runClock() {

    /*Store the current date*/
    var currentDay = new Date();


    /*Calculate the days until the next release*/
    var newRelease = new Date("February 18, 2026");
    var nextYear = currentDay.getFullYear() + 1;
    newRelease.setFullYear(nextYear);
    var daysLeft = (newRelease - currentDay) / (1000 * 60 * 60 * 24);
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    /*Display the time left until New Year's Eve*/
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}