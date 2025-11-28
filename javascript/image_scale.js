//Allows an image to be clicked on and expanded for closer viewing by creating
//a larger copy of the image, while adding a dimmed overlay to the page content
//to bring focus to the expanded image. Both the image and overlay are
//positioned fixed to maintain their coverage through any accidental scrolling of the page

//variables
let scaled = false;
let expandedContainer = document.getElementById("expandedImageContainer");
let overlay = document.getElementById("overlay");


//applied directly to images, scales the image and toggles the dimmed overlay
function scaleImage(img) {
    //clone the image and add to the expanded container
    let sourceImage = img.cloneNode(false);
    expandedContainer.appendChild(sourceImage);

    //if the image has not already been clicked on, makethe expanded container
    //visible and style the image to be centered and cover 90% of the viewport height.
    //otherwise remove any cloned images, hide the container and reset the component.
    if (!scaled) {
        expandedContainer.style.display = "block";
        sourceImage.style.position = "fixed";
        sourceImage.style.width = "auto";
        sourceImage.style.height = "90vh";
        sourceImage.style.top = "50%";
        sourceImage.style.left = "50%";
        sourceImage.style.transform = "translate(-50%, -50%) scale(0.9)";
        scaled = true;
    } else {
        removeAllChildNodes(expandedContainer);
        expandedContainer.style.display = "none";
        scaled = false;
    }
    //toggle the dimmed overlay
    backgroundBlur();
}
//function to toggle the dimmed overlay
function backgroundBlur() {
    if (scaled) {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
}
//function to remove child nodes from a specific node
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//appplied to the overlay, resets both the enlarged container and dimmed overlay when clicked
function reset() {
    removeAllChildNodes(expandedContainer);
    expandedContainer.style.display = "none";
    overlay.style.display = "none";
    scaled = false;
}