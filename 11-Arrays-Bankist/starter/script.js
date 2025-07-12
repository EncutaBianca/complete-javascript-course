'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${Math.abs(mov)}€</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements();

function createUsername(accounts) {
  accounts.forEach(function (account) {
    console.log(
      (account.username = account.owner
        .toLowerCase()
        .split(' ')
        .map(user => user[0])
        .join(''))
    );
  });
}
createUsername(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(currentAccount.movements);

  //Display balance
  calcDisplayBalance(currentAccount);

  //Display summary
  calcDisplaySummary(currentAccount);
};
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawals);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = '';
  labelBalance.textContent = `${acc.balance} €`;
};

calcDisplayBalance(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, curr) => (sum += curr), 0);
  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, curr) => (sum += curr), 0);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((sum, int) => (sum += int), 0);
  labelSumIn.textContent = '';
  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = '';
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = '';
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1);

let currentAccount;

//Event Handlers
btnLogin.addEventListener('click', function (e) {
  //Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and welcome message
    labelWelcome.textContent = '';
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }!`;
    containerApp.style.opacity = 100;

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount.username !== currentAccount.username
  ) {
    //Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);

    //Hide UI and update the welcome message
    containerApp.style.opacity = 0;
    labelWelcome.textContent = 'Log in to get started';
  }
  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
});

//EQUALITY
console.log(movements.includes(-130));

//SOME: CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);
//EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
const arr1 = [...[1, 2, 3], ...[4, 5, 6], 7, 8];
console.log(arr1);
console.log(arr.flat());

//By specifying 2 as an argument to the flat() method we specify how deep in the nesting we want to go.
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

const accountMovements = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((sum, mov, i, arr) => {
    return (sum += mov);
  }, 0);
console.log(accountMovements);

const accountMovements1 = accounts
  .flatMap(acc => acc.movements)
  .reduce((sum, mov, i, arr) => {
    return (sum += mov);
  }, 0);
console.log(accountMovements1);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)
console.log(`Here you have your unordered list: ${movements}`);
//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1; //switch order;
//   if (a < b) return -1; //keep order;
// });
movements.sort((a, b) => a - b);
console.log(`Here you have your ascending order list: ${movements}`);

//Descending
// movements.sort((a, b) => {
//   if (a < b) return 1; //switch order;
//   if (a > b) return -1; //keep order;
// });
movements.sort((a, b) => b - a);
console.log(`Here you have your descending order list: ${movements}`);

//Object.groupBy(theArrayWeWorkWith, callbackFunction that tells the rule by which we group the elements)
const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawals'
);
console.log(groupedMovements);
const groupByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  if (movementCount === 0) return 'inactive';
});
console.log(groupByActivity);

const groupByType = Object.groupBy(accounts, account => {
  if (account.type === 'premium') return 'premium';
  if (account.type === 'basic') return 'basic';
  if (account.type === 'standard') return 'standard';
});
console.log(groupByType);
const arr3 = new Array(4).fill(0);
console.log(arr3);
const diceRollArr = Array.from({ length: 100 }, (_, i) => {
  return `Roll ${i + 1}: ${Math.floor(Math.random() * 100) + 1}`;
});
console.log(diceRollArr, diceRollArr.includes(100));
// // Find method retrieves the first element in the array that satisfies the condition
// const firstWitdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWitdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// for (const acc of accounts) {
//   if (acc.owner === 'Jessica Davis') {
//     console.log(acc);
//   }
// }

// const bigMov = movements.reduce((sum, mov, i, arr) => {
//   return sum < mov ? mov : sum;
// }, movements[0]);
// console.log(bigMov);
// const lastBigMov = movements.findLastIndex(mov => Math.abs(mov) > 1000);
// console.log(movements);
// console.log(lastBigMov);
// console.log(
//   `Your latest large movement was ${
//     movements.length - lastBigMov
//   } movements ago.`
// );
//Maximum value;
// let maxVal = Math.max(...movements);
// console.log(maxVal);

//Maximum value using reduce method
// const max = movements.reduce(
//   (acc, num) => (num > acc ? num : acc),
//   movements[0]
// );
// console.log(max);

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);
// Three of the most important array methods: MAP, FILTER, REDUCE!
// MAP() => Maps the values of the original array to a new array using a callback function that takes each current element and does what the callback function says.

//FILTER() => Returns a new array containing the array elements that passed a specified test condition.

//REDUCE() => Boils all array elements down to one single value (adding all elements together)

// const arr = [1, 2, 3];
// const arr1 = arr.reduce(function (acc, cur) {
//   return acc + cur;
// });

// console.log(arr1);

// const eurToUsd = 1.1;
// const movementsToUsd = account1.movements.map(mov =>
//   Math.round(Math.abs(mov) * eurToUsd)
// );
// console.log(account1.movements);
// console.log(movementsToUsd);

// const movDesc = account2.movements.map((mov, i, arr) => {
//   return `Movement ${i + 1}: You ${
//     mov < 0 ? 'withdrew' : 'deposited'
//   } ${Math.abs(mov)}`;
// });
// console.log(movDesc);
// movDesc.forEach(mov => console.log(mov));

// const user = 'Daniela Mihaela Cristescu';

// const arr2 = [];
// for (const mov of account1.movements) {
//   arr2.push(Math.round(Math.abs(mov) * eurToUsd));
// }
// console.log(arr2);
/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //SLICE method does not mutate the original array. It returns a new array.
// const arrSlice = arr.slice(2);
// console.log(arrSlice);
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// //SPLICE (this method mutates the original arr)
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);

