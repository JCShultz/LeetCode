# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    if nums.index target
        return nums.index target
    else
        nums.each_with_index do |item, index|
            if target < item
                return index 
            end
        end
        return nums.length   
    end
end