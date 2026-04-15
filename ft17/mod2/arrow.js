//arrow function
let food1 = "ugali"
let food2 = "rice"
const addfood = (food) => {
    return food1 + " is my favorite " + food2;
    
}
console.log(addfood(food1, food2));

const num1 = 16;
const num2 = 4;
const num3 = 8;
const solve = (num1,num2,num3) => {
return (num1 - num2) /num3;
}

console.log(solve(num1, num2, num3));

const foody3 = "rice";
let foody4 = "peas";
const combinefood = (foody) => {
    return foody3 + " is delicious with " + foody4;
} 
console.log(combinefood(foody3, foody4));

const value = 4;
const value1 = 5;



const createmultiplier = (value) => (value) => {
    return value * value1;
} 
console.log(createmultiplier(value * value1));

