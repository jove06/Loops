
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]


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

// first, iterate over the array
// then check for deposits & iterate over deposits
// get sum of d
// check for withdrawls & iterate over withdrawals
// get sum of w
// then subtract d from w to equal balance
// if the balance does not match return the wrong balances

export function getClientsWithWrongBalance(array) {
  let result = [];
  // iterate over array
  for(let i = 0; i < array.length; i++){
    let totalWithdrawals = 0;
    let totalDeposits = 0;
    // check over deposits
    if (array[i].deposits && array[i].deposits.length > 0){
      // get sum of deposits & iterate over deposits
      for (let d = 0; d < array[i].deposits.length; d++){
        totalDeposits += array[i].deposits[d];
      }
    }
    // check withdrawals
    if (array[i].withdrawals && array[i].withdrawals.length > 0){
      // get sum of w
      // iterate over w
      for (let w = 0; w < array[i].withdrawals.length; w++){
        totalWithdrawals += array[i].withdrawals[w];
      }
      
    }

    // find balance
    if (totalDeposits - totalWithdrawals !== array[i].balance){
      result.push(array[i]);

    }
    
    
  }
  return result;
}

console.log(getClientsWithWrongBalance(bankAccounts));



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
