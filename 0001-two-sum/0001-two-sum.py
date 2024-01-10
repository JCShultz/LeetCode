class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        result = []

        for x in range(len(nums)):
            for y in range(x +1,len(nums)):
                if nums[x] + nums[y] == target:
                    result.append(y)
                    result.append(x)
                    break

        return result
