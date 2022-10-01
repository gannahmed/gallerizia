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
//////////// Slide Show //////////////

(function () {
  var imgLen = document.getElementById("imgGallary");
  var images = imgLen.getElementsByTagName("img");
  var counter = 1;

  if (counter <= images.length) {
    setInterval(function () {
      images[0].src = images[counter].src;
      console.log(images[counter].src);
      counter++;

      if (counter === images.length) {
        counter = 1;
      }
    }, 4000);
  }
})();

// ////////////////////
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("Text");
  var el = document.getElementById(data);
  el.parentNode.removeChild(el);
}
////////// Modal Images /////////
var modal = document.getElementById("myModal");

var img = [
  document.getElementById("myImg1"),
  document.getElementById("myImg2"),
  document.getElementById("myImg3"),
  document.getElementById("myImg4"),
];
var modalImg = document.getElementById("img01");
for (var i = 0; i < 11; i++) {
  img[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
//////////// Zoom in and Zoom out /////////
function zoomin() {
  var myImg = document.getElementById("img01");
  var currheight = myImg.clientHeight;
  if (currheight == 2500) return false;
  else {
    myImg.style.height = currheight + 100 + "px";
  }
}

function zoomout() {
  var myImg = document.getElementById("img01");
  var currheight = myImg.clientHeight;
  if (currheight == 2500) return false;
  else {
    myImg.style.height = currheight - 100 + "px";
  }
}
