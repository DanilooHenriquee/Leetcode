/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
        if (nums[i] + nums[j] == target)
            result = [j, i];
    }
  }

  return result;

};

console.log(twoSum([0, 1, 3, 2, 6], 3));