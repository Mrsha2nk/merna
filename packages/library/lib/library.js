"use strict";

module.exports = library;
const figlet = require("figlet");
/**
 *
 * @param {string} name
 * @param {Function} cb
 */
function library(name, cb) {
  const MUST_APPEND = "YAY";
  figlet(MUST_APPEND + name, cb);
}
