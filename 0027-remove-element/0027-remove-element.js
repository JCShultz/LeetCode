/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for (var x = 0; x < nums.length; x ++) {
       if (nums[x] != val) {
          nums[k] = nums[x];
          k++;
       }
    }
    return k;
};