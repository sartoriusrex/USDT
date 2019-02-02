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

openFooterContact.addEventListener("click", function (){
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

openFooterPolicies.addEventListener("click", function (){
  toggleFooterPolicies();
});
closeFooterPolicies.addEventListener("click", function (){
  toggleFooterPolicies();
});

function toggleFooterPolicies() {
  var footerPolicies = document.getElementsByClassName("footer-online-policies");
  
  footerPolicies[0].classList.toggle("responsive");
}

// -----

var  openFooterIndices = document.getElementsByClassName(" openFooterIndices");
var  closeFooterIndices = document.getElementsByClassName(" closeFooterIndices");

openFooterIndices.addEventListener("click", function (){
  toggleFooterIndicies();
});
closeFooterIndices.addEventListener("click", function (){
  toggleFooterIndicies();
});

function toggleFooterIndicies() {
  var footerIndicies = document.getElementsByClassName("footer-indices");
  
  footerIndicies[0].classList.toggle("responsive");
}
