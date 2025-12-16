'use-strict'


//does not detect double tap resizes!!!!!

//A handler for the navigation bar//


let navBar = document.getElementById("navBar");
let mediaQuery = window.matchMedia("(max-width: 640px");
let opened = false;

//Toggle the navigation bar when the mobile button is pressed
function toggleNav() {
    //Check if the current window with matches the media query for mobile widths
    if (mediaQuery.matches) {
            //Then check if the mobile navigation bar is already open. 
        if (opened) {
            //if opened, hide the navigation
            navBar.style.display = "none";
            opened = false;
        } else {
            //otherwise, show the navigation
            navBar.style.display = "grid";
            opened = true;
        }
        //if the current window does not match the media query, show the nav bar
    } else {
        navBar.style.display = "grid";
    }
}


//To handle resizing while the menu is open, add an event listener for resize
window.addEventListener('resize', checkState);

//Check the state of the media query match
function checkState() {
    //if the state does not match, as in, the window was resized from
    //mobile to desktop widths, ensure the navbar is displayed
    if (!mediaQuery.matches) {
        navBar.style.display = "grid";
    }
    //otherwise, ensure the navbar is hidden by default
    else {
        navBar.style.display = "none";
        opened = false;
    }
}