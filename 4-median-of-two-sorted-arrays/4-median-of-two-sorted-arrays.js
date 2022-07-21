var findMedianSortedArrays = function(nums1, nums2) {

  let combined = nums1.concat(nums2).sort((a,b)=> a-b);
  let oddMiddle = combined[Math.floor(combined.length/2)];
  let evenMiddle = (oddMiddle + combined[Math.floor(combined.length/2)-1])/2;

  if(combined.length % 2 === 1){
    return oddMiddle;
  }else{
    return evenMiddle;
  }

};