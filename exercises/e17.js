
// EXERCISE 17
// Please, read the exercise-info/includes.md to get the initial data of what is the expected result of this exercise.
// doesArrayInclude(['a', 'b', 'c'], 'a') => true
// doesArrayInclude(['a', 'b', 'c'], 'f') => false
// NOTE: You can NOT use the array.includes() method in your code

const trueArray = ['a', 'b', 'c'];
const falseArray = ['a', 'b', 'c'];

export function doesArrayInclude(array, value) {
    // iterate over the whole array
    for (let i = 0; i < array.length; i++){
      if (array[i] === value){
        return true;
      }
    }
    return false;
}

console.log(doesArrayInclude(trueArray, 'a'));
console.log(doesArrayInclude(falseArray, 'e'));

// The **includes()** method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// ```JS
// const array1 = [1, 2, 3];
// const isValueOfTwoInThere = array1.includes(2);
// // expected value: true

// const isValueOfFiveInThere = array1.includes(5);
// // expected value: false
// ```

// For this exercise we want you to build a isArrayIncludes() function that solves the same task with **for loops ONLY**.

// A isArrayIncludes() function should
// * Take an array and a value as arguments (2)
// * Return boolean that stands fo that fact that the array includes the value or not.

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
