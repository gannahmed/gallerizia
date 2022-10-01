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
/////////////////// Video //////////////////////
const video = document.querySelector("#video");
// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none";
// update the progress bar
video.addEventListener("timeupdate", () => {
  let curr = (video.currentTime / video.duration) * 100;
  if (video.ended) {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
  }
  document.querySelector(".inner").style.width = `${curr}%`;
});
// pause or play the video
const play = (e) => {
  // Condition when to play a video
  if (video.paused) {
    document.querySelector(".fa-play").style.display = "none";
    document.querySelector(".fa-pause").style.display = "block";
    video.play();
  } else {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
    video.pause();
  }
};
// trigger fullscreen
const fullScreen = (e) => {
  e.preventDefault();
  video.requestFullscreen();
};
// download the video
const download = (e) => {
  e.preventDefault();
  let a = document.createElement("a");
  a.href = video.src;
  a.target = "_blank";
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
// rewind the current time
const rewind = (e) => {
  video.currentTime = video.currentTime - (video.duration / 100) * 5;
};
// forward the current time
const forward = (e) => {
  video.currentTime = video.currentTime + (video.duration / 100) * 5;
};
