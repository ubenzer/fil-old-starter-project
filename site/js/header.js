"use strict";
let offset = require("document-offset");

module.exports = {
  run: run
};

function run() {
  let mainContentDOM = document.querySelector(".main-container");
  let mainContentTop = offset(mainContentDOM).top;

  let appBarDOM = document.querySelector("app-bar");
  let appBarHeight = appBarDOM.clientHeight;

  let headerDOM = document.querySelector("header");

  let isOpaque = false;

  function checkAndMakeOpaque() {
    let shouldBeOpaque = window.scrollY > mainContentTop - appBarHeight;
    if (shouldBeOpaque && !isOpaque) {
      window.requestAnimationFrame(function() {
        headerDOM.classList.add("opaque");
        isOpaque = true;
      });
    }

    if (!shouldBeOpaque && isOpaque) {
      window.requestAnimationFrame(function() {
        headerDOM.classList.remove("opaque");
        isOpaque = false;
      });
    }
  }

  window.addEventListener("scroll", checkAndMakeOpaque);
}
