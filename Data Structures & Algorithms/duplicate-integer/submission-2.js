class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueSet = new Set(nums);
        if(uniqueSet.size < nums.length){
            return true;
        }
        return false;
    }
}
