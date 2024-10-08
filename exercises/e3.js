
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++){
    total += array[i];
  }
  return total / array.length;
}

console.log(getAverage([13, 23, 5, 7, 9]));

/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] >= 0 && str[i] <= 100){
      sum += Number(str[i]);
    }
  }
  return sum;
}

console.log(getStringSum("GH2U87A"));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
