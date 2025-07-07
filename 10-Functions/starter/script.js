'use strict';
// const bookingArr = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookingArr.push(booking);
//   console.log(bookingArr);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);

// const flight = 'LH234';
// const bia = {
//   name: 'Bianca Larisa',
//   passport: 324543543,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Ms. ' + passenger.name;

//   //   if (passenger.passport === 324543543) {
//   //     alert('Check in!');
//   //   } else {
//   //     alert('The passport number is incorrect!');
//   //   }
// };

// checkIn(flight, bia);
// console.log(flight);
// console.log(bia);

// function changeNumber(num) {
//   num = 100;
//   console.log('În funcție:', num); // 100
// }

// let num = 42;
// changeNumber(num);
// console.log('În afară:', num); // 42

// function modifyArray(arr) {
//   arr.push(4);
//   arr = [10, 20, 30];
//   arr.pop();
//   console.log('În funcție:', arr);
// }

// const originalArray = [1, 2, 3];
// modifyArray(originalArray);
// console.log('În afară:', originalArray);

// // Ce va afișa console.log('În funcție:', arr);?
// // 1.In functie: [10,20]
// // Ce va afișa console.log('În afară:', originalArray);?
// // 2. In afara: [1, 2, 3, 4];

// function updateData(data) {
//   data.items.push('new item');
//   data = { items: ['a', 'b', 'c'] };
//   data.items.pop();
//   console.log('În funcție:', data.items);
// }

// const originalData = { items: ['x', 'y', 'z'] };
// updateData(originalData);
// console.log('În afară:', originalData.items);

// //1. data = { items: ['a', 'b']}
// //2. { items: ['x', 'y', 'z','new item'] };

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// console.log(oneWord('Bianca Lavinia Encuta'));

// const upperFirstWord = function (str) {
//   const strArr = str.split(' ');
//   strArr[0] = strArr[0].toUpperCase();
//   return strArr.join(' ');
// };

// console.log(upperFirstWord('bianca lavinia encuta pradescu bruckentall'));

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// const greet = greeting => name => console.log(`${greeting}, ${name}!`);

// greet('Buna')('Daniel');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(name, flightNum) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    return this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book('Bianca Encuta', '394');
lufthansa.book('Carina Clipa', '394');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams');

book.call(eurowings, 'Sarah Williams', 23);
console.log(eurowings);

// const welcomeUser = welcome.bind(user);
// welcomeUser();

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW('Steven Williams', 23);

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// const buyPlaneLH = lufthansa.buyPlane.bind(lufthansa);

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * (rate / 100);

// console.log(addTax(10, 100));

// const addVatRomania = addTax.bind(null, 21);
// console.log(addVatRomania(100));

const addTax = rate => value => value + value * (rate / 100);

console.log(addTax(21)(220));

const poll = {
  question: 'What is your favourite programming language?',
  options: [
    [0, 'JavaScript'],
    [1, 'Rust'],
    [2, 'Python'],
    [3, 'C++'],
  ],
  answers: [0, 0, 0, 0],
  displayResults(type = 'array') {
    if (type == 'array') {
      console.log(this.answers);
    } else if (type == 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
  registerNewAnswer() {
    const question = window.prompt(
      "What's your favourite programming language?\n0: JavaScript\n1: Rust\n2: Python\n3: C++\n(Write option number)"
    );
    const answer = Number(question);
    if (answer < this.options.length && answer >= 0) {
      this.answers[answer] = (this.answers[answer] ?? 0) + 1;
    }
    this.displayResults();
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'array');
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// poll.registerNewAnswer();
/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
