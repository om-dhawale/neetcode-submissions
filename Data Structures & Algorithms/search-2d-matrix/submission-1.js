class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let l = 0;
        let row = matrix.length;
        let col = matrix[0].length;
        let r = row * col - 1;

        while (l <= r){
            const mid = Math.floor(l + ((r-l) / 2));
            const m = matrix[Math.floor(mid/col)][mid%col];

            if(m === target){
                return true;
            } else if(m < target){
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}
