document.addEventListener("DOMContentLoaded", function(){
  // #Gallery

  var slideshowOpen = document.querySelector(".main__button");
  var slideshowClose = document.querySelector(".gallery__toggle");
  var slideshow = document.querySelector(".gallery");
  var mainBlock = document.querySelector(".body");

  // ##open gallery

  slideshowOpen.addEventListener("click", function(event) {
    event.preventDefault();
    if (!slideshow.classList.contains("gallery--open")) {
      slideshow.classList.add("gallery--open");
    };
    mainBlock.classList.add("body--gallery-open");
  });

  // ##close gallery

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (slideshow.classList.contains("gallery--open")) {
        slideshow.classList.remove("gallery--open");
      }
    }
    mainBlock.classList.remove("body--gallery-open");
  });

  slideshowClose.addEventListener("click", function(event) {
    event.preventDefault();
    if (slideshow.classList.contains("gallery--open")) {
      slideshow.classList.remove("gallery--open");
    }
    mainBlock.classList.remove("body--gallery-open");
  });

  //##slider
  var slides = document.querySelectorAll(".slideshow__picture");
  var next = document.querySelector(".slideshow__btn--next");
  var prev = document.querySelector(".slideshow__btn--prev");
  var number = document.querySelector(".slideshow__number");
  var quantity = document.querySelector(".slideshow__quantity");
  var text = document.querySelectorAll(".slideshow__text");

  quantity.innerHTML = slides.length;
  // ###next events

  next.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slideshow__picture--active")) {
        slides[i].classList.remove("slideshow__picture--active");
        text[i].classList.remove("slideshow__text--active");
        if (i === (slides.length - 1)) {
          i = 0;
        } else {
          i++;
        };
        slides[i].classList.add("slideshow__picture--active");
        text[i].classList.add("slideshow__text--active");
        number.innerHTML = i + 1;
      }
    }
  });

  // ###previous events

  prev.addEventListener("click", function(event) {
    event.preventDefault();
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].classList.contains("slideshow__picture--active")) {
        slides[i].classList.remove("slideshow__picture--active");
        text[i].classList.remove("slideshow__text--active");
        if (i === 0) {
          i = slides.length - 1;
        } else {
          i--;
        };
        slides[i].classList.add("slideshow__picture--active");
        text[i].classList.add("slideshow__text--active");
        number.innerHTML = i + 1;
      }
    }
  });

  //#Thumbnails

  var slideActive = document.querySelector(".slideshow__picture--active");
  var thumbs = document.querySelector(".slideshow__thumbnails");
  var thumbItems = document.querySelectorAll(".slideshow__thumb");
  var thumbsToggle = document.querySelector(".slideshow__toggle");

  thumbsToggle.addEventListener("click", function(event) {
    event.preventDefault();
    if (!thumbs.classList.contains(".slideshow__thumbnails--active")) {
      thumbs.classList.add("slideshow__thumbnails--active");
    };
  });

  for (var i = 0; i < thumbItems.length; i++) {
    thumbItems[i].addEventListener("click", function(event) {
      event.preventDefault();
      thumbs.classList.remove("slideshow__thumbnails--active");
      slideActive.classList.remove("slideshow__picture--active");
    });
  };

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

  //##hide/show Pinterest button on mouseover

  var pinterest = document.querySelector(".slideshow__share");
  var picture = document.querySelectorAll(".slideshow__picture");

  for (var i = 0; i < picture.length; i++) {
    picture[i].addEventListener("mouseenter", function(event) {
      event.preventDefault();
      if (!pinterest.classList.contains("slideshow__share--over")) {
        pinterest.classList.add("slideshow__share--over");
      };
    });

    picture[i].addEventListener("mouseleave", function(event) {
      event.preventDefault();
      if (pinterest.classList.contains("slideshow__share--over")) {
        pinterest.classList.remove("slideshow__share--over");
      };
    });
  };

  pinterest.addEventListener("mouseenter", function(event) {
    if (!pinterest.classList.contains("slideshow__share--over")) {
      pinterest.classList.add("slideshow__share--over");
    };
  });

  pinterest.addEventListener("mouseleave", function(event) {
    if (pinterest.classList.contains("slideshow__share--over")) {
      pinterest.classList.remove("slideshow__share--over");
    };
  });
});
