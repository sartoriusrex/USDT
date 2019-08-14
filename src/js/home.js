// ===News Show Change Layout based on Image dimensions
// Change Layout of News Article Container depending on if the image is wider than it is tall.


var pageURL = window.document.URL;
var newsString = "news/";

if (pageURL.includes(newsString)) {
  changeNewsShowLayout();
}


function changeNewsShowLayout () {
  var newsShowContainer = document.getElementsByClassName("news-show__container");
  var newsShowPhoto = document.getElementById("news-show__image");

  if (newsShowPhoto.naturalHeight > newsShowPhoto.naturalWidth) {
    newsShowContainer[0].classList.add("news-show__container-long");
  }
}


// ===HOME PAGE LAYOUT================================
// if Home, make slideshow happen and change layout of news articles--
// Check if home by counting number of "/". If it is 3, then run script

var slideIndex = 1;


if (pageURL.split("\/").length-1 === 3 && pageURL.endsWith("\/")) {
  addSlideNavDot();
  mountComponent();
  addSlideNav();
}

// ======Slideshow Logic======

// ----------begin slideshow----------------

function mountComponent() {
  this.showSlides( slideIndex );
  myTimer = setInterval( function(){ plusSlides( 1 ) } , 3500);
}

// ----------Remove visibility and add visibility based on index-------------

function showSlides( n ) {
  var i;
  var slides = Array.from(document.getElementsByClassName("slider-item"));
  var dots = Array.from(document.getElementsByClassName("square"));

  if ( n > slides.length ) { slideIndex = 1 }
  if ( n < 1) { slideIndex = slides.length }
  for ( i = 0; i < slides.length; i++ ) {
    slides[i].style.display = "none";
  }
  for ( i = 0; i < dots.length; i++ ) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex-1].style.display = "flex";
  dots[slideIndex-1].classList.add("active");
}

// -------Next and Previous Slide Logic-----------

function plusSlides( n ) {
  clearInterval( myTimer );
  showSlides( slideIndex += n );
  if ( n = -1 ) {
    myTimer = setInterval( function(){ plusSlides( n + 2 ) } , 3500);
  } else {
    myTimer = setInterval( function(){ plusSlides( n + 1 ) } , 3500);
  }
}

function currentSlide( n ) {
  clearInterval( myTimer );
  showSlides( slideIndex = n );
  if ( n = -1 ) {
    myTimer = setInterval( function(){ plusSlides( n + 2 ) } , 3500);
  } else {
    myTimer = setInterval( function(){ plusSlides( n + 1 ) } , 3500);
  }
}

// Add slideshow controls to buttons

function addSlideNav(){
  var leftNav = Array.from(document.getElementsByClassName("slider-btn-left"));
  var rightNav = Array.from(document.getElementsByClassName("slider-btn-right"));

  leftNav[0].addEventListener( "click", function (){ plusSlides( -1 ) });
  rightNav[0].addEventListener( "click", function(){ plusSlides( 1 ) });
}

// -----add Click Events to dots---------

function addSlideNavDot(){
  var dots = Array.from(document.getElementsByClassName( "square" ));

  dots.forEach( function( dot, i ) {
    dot.addEventListener( "click", function(){ currentSlide( i + 1 ) });
  });
}