
let navBar = document.getElementById("navBar");
let mediaQuery = window.matchMedia("(max-width: 640px");
let opened = false;

function toggleNav() {

    if (mediaQuery.matches) {
        if (opened) {
            navBar.style.display = "none";
            opened = false;
        } else {
            navBar.style.display = "block";
            opened = true;
        }
    } else {
        navBar.style.display = "block";
    }
}