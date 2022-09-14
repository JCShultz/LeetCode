/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let bool=false;
    nums.forEach((num, index)=>{
        console.log(nums.indexOf(num), index);
        if(nums.indexOf(num) !== index){
            bool=true;
        }
    })
    return bool;
};