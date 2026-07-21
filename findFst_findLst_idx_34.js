function findFst_findLst_idx_34(nums, target) {
    let firstidx = -1;
    let lastidx = -1;
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) {
            firstidx = mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    low = 0;
    high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) {
            lastidx = mid;
            low = mid + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return [firstidx, lastidx];
}

const nums = [1, 2, 3, 4, 5, 5, 5, 6, 7];
const target = 5;
const result = findFst_findLst_idx_34(nums, target);
console.log(result);