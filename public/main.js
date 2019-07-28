// Flash Message Display Logic

var message = Array.from(document.getElementsByClassName('alert-message'));
var flashContainer = Array.from(document.getElementsByClassName('container__flash'));

if ( message[0] ) {
  flashContainer[0].style.display = "flex";
}


// ===Responsive Menu Displays======

// login Menu
  // Open Login Menu
  // reference dom element
var openLoginIcon = document.getElementById("header__open-login-icon");

// Add click event and invoke function to add class
openLoginIcon.addEventListener("click", function (){
  openLoginMenu();
});

// Close Login  Menu
var closeLoginIcon = document.getElementById("header__close-login-icon");

closeLoginIcon.addEventListener("click", function(){
  closeLoginMenu();
});

function openLoginMenu(){
  toggleLoginResponsive();

  var socialDiv = document.getElementsByClassName("header__social-container");

  socialDiv[0].style.display = "none";
}

function closeLoginMenu(){
  toggleLoginResponsive();

  var socialDiv = document.getElementsByClassName("header__social-container");

  socialDiv[0].style.display = "flex";
}

function toggleLoginResponsive() {
  var loginDiv = document.getElementsByClassName("header__login-container");
  var headerUtil = document.getElementsByClassName("header__menu-container");

  loginDiv[0].classList.toggle("responsive");
  headerUtil[0].classList.toggle("responsive");
}

// Social menu

var openSocialIcon = document.getElementById("header__open-social-icon");
var closeSocialIcon = document.getElementById("header__close-social-icon");

openSocialIcon.addEventListener("click", function (){
  openSocialResponsive();
});
closeSocialIcon.addEventListener("click", function (){
  closeSocialResponsive();
});

function openSocialResponsive() {
  toggleSocialResponsiveness();

  var loginDiv = document.getElementsByClassName("header__login-container");

  loginDiv[0].style.display = "none";
}

function closeSocialResponsive() {
  toggleSocialResponsiveness();

  var loginDiv = document.getElementsByClassName("header__login-container");

  loginDiv[0].style.display = "flex";
}

function toggleSocialResponsiveness () {
  var socialMediaDiv = document.getElementsByClassName("header__social-container");
  var headerUtil = document.getElementsByClassName("header__menu-container");

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
  var navlist = document.getElementsByClassName("nav-list");

  navlist[0].classList.toggle("responsive");
}

// ===FOOTER MENUS===

var openFooterContact = document.getElementsByClassName(" footer__open-contact-button");
var closeFooterContact = document.getElementsByClassName(" footer__close-contact-button");

openFooterContact[0].addEventListener("click", function (){
  toggleFooterContact();
});
closeFooterContact[0].addEventListener("click", function (){
  toggleFooterContact();
});

function toggleFooterContact() {
  var footerContact = document.getElementsByClassName("footer__contact-container");
  
  footerContact[0].classList.toggle("responsive");
}

// -----

var  openFooterPolicies = document.getElementsByClassName(" footer__open-policies-button");
var  closeFooterPolicies = document.getElementsByClassName(" footer__close-policies-button");

openFooterPolicies[0].addEventListener("click", function (){
  toggleFooterPolicies();
});
closeFooterPolicies[0].addEventListener("click", function (){
  toggleFooterPolicies();
});

function toggleFooterPolicies() {
  var footerPolicies = document.getElementsByClassName("footer__policies-container");
  
  footerPolicies[0].classList.toggle("responsive");
}

// -----

var  openFooterIndices = document.getElementsByClassName(" footer__open-indices-button");
var  closeFooterIndices = document.getElementsByClassName(" footer__close-indices-button");

openFooterIndices[0].addEventListener("click", function (){
  toggleFooterIndicies();
});
closeFooterIndices[0].addEventListener("click", function (){
  toggleFooterIndicies();
});

function toggleFooterIndicies() {
  var footerIndicies = document.getElementsByClassName("footer__indices-container");
  
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
  var newsShowContainer = document.getElementsByClassName("news-show__container");
  var newsShowPhoto = document.getElementById("news-show__image");

  if (newsShowPhoto.naturalHeight > newsShowPhoto.naturalWidth) {
    newsShowContainer[0].classList.add("news-show__container-long");
  }
}


// ===HOME PAGE LAYOUT================================
// if Home, make slideshow happen and change layout of news articles--
// Check if home by counting number of "/". If it is 3, then run script

// slidexIndex var
var slideIndex = 1;


if (pageURL.split("\/").length-1 === 3 && pageURL.endsWith("\/")) {
  changeNewsLayout();
  addSlideNavDot();
  mountComponent();
  addSlideNav();
}

// ===NewsLayout based on image size===

function changeNewsLayout() {
  var newsLinkContainers = document.getElementsByClassName("news-link-row");
  var newsPhotos = document.getElementsByClassName("news-image-row");
  Array.from(newsLinkContainers).forEach( ( newslinkcontainer ) => {
    Array.from(newsPhotos).forEach( ( newsphoto ) => {
      if ( newsphoto.naturalHeight < newsphoto.naturalWidth ) {
        newslinkcontainer.classList.add("news-link-column");
        newslinkcontainer.classList.remove("news-link-row");
        newsphoto.classList.add("news-image-column");
        newsphoto.classList.remove("news-image-row");
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
  var slides = Array.from(document.getElementsByClassName("slider-item"));
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
  var leftNav = Array.from(document.getElementsByClassName("slider-btn-left"));
  var rightNav = Array.from(document.getElementsByClassName("slider-btn-right"));

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

