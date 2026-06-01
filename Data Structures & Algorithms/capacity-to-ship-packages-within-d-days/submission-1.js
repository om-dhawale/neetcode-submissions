class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let res = Math.max(...weights);
        while (true) {
            let ships = 1,
                cap = res;
            for (let w of weights) {
                if (cap - w < 0) {
                    ships++;
                    cap = res;
                }
                cap -= w;
            }
            if (ships <= days) {
                return res;
            }
            res++;
        }
    }
}