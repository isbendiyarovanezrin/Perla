"use strict";

const btn = document.getElementById("btn");
const img = document.querySelectorAll("#cat-img");
const sound = document.getElementById("sound");

btn.addEventListener("click", () => {
  getCatImage1();
  getCatImage2();
  getCatImage3();
  meow();
});

function meow() {
  sound.play();
  sound.currentTime = 0;
}

function getCatImage1() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      img[0].src = data[0].url;
    })
    .catch((err) => {
      console.error(err);
    });
}

function getCatImage2() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      img[1].src = data[0].url;
    })
    .catch((err) => {
      console.error(err);
    });
}

function getCatImage3() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      img[2].src = data[0].url;
    })
    .catch((err) => {
      console.error(err);
    });
}

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1800);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
