'use-strict'


//does not detect double tap resizing from browser title!

//A handler for the navigation bar//


let navBar = document.getElementById("navBar");

let firstSub = document.querySelectorAll("li.firstSubmenu");
let secondSub = document.querySelectorAll("li.secondSubmenu");
let full = document.querySelectorAll("li.fullNav")


let opened = false;

//Toggle the navigation bar when the mobile button is pressed
function toggleNav() {
    //Check if the current window with matches the media query for mobile widths
    if (mobileQuery.matches) {
        //hide submenus
        firstSub.forEach(element => {
            element.style.display = "none";
        });
        secondSub.forEach(element => {
            element.style.display = "none";
        });
        full.forEach(element => {
            element.style.display = "none";
        });

        //Then check if the mobile navigation bar is already open. 
        if (opened) {
            //if opened, hide the navigation
            full.forEach(element => {
                element.style.display = "block";
            });
            opened = false;
        } else {
            //otherwise, show the navigation
            navBar.style.display = "grid";
            opened = true;
        }

    }

}


//To handle resizing while the menu is open, add an event listener for resize
window.addEventListener('resize', checkState);

//Check the state of the media query match
function checkState() {
    //if the state does not match, as in, the window was resized from
    //mobile to desktop widths, ensure the navbar is displayed
    if (!mobileQuery.matches) {
        navBar.style.display = "grid";
        toggleNav();
    }
    //otherwise, ensure the navbar is hidden by default
    else {
        navBar.style.display = "none";
        opened = false;
    }
}