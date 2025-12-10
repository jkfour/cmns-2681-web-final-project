
let navBar = document.getElementById("topNav");
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


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "0";
  } else {
    navBar.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 