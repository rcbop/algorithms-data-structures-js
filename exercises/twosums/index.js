
function twoSum(nums, target) {
    let result = null;
    let map = {};
    for (let i = 0; i < nums.length; i++){
        let current = nums[i];
        let diff = target - current;
        if (diff in map) {
            return [map[diff], i];
        } else {
            map[current] = i;    
        }
    }
    return null;
};

module.exports = twoSum;