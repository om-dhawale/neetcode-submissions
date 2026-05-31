class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let pt = 0;

        while(l<=r){
            const mid = Math.floor(l + (r-l)/2);
            let totalHours = 0;

            for(let i = 0; i < piles.length; i++){
                totalHours += Math.ceil(piles[i]/mid);
            }

            if(totalHours <= h){
                r = mid - 1;
                pt = mid;
            } else {
                l = mid + 1;
            }
        }
        return pt;
        
    }
}
