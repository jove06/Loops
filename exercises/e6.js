// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']


const bankAccounts = [
  {id: 1,
    name: "Jason",
    balance: 230,
  },

  {id: 2,
    name: "Jack",
    balance: 0,
  },

  {id: 3,
    name: "Jon",
    balance: 240,
  },

  {id: 4,
    name: "Jasper",
    balance: 0,
  }
]

export function getClientWithNoMoney(array) {
  let nameBalance = [];
  for (let i = 0; i < array.length; i++){
    if (array[i].balance === 0){
      nameBalance.push(array[i].name);
    }
  }
  return nameBalance;
}

console.log(getClientWithNoMoney(bankAccounts));
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
