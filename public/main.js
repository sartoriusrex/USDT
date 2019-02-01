// Flash Message Display Logic

var message = Array.from(document.getElementsByClassName('message'));
var flashContainer = document.getElementById('flashContainer');

if (message[0]) {
  flashContainer.style.display = "flex";
}

// ===Responsive Menu Displays======

// login menu

var openLoginIcon = document.getElementById("openLogin");
var closeLoginIcon = document.getElementById("closeLogin");

openLoginIcon.addEventListener("click", function (){
  makeResponsive();
});
closeLoginIcon.addEventListener("click", function(){
  makeResponsive();
});

function makeResponsive() {
  var userLoginDiv = document.getElementsByClassName("userLoginDiv");
  var headerUtil = document.getElementsByClassName("headerUtilities");

  userLoginDiv[0].classList.toggle("responsive");
  headerUtil[0].classList.toggle("responsive");
}