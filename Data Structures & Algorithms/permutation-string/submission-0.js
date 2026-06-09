class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0;
    let r = s1.length;
    let countS1 = new Map();
    let countS2 = new Map();

    for(const char of s1){
        countS1.set(char, (countS1.get(char) || 0) + 1);
    };

    for(let i = 0; i < s1.length; i++){
        countS2.set(s2[i], (countS2.get(s2[i]) || 0 ) + 1);
    };

    while(r <= s2.length){
        let match = true;
        for(const [key] of countS1){
            if(countS1.get(key) !== countS2.get(key)){
                match = false;
                break;
            }   
        }
        if(match) return true;
        countS2.set(s2[r], (countS2.get(s2[r]) || 0) + 1);
        countS2.set(s2[l], countS2.get(s2[l]) - 1);
        l++;
        r++;
    }

    return false;
    }
}
