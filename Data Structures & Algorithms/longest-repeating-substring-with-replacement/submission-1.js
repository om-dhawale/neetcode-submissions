class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let maxLength = 0;
        let map = new Map();

        for(let r = 0; r < s.length; r++){
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            let window = r - l + 1;
            let mostFrequent = Math.max(...map.values());
            if(window - mostFrequent <= k){
                maxLength = window;
            } else {
                map.set(s[l], map.get(s[l]) - 1);
                l++;
            }
        }
        return maxLength;
    }
}
