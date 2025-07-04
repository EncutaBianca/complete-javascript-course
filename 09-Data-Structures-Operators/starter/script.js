// 'use strict';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     return `Here is your pasta recipe, with: ${ing1}, ${ing2}, ${ing3}.`;
//   },
// };
// // const ingredients = [
// //   prompt("Let's make your pasta recipe! Ingredient 1?"),
// //   prompt('Ingredient 2?'),
// //   prompt('Ingredient 3?'),
// // ];
// // console.log(restaurant.orderPasta(...ingredients));
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sol',
//   mainIndex: 2,
//   starterIndex: 1,
// });

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(`Bad new arr: ${badNewArr}`);
// const goodNewArr = [1, 2, ...arr];
// console.log(`Good new arr: ${goodNewArr}`);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// restaurant.mainMenu = [...restaurant.mainMenu, 'Carpaccio'];
// console.log(mainMenuCopy);
// console.log(restaurant.mainMenu);
// console.log(mainMenuCopy);

// //Iterables: arrays, strings, maps, sets NOT OBJECTS
// //Spread operator returns the element of an iterable, not an array

// const str = 'Bianca';
// const letters = [...str, ' ', 'E.'];
// console.log(...str);
// console.log(...letters);
// console.log([...letters]);

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);
// const arr = [2, 3, 5];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //Switching variables

// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// console.log(restaurant.order(2, 0));
// let [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested values
// const nested = [2, 4, [5, 6]];
// let [i, , [j, k]] = nested;
// console.log(i, j, k);

// //default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
'use strict';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//WITH optional chaining
if (!restaurant.openingHours.mon?.open) {
  console.log(`We are not open on Monday.`);
} else {
  console.log(`We are open on ${weekdays[4]}`);
}
//Daca obiectul restaurant nu are proprietatea open pe obiectul nestuit monday atunci valoarea if clause e falsa (!) si logeaza in consola "We are not open on Mondays!". Practic, totul se aplica doar daca afirmatia dinainte de "?" e adevarata. (In cazul nostru falsa pentru ca am inversat valoarea cu "!")
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (let day of days) {
  const open = restaurant.openingHours[day]?.open;
  console.log(`On ${day} we ${open ? `open at ${open}.` : 'are closed.'}`);
}

//Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist.');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist.');

//Arrays

const users = [
  { name: 'Bianca', email: 'bia@gmail.com' },
  { name: 'Jonas', email: 'john@gmail.com' },
];
console.log(users[0]?.name ?? 'User array empty.');
console.log(users[1]?.email ?? 'User array empty.');
console.log(users[3]?.name ?? 'User array empty.');

//Property Names
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

//Property values
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}.`);
}

//Looping over objects using: key, value, entries properties on the Object object.
//You can need to use destructuring for using the values returned from the entries().
//const entries = Object.entries(openingHours);
//[key,value]
//for (const [key, { open, close }] of entries) <= here we destructured the object returned by the value property as it was an object.

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = ['Waiter', 'Manager', 'Waiter', 'Waiter', 'Chef'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', [...commonFoods]);
console.log('Intersection:', ...commonFoods);

const italianAndMexican = italianFoods.union(mexicanFoods);
console.log(italianAndMexican);

console.log(new Set([...italianFoods, ...mexicanFoods]));

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open.')
  .set(false, 'We are closed.');
console.log(rest.get('name'));
console.log(rest.get('categories'));

const time = 12;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  [4, 'JavaScript'],
  ['correct', 4],
  [true, 'Correct! 👏'],
  [false, 'You did not guess the correct answer! 😢'],
]);

console.log(question);
//Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer - ${key}: ${value}`);
  }
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
if (answer !== question.get('correct')) {
  console.log('Try again!');
} else {
  console.log('You are so damn right!');
}

//Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(airline.lastIndexOf('r')));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const seatAssignment = function (seat) {
  if (seat[seat.length - 1] === 'B' || seat[seat.length - 1] === 'E') {
    console.log(`Your seat is in the middle.`);
  } else {
    console.log(`Your seat is not in the middle. Congrats!`);
  }
};

seatAssignment('11B');
seatAssignment('40E');
seatAssignment('13A');

//Fixing capitalization in a name:

let passanger = 'bIANcA'; //Bianca
const fixedPassanger =
  passanger.slice(0, 1).toUpperCase() + passanger.slice(1).toLowerCase();
console.log(fixedPassanger);

const fixCapitalization = function (name) {
  const fixedPassanger =
    name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  return fixedPassanger;
};

console.log(fixCapitalization('mohAMMAd'));

//Comparing emails

const email = 'hello@bianca.io';
const loginEmail = 'Hello@ \n Bianca.io';

const cleanedEmail = loginEmail
  .toLowerCase()
  .replace('\n', '')
  .replaceAll(/\s/g, '');
console.log(cleanedEmail);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

const announcementCorrect = announcement.replaceAll('door', 'gate');
console.log(announcementCorrect);

//Booleans
const plane1 = 'Airbus A320neo';
// console.log(plane1.includes('A320'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW AirBus family.');
}

const convertToCamelCase = function (...items) {
  for (const [index, item] of items.entries()) {
    const [first, second] = item.toLowerCase().trim().split('_');

    const camelCase = first + second[0].toUpperCase() + second.slice(1);

    console.log(camelCase.padEnd(20) + ' ' + '✅'.repeat(index + 1));
  }
};

const textArea = document.createElement('textarea');
document.body.append(textArea);

const button = document.createElement('button');
button.textContent = 'Press!';
document.body.append(button);

button.addEventListener('click', function () {
  const text = textArea.value;
  const lines = text.split('\n');
  convertToCamelCase(...lines);
});
// console.log(
//   convertToCamelCase(
//     'bianca_encuta',
//     'pedro_Pascal',
//     'calculate_AGE',
//     'SOme_Variable'
//   )
// );

// // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

console.log(flights.split('+'));

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.replaceAll('_', ' ').trim()} from ${from
    .toUpperCase()
    .slice(0, 3)} to ${to.toUpperCase().slice(0, 3)} (${time.replace(
    ':',
    'h'
  )})`;
  const isDelayed = type.includes('Delayed');
  const emoji = isDelayed ? '🔴' : '';
  const formatted = `${emoji} ${output}`;
  console.log(formatted.padStart(50));
}
