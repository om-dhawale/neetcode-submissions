class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        function quickSort(arr, lo, hi) {
    if (lo >= hi) return;
    let p = partition(arr, lo, hi);
    quickSort(arr, lo, p - 1);
    quickSort(arr, p + 1, hi);
    }

    function partition(arr, lo, hi) {
        let pivot = arr[hi];
        let i = lo - 1;
        for (let j = lo; j < hi; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
        return i + 1;
    }

        quickSort(nums, 0, nums.length - 1);
        return nums;
    }
}
