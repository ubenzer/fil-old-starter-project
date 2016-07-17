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

  document.querySelectorAll("article.excerpt")
    .forEach((articleDOM) => {
      let id = articleDOM.getAttribute("id").replace(new RegExp("/", "g"), "___");

      firebase.database().ref("comments/byPost/" + id)
        .once('value')
        .then((snapshot) => {
          articleDOM.querySelector(".comment-count").innerText = Object.keys(snapshot.val()).length;
        });
    });

  if (id) {
    firebase.database().ref("comments/byPost/" + id).orderByKey().once('value')
      .then(function(snapshot) {
        console.log(snapshot.val());
        let html = "";
        snapshot.forEach(function(commentData) {
          let comment = commentData.val();
          html += "<h3>" + comment.name + "</h3><p>" + comment.text + "</p>";
        });

        document.getElementById("comments").innerHTML = html;
      });
  }
});
