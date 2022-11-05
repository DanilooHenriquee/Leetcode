/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let num = x;
    let rev = 0;
    while (num > 0) {
        let last = num % 10;
        
        rev = (rev * 10) + last;
        
        num = Math.floor(num / 10);
    }

    return x === rev;
};

console.log(isPalindrome(112211));