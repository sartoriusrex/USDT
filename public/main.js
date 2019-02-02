// Flash Message Display Logic

var message = Array.from(document.getElementsByClassName('message'));
var flashContainer = document.getElementById('flashContainer');

if (message[0]) {
  flashContainer.style.display = "flex";
}


// ===Responsive Menu Displays======

// login Menu

var openLoginIcon = document.getElementById("openLogin");
var closeLoginIcon = document.getElementById("closeLogin");

openLoginIcon.addEventListener("click", function (){
  makeLoginResponsive();
});
closeLoginIcon.addEventListener("click", function(){
  makeLoginResponsive();
});

function makeLoginResponsive() {
  var userLoginDiv = document.getElementsByClassName("userLoginDiv");
  var headerUtil = document.getElementsByClassName("headerUtilities");

  userLoginDiv[0].classList.toggle("responsive");
  headerUtil[0].classList.toggle("responsive");
}

// Social menu

var openSocialIcon = document.getElementById("openSocial");
var closeSocialIcon = document.getElementById("closeSocial");

openSocialIcon.addEventListener("click", function (){
  openSocialResponsive();
});
closeSocialIcon.addEventListener("click", function (){
  closeSocialResponsive();
});

function openSocialResponsive() {
  toggleSocialResponsiveness();

  var userLoginDiv = document.getElementsByClassName("userLoginDiv");

  userLoginDiv[0].style.display = "none";
}

function closeSocialResponsive() {
  toggleSocialResponsiveness();

  var userLoginDiv = document.getElementsByClassName("userLoginDiv");

  userLoginDiv[0].style.display = "flex";
}

function toggleSocialResponsiveness () {
  var socialMediaDiv = document.getElementsByClassName("socialMedia");
  var headerUtil = document.getElementsByClassName("headerUtilities");

  socialMediaDiv[0].classList.toggle("responsiveSocial");
  headerUtil[0].classList.toggle("responsiveSocial");
}

// ===HAMBURGER MENU AND SUBMENUS===

var closeMenu = document.getElementById("closeMenu");
var openMenu = document.getElementById("navIcon");

closeMenu.addEventListener("click", function (){
  toggleNavMenu();
});

openMenu.addEventListener("click", function (){
  toggleNavMenu();
});

function toggleNavMenu (){
  var navlist = document.getElementsByClassName("navlist");

  navlist[0].classList.toggle("responsive");
}

// ===FOOTER MENUS===

var openFooterContact = document.getElementsByClassName(" openFooterContact");
var closeFooterContact = document.getElementsByClassName(" closeFooterContact");

openFooterContact[0].addEventListener("click", function (){
  toggleFooterContact();
});
closeFooterContact[0].addEventListener("click", function (){
  toggleFooterContact();
});

function toggleFooterContact() {
  var footerContact = document.getElementsByClassName("footer-contact");
  
  footerContact[0].classList.toggle("responsive");
}

// -----

var  openFooterPolicies = document.getElementsByClassName(" openFooterPolicies");
var  closeFooterPolicies = document.getElementsByClassName(" closeFooterPolicies");

openFooterPolicies[0].addEventListener("click", function (){
  toggleFooterPolicies();
});
closeFooterPolicies[0].addEventListener("click", function (){
  toggleFooterPolicies();
});

function toggleFooterPolicies() {
  var footerPolicies = document.getElementsByClassName("footer-online-policies");
  
  footerPolicies[0].classList.toggle("responsive");
}

// -----

var  openFooterIndices = document.getElementsByClassName(" openFooterIndices");
var  closeFooterIndices = document.getElementsByClassName(" closeFooterIndices");

openFooterIndices[0].addEventListener("click", function (){
  toggleFooterIndicies();
});
closeFooterIndices[0].addEventListener("click", function (){
  toggleFooterIndicies();
});

function toggleFooterIndicies() {
  var footerIndicies = document.getElementsByClassName("footer-indices");
  
  footerIndicies[0].classList.toggle("responsive");
}




// ===News Show Change Layout based on Image dimensions
// Change Layout of News Article Container depending on if the image is wider than it is tall.


var pageURL = window.document.URL;
var newsString = "news/";

if (pageURL.includes(newsString)) {
  changeNewsShowLayout();
}


function changeNewsShowLayout () {
  var newsShowContainer = document.getElementsByClassName("newsShowContainer");
  
}


// ===HOME PAGE LAYOUT================================
// if Home, make slideshow happen and change layout of news articles--
// Check if home by counting number of "/". If it is 3, then run script

// slidexIndex var
var slideIndex = 1;


if (pageURL.split("\/").length-1 === 3) {
  changeNewsLayout();
  addSlideNavDot();
  mountComponent();
  addSlideNav();
}

// ===NewsLayout based on image size===

function changeNewsLayout() {
  var newsLinkContainers = document.getElementsByClassName("newsLinkRow");
  var newsPhotos = document.getElementsByClassName("newsPhotoRow");
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

// ======Slideshow Logic======

// ----------begin slideshow----------------

function mountComponent() {
  this.showSlides(slideIndex);
  myTimer = setInterval(() => {this.plusSlides(1);}, 3500);
}

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

function addSlideNav(){
  var leftNav = Array.from(document.getElementsByClassName("slideleft"));
  var rightNav = Array.from(document.getElementsByClassName("slideright"));

  leftNav[0].addEventListener("click",function (){
    plusSlides(-1);
    });
  rightNav[0].addEventListener("click",function() {
    plusSlides(1);
    });
}

// -----add Click Events to dots---------

function addSlideNavDot(){
  var dots = Array.from(document.getElementsByClassName("square"));

  dots.forEach(function(dot, i) {
  dot.addEventListener("click", function(){
    currentSlide(i+1);
    });
  });
}

