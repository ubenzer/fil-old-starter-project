"use strict";

// Include third party scripts
let Sidenav = require("../node_modules/sidenavjs/dist/sidenav.min.js");
let firebase = require("../node_modules/firebase/firebase-browser.js");

// Include own scripts
let u = require("./js/utils.js");

u.onready(function() {
  require("./js/header.js").run();

  firebase.initializeApp({
    apiKey: "AIzaSyACGkNnjhxDCa5R1nLrVS5jeqWUm1GIB1c",
    authDomain: "ubenzer.firebaseapp.com",
    databaseURL: "https://ubenzer.firebaseio.com",
    storageBucket: "project-8005278363217637838.appspot.com"
  });

  let sidenav = new Sidenav({
    content: document.getElementById("content"),
    sidenav: document.getElementById("sidenav"),
    backdrop: document.getElementById("backdrop")
  });

  document.getElementById("menu-toggle")
    .addEventListener("click", function() {
      sidenav.open(); // or sidenav.close
    });

  let allExcerpts = document.querySelectorAll("article.excerpt");
  for (var i = allExcerpts.length; i--;) {
    let articleDOM = allExcerpts[i];
    let id = articleDOM.getAttribute("id").replace(new RegExp("/", "g"), "___");

    firebase.database().ref("entry/byContentId/" + id)
      .once("value")
      .then((snapshot) => {
        let maybeComments = snapshot.val();
        let commentCount = maybeComments ? Object.keys(maybeComments).length : 0;
        articleDOM.querySelector(".comment-count").innerText = commentCount;
      });
  }

});
