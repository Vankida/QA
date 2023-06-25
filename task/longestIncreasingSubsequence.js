var lengthOfLIS = function(nums) {

    const input = document.getElementById("input").value;
    let output = document.getElementById("output");

    if (!nums) {
        nums = input;
        if (!nums) {
            output.style.color = 'crimson';
            output.innerText = `Error: Please enter comma-separated numbers. e.g: 10,9,2,5,3,7`;
            return;
        }
        nums = nums.split(',').map(Number); // Convert the string to an array of integers
    }

    if (nums.length === 0) return 0;
    if (nums.length > 2500) {
        output.style.color = 'crimson';
        output.innerText = `Please enter an array of length <= 2500`;
        return 'Please enter an array of length <= 2500';
    }
    if (!nums.every(Number.isInteger)) {
        output.style.color = 'crimson';
        output.innerText = `Error: invalid input, Please enter integers only.`;
        return "Error: invalid input";
    }
    
    // Initialize an array dp with length equal to nums.length and fill it with 1
    // dp[i] will represent the length of the longest increasing subsequence ending at index i
    const dp = new Array(nums.length).fill(1);
    
    // Initialize maxLen to 1, which is the minimum possible length of an increasing subsequence
    let maxLen = 1;
    
    // Iterate through nums starting at index 1
    for (let i = 1; i < nums.length; i++) {
        // Iterate through all indices j less than i
        for (let j = 0; j < i; j++) {
            // If nums[i] is greater than nums[j], we can extend the longest increasing subsequence ending at index j
            // by appending nums[i] to it. We update dp[i] to be the maximum length among all such subsequences, and
            // update maxLen to be the maximum length among all dp[i]
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                maxLen = Math.max(maxLen, dp[i]);
            }

            if (nums[j] < -10000 || nums[j] > 10000 || nums[i] < -10000 || nums[i] > 10000) {
                output.style.color = 'crimson';
                output.innerText = `Error: invalid input`;
                return 'Error: invalid input';
            }
        }
    }

    // Display the output
    output.style.color = 'green';
    output.innerText = `Output: ${maxLen}`;
    
    // Return the maximum length of any increasing subsequence
    return maxLen;
};


module.exports = lengthOfLIS