// //REVERSE (this method mutates the original arr)
// const arr2 = ['j', 'i', 'h', 'g', 'f', 'e'];
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //JOIN
// console.log(letters.join('-'));

//The new .AT() method
//
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

//getting last array element
// console.log(arr[arr.length - 1]); //returns 64 as a number
// console.log(arr.slice(-1)[0]); //returns 64 as an array and then we specify we want the element at position 0 which returns 64 as a number

// console.log(arr.at(-1)); //returns 64 (the last element of the arr aray)

//We can use the at method on strings as well:
// console.log('laura'.at(0));
// console.log('laura'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Method Math.abs() removed the sign before the movement.

// for (const [index, movement] of movements.entries()) {
//   console.log(
//     `Movement ${index + 1}: You ${
//       movement < 0 ? 'withrew' : 'deposited'
//     } $${Math.abs(movement)}`
//   );
// }

// console.log('------forEach() method-------- \n');

//The forEach() method gives you the current element (first!!), the current index AND the current array we are looping over
// movements.forEach(function (movement, i) {
//   console.log(
//     `Movement ${i + 1}: You ${
//       movement < 0 ? 'withrew' : 'deposited'
//     } $${Math.abs(movement)}`
//   );
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

//forEach() method is also available on Maps and Sets

//Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set

// const currenciesUnique = new Set(['USD', 'GPB', 'EUR', 'USD', 'EUR']);

// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// function checkDogs(juliaArr, kateArr) {
//   const shallowJulia = [...juliaArr];
//   shallowJulia.shift(0);
//   shallowJulia.splice(-2);
//   const juliaAndKateArr = [...shallowJulia, ...kateArr];
//   console.log(juliaAndKateArr);
//   juliaAndKateArr.forEach(function (dog, i) {
//     console.log(
//       `Dog number ${i + 1} ${
//         dog < 3 ? 'is still a puppy 🐶' : `is an adult and is ${dog} years old.`
//       }`
//     );
//   });
// }

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = arr => {
//   const humanAge = arr
//     .map(dog => (dog <= 2 ? dog * 2 : 16 + dog * 4))
//     .filter(dog => dog > 18);

//   const avg = humanAge.reduce((sum, age) => (sum += age), 0) / humanAge.length;
//   return avg;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

///////////////////////////////////////
// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];
// const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
// console.log(huskyWeight);
// const dogBothActivities = breeds.find(
//   breed =>
//     breed.activities.includes('fetch') && breed.activities.includes('running')
// ).breed;
// console.log(dogBothActivities);
// const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);
// const swimmingAdjacent = breeds
//   .filter(breed => breed.activities.includes('swimming'))
//   .flatMap(breed => breed.activities)
//   .filter(activity => activity !== 'swimming');
// console.log([...new Set(swimmingAdjacent)]);
// console.log(breeds.every(breed => breed.averageWeight >= 10));
// console.log(breeds.some(breed => breed.activities.length >= 3));

//1.
// const bankDepositsSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, mov) => (sum += mov));
// console.log(bankDepositsSum);

//2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000);
// console.log(numDeposits1000, numDeposits1000.length);

// ///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  const recFood = dog.weight ** 0.75 * 28;
  dog.recFood = Math.floor(recFood);
});
