
let scaled = false;

//create new container to avoid mucking up the background page?

function scaleImage(img) {
    let x = document.getElementById("expandedImageContainer");
    let y = img.cloneNode(false);
    x.appendChild(y);

    if (!scaled) {
        x.style.display = "block";
        y.style.position = "fixed";
        y.style.top = "50%";
        y.style.left = "50%";
        y.style.transform = "translate(-50%, -50%) scale(0.9)"; 
        scaled = true;
    } else {
        removeAllChildNodes(x);
        x.style.display = "none";
        scaled = false;
    }
    backgroundBlur();
}

function backgroundBlur() {
let x = document.getElementById("overlay");
    if (scaled) {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}