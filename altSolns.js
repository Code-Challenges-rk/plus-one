/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    let conversion = "";
    let sum;
    // take each digit from array and push to string after string conversion
    for(let i=0; i<digits.length; i++) {
        conversion += digits[i].toString();
        sum = BigInt(conversion) + 1n;
        sum = String(sum)
    }
    return sum.split('');
};

let digits = [1,2,3]
console.log(plusOne(digits));

function incrementLargeInteger(digits) {
    const n = digits.length;
    let carry = 1;
    
    for (let i = n - 1; i >= 0; i--) {
      const sum = digits[i] + carry;
      digits[i] = sum % 10;
      carry = Math.floor(sum / 10);
      
      if (carry === 0) break;
    }
    
    if (carry > 0) {
      digits.unshift(carry);
    }
    
    return digits;
  }
  
  // Test cases
  console.log(incrementLargeInteger([1, 2, 3])); // Output: [1, 2, 4]
  console.log(incrementLargeInteger([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
  console.log(incrementLargeInteger([9])); // Output: [1, 0]

  
  function pOne(digits) {
    const n = digits.length;
    let carry = 1;
    
    for (let i = n - 1; i >= 0; i--) {
      const sum = digits[i] + carry;
      carry = sum > 9 ? 1 : 0;
      digits[i] = sum % 10;
    }
    
    if (carry > 0) {
      digits.unshift(carry);
    }
    
    return digits;
  }
  
  // Test cases
  console.log(pOne([1, 2, 3])); // Output: [1, 2, 4]
  console.log(pOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
  console.log(pOne([9])); // Output: [1, 0]
  