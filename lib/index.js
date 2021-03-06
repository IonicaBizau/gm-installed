"use strict";

const prgmInstalled = require("prgm-installed");

/**
 * gmInstalled
 * Check if GraphicsMagick is installed.
 *
 * @name gmInstalled
 * @function
 * @param fn An optional callback function.
 * @return {Boolean} `true` if the `gm` binary is detected, `false` otherwise.
 */
module.exports = function gmInstalled (fn) {
    return prgmInstalled("gm", fn);
};
