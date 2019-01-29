// Change Layout of News Article Container depending on if the image is wider than it is tall.




// -----add Click Events to dots---------


  var dots = Array.from(document.getElementsByClassName("square"));
  
function addSlideNavDot(){
  dots.forEach(function(dot, i) {
  dot.addEventListener("click", function(){
    currentSlide(i+1);
  });
});
}

addSlideNavDot();

// Flash Message Display Logic


var flashmessage = document.getElementById('flashContainer');

console.log("hello");