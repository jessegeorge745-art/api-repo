//
function checkLargestNumber(num1, num2, num3) {
if (num1 > num2 && num1 > num3) {
    return num1 + "Largest number";
} else if (num2 > num1 && num2 > num3) {
    return num2 + "Largest number";
} else if (num3 > num1 && num3 > num1){
    return num3 + "Largest number";
}
}
console.log(checkLargestNumber(40 , 30 , 30));
console.log(checkLargestNumber(150 , 543 ,4332));
