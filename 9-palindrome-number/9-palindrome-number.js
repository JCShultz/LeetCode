/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    var nArr = x.toString().split('');
    var rArr = nArr.slice().reverse();
    console.log(nArr, rArr);
    if (nArr.join('') !== rArr.join('')) {
        return false;
    } else {
        return true;
    }
};