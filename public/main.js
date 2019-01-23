
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


// Slideshow display logic;
var sliderIndex = 0;
slideShow();

function slideShow() {
  var sliderListItems = document.getElementsByClassName("sliderLI");
  var articleIndicators = document.getElementsByClassName("square");

  var sliderListArray = Array.from(sliderListItems);
  var articleIndArray = Array.from(articleIndicators);

  sliderListArray.forEach( (li) => {
    li.style.display = "none";
  });
  articleIndArray.forEach( (ind) => {
    ind.classList.remove("active");
  });

  sliderIndex++;
  if( sliderIndex > sliderListArray.length) {
    sliderIndex = 1;
  }

  sliderListArray[sliderIndex-1].style.display = "flex";
  articleIndArray[sliderIndex-1].classList.add("active");
  setTimeout(slideShow, 4000);
}