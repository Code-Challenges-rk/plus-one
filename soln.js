/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    // return (BigInt(digits.join(''))+ BigInt(1)).toString().split('');

    return String(BigInt(digits.join('')) + BigInt(1)).split('');
    
    // return String(BigInt(digits.join('')) + BigInt(1)).split('').map(no => Number(no));
};

let digits = [1,2,3]
console.log(plusOne(digits));