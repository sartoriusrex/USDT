// Flash Message Display Logic

var message = Array.from(document.getElementsByClassName('message'));
var flashContainer = document.getElementById('flashContainer');

if (message[0]) {
  flashContainer.style.display = "flex";
}

