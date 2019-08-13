// Flash Message Display Logic

var message = Array.from(document.getElementsByClassName('alert-message'));
var flashContainer = Array.from(document.getElementsByClassName('container__flash'));

if ( message[0] ) {
  flashContainer[0].style.display = "flex";

  setTimeout( function(){
    flashContainer[0].style.display = "none";
  } , 3000)
}