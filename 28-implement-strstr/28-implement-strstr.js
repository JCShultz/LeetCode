/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if ( haystack.indexOf(needle) < 0 ) {
      return -1;
    } else {
      return haystack.indexOf(needle);
    }
};