"use strict";

// Include third party scripts
let Sidenav = require("../node_modules/sidenavjs/dist/sidenav.min.js");

// Include own scripts
let u = require("./js/utils.js");

u.onready(function() {
  require("./js/header.js").run();

  let sidenav = new Sidenav({
    content: document.getElementById("content"),
    sidenav: document.getElementById("sidenav"),
    backdrop: document.getElementById("backdrop")
  });

  document.getElementById("menu-toggle")
    .addEventListener("click", function() {
      sidenav.open(); // or sidenav.close
    });
});
