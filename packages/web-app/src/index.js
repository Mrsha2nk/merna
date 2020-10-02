"use strict";
const lib = require("library");
module.exports = webApp;

function webApp() {
  lib("hello", (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      console.error(err);
    }
  });
}

webApp();
