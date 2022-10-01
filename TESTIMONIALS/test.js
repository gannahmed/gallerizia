////////////////LOADER////////////////
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};
//////////////////////// HAMBURGER ////////////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
//////////////////  Carousel  ///////////////////

window.onload = function () {
  var slides = document.getElementsByClassName("carousel-item"),
    addActive = function (slide) {
      slide.classList.add("active");
    },
    removeActive = function (slide) {
      slide.classList.remove("active");
    };
  addActive(slides[0]);

  setInterval(function () {
    for (var i = 0; i < slides.length; i++) {
      if (i + 1 == slides.length) {
        addActive(slides[0]);
        slides[0].style.zIndex = 100;
        setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
        break;
      }
      if (slides[i].classList.contains("active")) {
        slides[i].removeAttribute("style");
        setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
        addActive(slides[i + 1]);
        break;
      }
    }
  }, 5000);
};
