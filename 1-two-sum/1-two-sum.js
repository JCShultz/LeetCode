/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}**/
 //I= array of int, int 
 //O= array containing indices of vals that add up to the target
 //C=  
 //E=
 
var twoSum = function(nums, target) {

  let result = [];

  for (let x = 0; x < nums.length; x++) {
    for (let y = 0; y < nums.length; y++) {
      if (nums[x]+nums[y] === target && x !== y) {
        result.push(x,y);
        return result;
      }
    }
  }
  
  return result;
  
};