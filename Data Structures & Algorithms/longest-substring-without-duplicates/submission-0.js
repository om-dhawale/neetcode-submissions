class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let maxLength = 0;
        let set = new Set();

        while(l < s.length && r < s.length){
            
            while(set.has(s[r])){
                set.delete(s[l])
                l++;
            }
            set.add(s[r]);
            r++;
            if(set.size > maxLength){
                maxLength = set.size;
            }
        }
        return maxLength;
    }
}
