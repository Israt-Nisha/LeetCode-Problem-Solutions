function sqrt(x) {
    let low = 0;
    let high = x;
    let ans = -1

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let midsqr = mid * mid;
        if (midsqr === x) {
            return mid;

        } else if (midsqr < x) {
            ans = mid;
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }

    }
    return ans;
}

const x = 13;
const result = sqrt(x);
console.log(`${result}`);