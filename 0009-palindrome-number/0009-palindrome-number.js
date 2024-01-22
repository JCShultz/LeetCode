/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverseString = x.toString().split('').reverse().join('');
    var string = x.toString();
    //return string === reverseString;
    return x.toString().split('').reverse().join('') === x.toString();
};