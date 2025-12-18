'use strict'

//Handles the navigation and automatic transition of a slideshow container



  //make a variable for the slide index
  let slideIndex = 1;
  //variable for the transition interval id
  let intervalID = null;

  showSlides(slideIndex);
  startInterval()





  //Next and previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
    //reset the transition interval
    clearInterval(intervalID);
    startInterval();
  }

  //Bubble controls for selecting a specific slide
  function currentSlide(n) {
    showSlides(slideIndex = n);
    //reset the transition interval
    clearInterval(intervalID);
    startInterval();
  }


  //function to display the slide at index n
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  //change to the next slide every 5 seconds
  function startInterval() {
    intervalID = setInterval(transition, 5000);
  }
  //function to transition to the next slide
  function transition() {
    slideIndex += 1;
    showSlides(slideIndex);
  }

