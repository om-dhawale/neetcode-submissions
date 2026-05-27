class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        nums.sort((a,b) => a-b);
        let res = [];
        let n = nums.length;

        for ( let i = 0; i < n; i++){
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            for (let j = i+1; j < n; j++){
                if(j > i+1 && nums[j] === nums[j-1]) continue;

                let l = j + 1;
                let r = n - 1;

                while(l < r){
                    const sum = nums[i] + nums[j] + nums[l] + nums[r];

                    if(sum > target){
                        r--;
                    } else if(sum < target){
                        l++;
                    } else{
                        res.push([nums[i], nums[j], nums[l], nums[r]]);
                        l++;
                        r--;
                        while(l < r && nums[l] === nums[l-1]) l++;
                        while( l < r && nums[r] === nums[r+1]) r--;
                    }
                }
            }
        }
            return res;
    }
}
