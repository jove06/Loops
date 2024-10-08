
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

const bankAccounts = [
  {
    id: 1,
    name: "Susan",
    balance: 100.32,
    deposits: [150, 30, 221],
    withdrawals: [110, 70.68, 120],
  },
  { id: 2, name: "Morgan", balance: 1100.0, deposits: [1100] },
  {
    id: 3,
    name: "Joshua",
    balance: 18456.57,
    deposits: [4000, 5000, 6000, 9200, 256.57],
    withdrawals: [1500, 1400, 1500, 1500],
  },
  { id: 4, name: "Candy", balance: 0.0 },
  { id: 5, name: "Phil", balance: 18, deposits: [100, 18], withdrawals: [100] },
];

export function getAllDepositsGreaterThanOneHundred(array) {
  let result = [];
  // iterate over the array
  for (let i = 0; i < array.length; i++){
    // iterate over deposits to check if there are deposits
    if (array[i].deposits && array[i].deposits.length > 0){
      // iterate over deposits 
      for (let d = 0; d < array.length; d++){
        // iterate over deposits to grab > 100
        if (array[i].deposits[d] > 100){
          result.push(array[i].deposits[d])
        }
      }
    }
  }
  return result;
}

console.log(getAllDepositsGreaterThanOneHundred(bankAccounts));



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
