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