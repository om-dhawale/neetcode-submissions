class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for (const num of nums){
            count.set(num, (count.get(num) || 0) + 1);
        }
        const arr = [...count].sort((a,b) => b[1] - a[1]);
        return arr.slice(0, k).map(pair => pair[0])
    }
}
