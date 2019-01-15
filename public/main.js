var hiddenDetails = document.querySelectorAll(".details");

hiddenDetails.forEach(function(el){
  el.addEventListener("click", function(){
    el.classList.toggle("hidden");
  });
});
