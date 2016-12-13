document.addEventListener("DOMContentLoaded", function(){

  // #Gallery

  var mainBlock = document.querySelector(".body");
  var slideshowOpen = document.querySelector(".main__button");
  var slideshowClose = document.querySelector(".gallery__toggle");
  var slideshow = document.querySelector(".gallery");

  // ##open gallery

  slideshowOpen.addEventListener("click", function(event) {
    event.preventDefault();
    if (!slideshow.classList.contains("gallery--open")) {
      slideshow.classList.add("gallery--open");
    }
    mainBlock.classList.add("body--gallery-open");
  });

  function blockSpace() {
    if (slideshow.classList.contains("gallery--open")) {
      slideshowOpen.addEventListener("click", function(event) {
        event.preventDefault();
      });
    } else {
      slideshowOpen.removeEventListener("click", function(){});
    }
  }

  blockSpace();

  // ##close gallery

  function galleryClose() {
    if (slideshow.classList.contains("gallery--open")) {
      slideshow.classList.remove("gallery--open");
      thumbs.classList.remove("slideshow__thumbnails--active");
    }
  }

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      galleryClose();
      mainBlock.classList.remove("body--gallery-open");
    }
  });

  slideshowClose.addEventListener("click", function(event) {
    event.preventDefault();
    galleryClose();
    mainBlock.classList.remove("body--gallery-open");
  });

  //##slider

  var next = document.querySelector(".slideshow__btn--next");
  var number = document.querySelector(".slideshow__number");
  var prev = document.querySelector(".slideshow__btn--prev");
  var quantity = document.querySelector(".slideshow__quantity");
  var slides = document.querySelectorAll(".slideshow__picture");
  var text = document.querySelectorAll(".slideshow__text");

  quantity.innerHTML = slides.length;

  // ###slide events
    //use any positive number for "next" direction and and negative number for "prev" direction (0)
  function slideDirection(arg) {
    var sign = arg / Math.abs(arg);
    var dir;
    if (sign > 0) {
      dir = next;
    } else {
      dir = prev;
    }
    dir.addEventListener("click", function(event) {
      event.preventDefault();
      for (var i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("slideshow__picture--active")) {
          slides[i].classList.remove("slideshow__picture--active");
          text[i].classList.remove("slideshow__text--active");
          if (sign > 0) {
            if (i === (slides.length - 1)) {
              i = 0;
            } else {
              i++;
            }
          } else if (sign < 0) {
            if (i === 0) {
              i = slides.length - 1;
            } else {
              i--;
            }
          }
          slides[i].classList.add("slideshow__picture--active");
          text[i].classList.add("slideshow__text--active");
          number.innerHTML = i + 1;
        }
      }
    });
  }

  // ####next slide

  slideDirection(1);

  //####previous slide

  slideDirection(-1);

  //#Thumbnails

  var thumbs = document.querySelector(".slideshow__thumbnails");
  var thumbItems = document.querySelectorAll(".slideshow__thumb-item");
  var thumbsToggle = document.querySelector(".slideshow__toggle");
  var thumbsButton = document.querySelector(".gallery__button--thumb");

  function thumbswitch(x) {
    x.addEventListener("click", function(event) {
      event.preventDefault();
      thumbs.classList.toggle("slideshow__thumbnails--active");
    });
  }

  thumbswitch(thumbsToggle);
  thumbswitch(thumbsButton);

  thumbs.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.classList.contains("slideshow__thumbnails--active")) {
      thumbs.classList.remove("slideshow__thumbnails--active");
    }
  });

  // ##Select right number for slide

  thumbs.addEventListener("click", function(event) {
    event.preventDefault();
    if (event.target.classList.contains("slideshow__thumb-item")) {
      event.target.classList.add("slideshow__thumb-item--active");
      for (var i = 0; i < thumbItems.length; i++) {
        slides[i].classList.remove("slideshow__picture--active");
        text[i].classList.remove("slideshow__text--active");
      }
    }
    for (var i = 0; i < thumbItems.length; i++) {
      if (thumbItems[i].classList.contains("slideshow__thumb-item--active")) {
        slides[i].classList.add("slideshow__picture--active");
        text[i].classList.add("slideshow__text--active");
        number.innerHTML = i + 1;
        thumbItems[i].classList.remove("slideshow__thumb-item--active");
        thumbs.classList.remove("slideshow__thumbnails--active");
      }
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

  //##hide/show Pinterest button on mouseover

  var pinterest = document.querySelector(".slideshow__share");
  var picture = document.querySelectorAll(".slideshow__picture");

  for (var i = 0; i < picture.length; i++) {
    picture[i].addEventListener("mouseenter", function(event) {
      event.preventDefault();
      if (!pinterest.classList.contains("slideshow__share--over")) {
        pinterest.classList.add("slideshow__share--over");
      }
    });
    picture[i].addEventListener("mouseleave", function(event) {
      event.preventDefault();
      if (pinterest.classList.contains("slideshow__share--over")) {
        pinterest.classList.remove("slideshow__share--over");
      }
    });
  }

  pinterest.addEventListener("mouseenter", function() {
    if (!pinterest.classList.contains("slideshow__share--over")) {
      pinterest.classList.add("slideshow__share--over");
    }
  });

  pinterest.addEventListener("mouseleave", function() {
    if (pinterest.classList.contains("slideshow__share--over")) {
      pinterest.classList.remove("slideshow__share--over");
    }
  });
});
