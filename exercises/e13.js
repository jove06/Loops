// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [
// Susan's Account Object,
// Morgan's Account Object
// Joshua's Account Object
// Candy's Account Object,
// Phil's Account Object
// ]

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

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
    let result = [];
    // iterating over the array
    for (let i = 0; i < array.length; i++){
        // iterate over the deposits to check them
        if (array[i].deposits && array[i].deposits.length > 0){
            let sum = 0;
            // iterate over deposits to get sum
            for (let d = 0; d < array[i].deposits.length; d++){
                sum += array[i].deposits[d];
            } 
            if (sum < 2000){
                result.push(array[i]);
            } 
        } else {result.push(array[i])}
        

    }
  return result;
}



console.log(getAllAccountsWithSumsOfDepositsLess2000(bankAccounts));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
