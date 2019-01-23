// Change Layout of News Article Container depending on if the image is wider than it is tall.

var newsLinkContainer = document.getElementsByClassName("newsLink");
var newsPhoto = document.getElementsByClassName("newsPhotoRow");

Array.from(newsLinkContainer).forEach( ( newslinkcontainer ) => {
  Array.from(newsPhoto).forEach( ( newsphoto ) => {
    if ( newsphoto.naturalHeight < newsphoto.naturalWidth ) {
      newslinkcontainer.classList.add("newsLinkColumn");
      newslinkcontainer.classList.remove("newsLinkRow");
      newsphoto.classList.add("newsPhotoColumn");
      newsphoto.classList.remove("newsPhotoRow");
    }
  });
});