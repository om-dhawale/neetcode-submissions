class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];
        for(const op of operations){
            if(op === "+"){
                let top = stack.pop();
                let newTop = top +  stack[stack.length - 1];
                stack.push(top);
                stack.push(newTop);
            } else if(op === "D"){
                stack.push(2 * stack[stack.length - 1]);
            } else if(op === "C"){
                stack.pop();
            } else {
                stack.push(parseInt(op));
            }
        }

        return stack.reduce((acc, curr) => acc + curr, 0)
    }
}