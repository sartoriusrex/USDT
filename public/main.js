// Change Layout of News Article Container depending on if the image is wider than it is tall.

var newsLinkContainers = document.getElementsByClassName("newsLinkRow");
var newsPhotos = document.getElementsByClassName("newsPhotoRow");

function changeNewsLayout() {
  Array.from(newsLinkContainers).forEach( ( newslinkcontainer ) => {
    Array.from(newsPhotos).forEach( ( newsphoto ) => {
      if ( newsphoto.naturalHeight < newsphoto.naturalWidth ) {
        newslinkcontainer.classList.add("newsLinkColumn");
        newslinkcontainer.classList.remove("newsLinkRow");
        newsphoto.classList.add("newsPhotoColumn");
        newsphoto.classList.remove("newsPhotoRow");
      }
    });
  });
}

changeNewsLayout();

// ==========================================================
// Slideshow Logic

var slideIndex = 1;

// ----------begin slideshow----------------

function mountComponent() {
  this.showSlides(slideIndex);
  myTimer = setInterval(() => {this.plusSlides(1);}, 3500);
}

mountComponent();

// ----------Remove visibility and add visibility based on index-------------

function showSlides( n ) {
  var i;
  var slides = Array.from(document.getElementsByClassName("sliderLI"));
  var dots = Array.from(document.getElementsByClassName("square"));
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].classList.add("active");
}

// -------Next and Previous Slide Logic-----------

function plusSlides( n ) {
  clearInterval(myTimer);
  this.showSlides(slideIndex += n);
  if ( n = -1 ) {
    myTimer = setInterval(() => {this.plusSlides(n+2);}, 3500);
  } else {
    myTimer = setInterval(() => {this.plusSlides(n+1);}, 3500);
  }
}

function currentSlide( n ) {
  clearInterval(myTimer);
  this.showSlides( slideIndex = n );
  if ( n = -1 ) {
    myTimer = setInterval(() => {this.plusSlides(n+2);}, 3500);
  } else {
    myTimer = setInterval(() => {this.plusSlides(n+1);}, 3500);
  }
}

// Add slideshow controls to buttons

var leftNav = Array.from(document.getElementsByClassName("slideleft"));
var rightNav = Array.from(document.getElementsByClassName("slideright"));

function addSlideNav(){
  leftNav[0].addEventListener("click",function (){
    plusSlides(-1);
    });
  rightNav[0].addEventListener("click",function() {
    plusSlides(1);
    });
}

addSlideNav();


// -----add Click Events to dots---------


  var dots = Array.from(document.getElementsByClassName("square"));
  
function addSlideNavDot(){
  dots.forEach(function(dot, i) {
  dot.addEventListener("click", function(){
    currentSlide(i+1);
  });
});
}

addSlideNavDot();