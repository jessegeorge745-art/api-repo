function takePositiveInteger(num) {
    // 1. Validation (The Bouncer)
    if (num <= 0) {
        return "num is not a positiveInteger"; 
    } 

    // 2. The Logic (The Action)
    // We don't 'return num' here, we process it!
    
    function makeSmaller(n) {
        // This takes the digits and sorts them to be as small as possible
        return parseInt(String(n).split('').sort().join(''));
    } 

    // 3. The final Return
    return makeSmaller(num);
}

console.log(takePositiveInteger(31));  // Output: 13
console.log(takePositiveInteger(51));  // Output: 15
console.log(takePositiveInteger(-51)); // Output: "num is not a positiveInteger"