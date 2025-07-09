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
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
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

displayMovements(account1.movements);

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const withdrawals = movements.filter(mov => mov < 0);
console.log(movements);
console.log(deposits);
console.log(withdrawals);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = '';
  labelBalance.textContent = `${balance} €`;
};

calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((sum, curr) => (sum += curr), 0);
  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((sum, curr) => (sum += curr), 0);

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((sum, int) => (sum += int), 0);
  labelSumIn.textContent = '';
  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = '';
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = '';
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

//Maximum value;
// let maxVal = Math.max(...movements);
// console.log(maxVal);

//Maximum value using reduce method
// const max = movements.reduce(
//   (acc, num) => (num > acc ? num : acc),
//   movements[0]
// );
// console.log(max);

const eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
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

const calcAverageHumanAge = arr => {
  const humanAge = arr
    .map(dog => (dog <= 2 ? dog * 2 : 16 + dog * 4))
    .filter(dog => dog > 18);

  const avg = humanAge.reduce((sum, age) => (sum += age), 0) / humanAge.length;
  return avg;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
