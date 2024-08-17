
// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

const array1 = ['a', 'b', 'c', ['1', '2', '3']];

export function flatArrays(array) {
  let result = [];
  // iterate over the array
  for (let i = 0; i < array.length; i++){
    // check for array type and against second array
    if (typeof array[i] === 'object' && array[i].length !== undefined){
      // iterate over the array & check types in array
      for (let j = 0; j < array[i].length; j++){
        // grab second array 
        result.push(array[i][j]);
      }
    } 
    // add the first array items to results
    else {result.push(array[i]);}
    
  }
  return result;
}

console.log(flatArrays(array1));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
