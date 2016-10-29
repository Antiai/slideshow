document.addEventListener("DOMContentLoaded", function(){
  // #Gallery

  var slideshowOpen = document.querySelector(".main__button");
  var slideshowClose = document.querySelector(".gallery__toggle");
  var slideshow = document.querySelector(".gallery");

  // ##open gallery

  slideshowOpen.addEventListener("click", function(event) {
    event.preventDefault();
    if (!slideshow.classList.contains("gallery--open")) {
      slideshow.classList.add("gallery--open");
    }
  });

  // ##close gallery

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (slideshow.classList.contains("gallery--open")) {
        slideshow.classList.remove("gallery--open");
      }
    }
  });

  slideshowClose.addEventListener("click", function(event) {
    event.preventDefault();
    if (slideshow.classList.contains("gallery--open")) {
      slideshow.classList.remove("gallery--open");
    }
  });

  //#Social

  var shareButton = document.querySelector(".gallery__button--share");
  var shareIcon = document.querySelector(".gallery__icon-wrapper");
  var shareBlock = document.querySelector(".social");
  var sliderButtonSet = document.querySelector(".slideshow__btn-set");

  //##open/close social

  shareButton.addEventListener("click", function(event) {
    event.preventDefault();
    shareIcon.classList.toggle("gallery__icon-wrapper--active");
    shareBlock.classList.toggle("social--open");
    sliderButtonSet.classList.toggle("slideshow__btn-set--hide");
  });
});
