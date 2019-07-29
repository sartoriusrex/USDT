// ===Responsive Menu Displays======

// login Menu
  // Open Login Menu
  // reference dom element
  var openLoginIcon = document.getElementById("header__open-login-icon");

  // Add click event and invoke function to add class
  openLoginIcon.addEventListener("click", function (){
    openLoginMenu();
  });
  
  // Close Login  Menu
  var closeLoginIcon = document.getElementById("header__close-login-icon");
  
  closeLoginIcon.addEventListener("click", function(){
    closeLoginMenu();
  });
  
  function openLoginMenu(){
    toggleLoginResponsive();
  
    var socialDiv = document.getElementsByClassName("header__social-container");
  
    socialDiv[0].style.display = "none";
  }
  
  function closeLoginMenu(){
    toggleLoginResponsive();
  
    var socialDiv = document.getElementsByClassName("header__social-container");
  
    socialDiv[0].style.display = "flex";
  }
  
  function toggleLoginResponsive() {
    var loginDiv = document.getElementsByClassName("header__login-container");
    var headerUtil = document.getElementsByClassName("header__menu-container");
  
    loginDiv[0].classList.toggle("responsive");
    headerUtil[0].classList.toggle("responsive");
  }
  
  // Social menu
  
  var openSocialIcon = document.getElementById("header__open-social-icon");
  var closeSocialIcon = document.getElementById("header__close-social-icon");
  
  openSocialIcon.addEventListener("click", function (){
    openSocialResponsive();
  });
  closeSocialIcon.addEventListener("click", function (){
    closeSocialResponsive();
  });
  
  function openSocialResponsive() {
    toggleSocialResponsiveness();
  
    var loginDiv = document.getElementsByClassName("header__login-container");
  
    loginDiv[0].style.display = "none";
  }
  
  function closeSocialResponsive() {
    toggleSocialResponsiveness();
  
    var loginDiv = document.getElementsByClassName("header__login-container");
  
    loginDiv[0].style.display = "flex";
  }
  
  function toggleSocialResponsiveness () {
    var socialMediaDiv = document.getElementsByClassName("header__social-container");
    var headerUtil = document.getElementsByClassName("header__menu-container");
  
    socialMediaDiv[0].classList.toggle("responsiveSocial");
    headerUtil[0].classList.toggle("responsiveSocial");
  }