//Allows an image to be clicked on and expanded for closer viewing by creating
//a larger copy of the image, while adding a dimmed overlay to the page content
//to bring focus to the expanded image. Both the image and overlay are
//positioned fixed to maintain their coverage through any accidental scrolling of the page

//variables
let scaled = false;
const expandedContainer = document.getElementById("expandedImageContainer");
const overlay = document.getElementById("overlay");


//applied directly to images, scales the image and toggles the dimmed overlay
function scaleImage(img, orientation) {

    if (orientation === 'portrait') {

        if (!scaled) {
            //clone the image and add as a child to the expanded container
            const sourceImage = img.cloneNode(false);
            expandedContainer.appendChild(sourceImage);
            //make the expanded container visible
            expandedContainer.style.display = "block";
            expandedContainer.style.top = "0";
            expandedContainer.style.left = "0";
            sourceImage.style.position = "fixed";
            sourceImage.style.background = "transparent";

            sourceImage.style.width = "calc(100vw - 1em)";
            sourceImage.style.height = "calc(100vh - 1em)";
            sourceImage.style.top = "0.5em";
            sourceImage.style.left = "0.5em";

            scaled = true;
        }
        else {
            //if the image is already scaled, remove cloned images and hide the container
            removeAllChildNodes(expandedContainer);
            expandedContainer.style.display = "none";
            scaled = false;
        }

    } else {
        //get values for the window width
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        //if the window width is greater than 600px
        if (vw >= 600) {
            //clone the image and add as a child to the expanded container
            const sourceImage = img.cloneNode(false);
            expandedContainer.appendChild(sourceImage);
            //make the expanded container visible
            expandedContainer.style.display = "block";
            expandedContainer.style.top = "0";
            expandedContainer.style.left = "0";
            sourceImage.style.position = "fixed";
            sourceImage.style.background = "transparent";


            sourceImage.style.width = "calc(100vw - 1em)";
            sourceImage.style.height = "calc(100vh - 1em)";
            sourceImage.style.top = "0";
            sourceImage.style.left = "0";
            scaled = true;
        }
    }
    backgroundBlur();
}

//function to toggle the dimmed overlay
function backgroundBlur() {
    scaled ? overlay.style.display = "block" : overlay.style.display = "none";
}

//function to remove child nodes from a specified node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//appplied to the overlay and expanded container, resets both the enlarged container and dimmed overlay when clicked
function reset() {
    removeAllChildNodes(expandedContainer);
    expandedContainer.style.display = "none";
    overlay.style.display = "none";
    scaled = false;
}