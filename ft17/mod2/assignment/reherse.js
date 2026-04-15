


//const numbers = [3, 7, 2 , 9, 5];

//function findLargest(arr) {
  //  let largest = arr[0];
 //   arr.forEach(element => {
    //    if (element > largest) {
    //        largest = element;
      //  }
  //  });
  //  return largest;
}
//console.log(findLargest(numbers));


console.log(`statement 1`);
console.log(`statement 2`);

	





const arr = [1, 2, 3, 4, 5];

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        } 
    }
    return true;
}