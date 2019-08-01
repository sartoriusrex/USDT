// ===HAMBURGER MENU AND SUBMENUS===

var closeMenu = document.getElementsByClassName("nav-container__close-menu-button");
var openMenu = document.getElementsByClassName("nav-container__open-menu-button");

closeMenu[0].addEventListener("click", function (){
  toggleNavMenu();
});

openMenu[0].addEventListener("click", function (){
  toggleNavMenu();
});

function toggleNavMenu (){
  var navlist = document.getElementsByClassName("nav-list");

  navlist[0].classList.toggle("responsive");
}