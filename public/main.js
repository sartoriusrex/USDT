// Flash Message Display Logic

var message = Array.from(document.getElementsByClassName('message'));
var flashContainer = document.getElementById('flashContainer');

if (message[0]) {
  flashContainer.style.display = "flex";
}


// ===Responsive Menu Displays======

// login & Social Menu

var openLoginIcon = document.getElementById("openLogin");
var closeLoginIcon = document.getElementById("closeLogin");

var openSocialIcon = document.getElementById("openSocial");
var closeSocialIcon = document.getElementById("closeSocial");

openLoginIcon.addEventListener("click", function (){
  makeLoginResponsive();
});
closeLoginIcon.addEventListener("click", function(){
  makeLoginResponsive();
});

openSocialIcon.addEventListener("click", function (){
  openSocialResponsive();
});
closeSocialIcon.addEventListener("click", function (){
  closeSocialResponsive();
});

function makeLoginResponsive() {
  var userLoginDiv = document.getElementsByClassName("userLoginDiv");
  var headerUtil = document.getElementsByClassName("headerUtilities");

  userLoginDiv[0].classList.toggle("responsive");
  headerUtil[0].classList.toggle("responsive");
}

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

