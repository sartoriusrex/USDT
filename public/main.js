   // ===================================================
   // Change Layout of News Article Container depending on if the image is wider than it is tall.

   var newsLinkContainers = document.getElementsByClassName("newsLinkRow");
   var newsPhotos = document.getElementsByClassName("newsPhotoRow");
 
   Array.from(newsLinkContainers).forEach( ( newslinkcontainer ) => {
     Array.from(newsPhotos).forEach( ( newsphoto ) => {
       if ( newsphoto.naturalHeight < newsphoto.naturalWidth ) {
         newslinkcontainer.classList.add("newsLinkColumn");
         newslinkcontainer.classList.remove("newsLinkRow");
         newsphoto.classList.add("newsPhotoColumn");
         newsphoto.classList.remove("newsPhotoRow");
       }
     });
   });
 
   // =====================================================
   // Slideshow display logic;
 
   // HERE IS THE ORIGINAL ATTEMPT WITHOUT WORKING NAV CONTROLS
 
   // var sliderIndex = 0;
 
   // var sliderListItems = document.getElementsByClassName("sliderLI");
   // var articleIndicators = document.getElementsByClassName("square");
 
   // var sliderListArray = Array.from(sliderListItems);
   // var articleIndArray = Array.from(articleIndicators);
 
   // // Initiate Slideshow
   // slideShow();
 
   // // Navigate to correct Image on red indicator
   // articleIndArray.forEach( (ind) => {
   //   ind.addEventListener("click", function () {
   //     alert(ind);
   //   });
   // });
 
   // function slideShow() {
   //   sliderListArray.forEach( (li) => {
   //     li.style.display = "none";
   //   });
   //   articleIndArray.forEach( (ind) => {
   //     ind.classList.remove("active");
   //   });
 
   //   sliderIndex++;
   //   if( sliderIndex > sliderListArray.length) {
   //     sliderIndex = 1;
   //   }
 
   //   sliderListArray[sliderIndex-1].style.display = "flex";
   //   articleIndArray[sliderIndex-1].classList.add("active");
   //   setTimeout(slideShow, 4000);
   // }
 
 
   //  ATTEMPT 3 STRAIGHT COPY
 
     mountComponent = () => {
       this.showSlides(slideIndex);
       myTimer = setInterval(() => {this.plusSlides(1);}, 4000);
     }
 
     showSlides = (n) => {
       var i;
       var slides = Array.from(document.getElementsByClassName("sliderLI"));
       var dots = Array.from(document.getElementsByClassName("square"));
       if (n > slides.length) {slideIndex = slides.length}
       if (n < 1) {slideIndex = slides.length}
       for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
       }
       for (i = 0; i < dots.length; i++) {
         dots[i].classList.remove("active");
       }
       slides[slideIndex-1].style.display = "flex";
       dots[slideIndex-1].classList.add("active");
     }
 
     plusSlides = (n) => {
       clearInterval(myTimer);
       this.showSlides(slideIndex += n);
       if (n= -1) {
         myTimer = setInterval(() => {this.plusSlides(n+2);}, 4000);
       } else {
         myTimer = setInterval(() => {this.plusSlides(n+1);}, 4000);
       }
     }
 
 
 
   // var sliderIndex;
   // var myTimer;
 
   // function slideShow( n ) {
   //   var i;
   //   // Grab Elements and convert Node list to Array
   //   var sliderListItems = Array.from(document.getElementsByClassName("sliderLI"));
   //   var articleIndicators = Array.from(document.getElementsByClassName("square"));
 
   //   // var sliderListArray = Array.from(sliderListItems);
   //   // var articleIndArray = Array.from(articleIndicators);
 
   //   // Remove visibility and active class from buttons
   // for (i = 0; i < sliderListItems.length; i++) {
   //   sliderListItems[i].style.display = "none";
   // }
 
   // for (i = 0; i < articleIndicators.length; i++) {
   //   articleIndicators[i].classList.remove("active");
   //   articleIndicators[i].addEventListener("click", currentSlide ( i + 1 ));
   // }
 
   //   // sliderListItems.forEach( (li) => {
   //   //   li.style.display = "none";
   //   // });
   //   // articleIndicators.forEach( (ind, index) => {
   //   //   ind.classList.remove("active");
 
   //     // Add currentSlide function to article Indicators (red buttons)
   //   //   ind.addEventListener("click",currentSlide( index+1 ));
   //   // });
 
   //   // Set SliderIndex based on var n passed in
 
   //   if ( n > sliderListItems.length) {
   //     sliderIndex = 1;
   //   }
 
   //   if ( n < 1 ) {
   //     sliderIndex = sliderListItems.length;
   //   }
 
   //   // Show buttons and list item based on sliderIndex
 
   //   sliderListItems[sliderIndex-1].style.display = "flex";
   //   articleIndicators[sliderIndex-1].classList.add("active");
   // }
 
   // // -----------------------------------------------------
   // // Next / Previous Logic
 
   // plusSlides = ( n ) => {
   //   clearInterval(myTimer);
   //   this.slideShow( sliderIndex += n );
   //   if ( n = -1 ) {
   //     myTimer = setInterval(() => {
   //       this.plusSlides( n + 2 );
   //     }, 4000);
   //   } else {
   //     myTimer = setInterval(() => {
   //       this.plusSlides( n + 1 );
   //     }, 4000);
   //   }
   // }
 
   // // ------------------------------------------------------
   // // Begin Slideshow
 
   // mountSlideshow = () => {
   //   this.slideShow( sliderIndex );
   //   myTimer = setInterval(() => {
   //     this.plusSlides(1);
   //   }, 4000);
   // }
 
   // // -----------------------------------------------------
   // // Navigate to any slide based on red nav button
 
   // currentSlide = ( n ) => {
   //   clearInterval(myTimer);
   //   this.slideShow( sliderIndex = n );
   //   if ( n = -1 ) {
   //     myTimer = setInterval(() => {
   //       this.plusSlides( n + 2 );
   //     }, 4000);
   //   } else {
   //     myTimer = setInterval(() => {
   //       this.plusSlides( n + 1 );
   //     }, 4000);
   //   }
   // }
 
   // // -------------------------------------------------
   // // Navigate slide by next / previous buttons
 
   // var leftSlide = document.getElementsByClassName("slideleft");
   // var rightSlide = document.getElementsByClassName("slideright");
 
   // leftSlide.addEventListener("click", plusSlides(-1));
   // rightSlide.addEventListener("click", plusSlides(1));
   
 
 
 
 
 