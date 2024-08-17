
// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

const array1 = ['a', 'b', 'c'];
const array2 = ['1', '2', '3'];

export function concatArrays(arr1, arr2) {
  let results = [];
  for (let i = 0; i < arr1.length; i++){
    results.push(arr1[i]);    
  }
  for (let i = 0; i < arr2.length; i++){
    results.push(arr2[i]);
  }
  return results;
}

console.log(concatArrays(array1, array2));





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
