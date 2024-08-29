// EXERCISE 18
// Please, read the exercise-info/join.md to get the initial data of what is the expected result of this exercise.
// Array example: joinToStringData in /data/data.js
// joinToString(['a', 'b', 'c'], '-') => 'a-b-c'
// NOTE: You can NOT use the array.join(), array.toString(), and array.replace() methods in your code

let arrayString = ['a', 'b', 'c'];

export function joinToString(array, separator) {
    let results = [];
    for (let i = 0; i < array.length; i++){
        results += array[i];
        if (i < array.length - 1){
            results += separator;
        }
    }
    return results;
}

console.log(joinToString(arrayString, '-'));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
