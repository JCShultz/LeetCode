var search = function (nums, target) {
  if(target === nums[0]){
    return 0;
  }
  if(target === nums[1]){
    return 1;
  }
  if(target === nums[nums.length-1]){
    return nums.length-1;
  }
  //if target is less less than first and less than last start at last
  if (target < nums[0] && target < nums[nums.length - 1]) {
    for (let x = nums.length - 1; x > 0; x--) {
      if (nums[x] === target) {
        return x;
      }
    }
  }

  //if target is greater than first and last start at first
  if (target > nums[0] && target > nums[nums.length - 1]) {
    for (let x = 0; x < nums.length; x++) {
      if (nums[x] === target) {
        return x;
      }
    }
  }

  //if target is greater than first and less than last start at middle
  if (target > nums[0] && target < nums[nums.length - 1]) {
    //compare to middle and go up or down based on comparison
    let mid = nums[Math.floor(nums.length / 2)];
    console
    if (target < mid) {
      for (let x = 0; x < nums.length; x++) {
        if (nums[x] === target) {
          return x;
        }
      }
    }
    if (target >= mid) {
      for (let x = nums.length-1; x > 0; x--) {
        if (nums[x] === target) {
          return x;
        }
      }
    }
  }
  return -1;
};