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
////////// Modal Images /////////
var modal = document.getElementById("myModal");

var img = [
  document.getElementById("myImg1"),
  document.getElementById("myImg2"),
  document.getElementById("myImg3"),
  document.getElementById("myImg4"),
  document.getElementById("myImg5"),
  document.getElementById("myImg6"),
  document.getElementById("myImg7"),
  document.getElementById("myImg8"),
  document.getElementById("myImg9"),
  document.getElementById("myImg10"),
  document.getElementById("myImg11"),
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
