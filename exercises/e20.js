
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.

let namedArray = ['aurora', 'mystery', 'mordecai', 'rigby', 'momo'];

export function separateNamesWithAFromRest(array) {
  let namesWithA = [];
  let namesWithoutA = [];
  for (let i = 0; i < array.length; i++){
    let containA = false;
    for (let j = 0; j < array[i].length; j++){
      if (array[i][j] === 'a'){
        containA = true;
      }
    }
    if (containA){
      namesWithA.push(array[i]);
    } else {namesWithoutA.push(array[i]);}
    
  }
  return [namesWithA, namesWithoutA];
}

console.log(separateNamesWithAFromRest(namedArray));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
