//Values and Variables
/*let js = "amazing";

console.log("Bianca");
console.log(27);
console.log(js);

let firstName = "Lavinia";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Niacinamida");

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(year);
console.log(typeof year);


//Let, Var and Const
// let age = 27;
// age = 28;

// const birthYear = 1997;

// var job = "programmer";
// job = "teacher";

//Basic Operators
const now = 2025;
const ageBianca = now - 1997;
const ageSarah = now - 1999;
console.log(ageBianca);
console.log(ageSarah);

//Assignment operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x + 1 = 101
x--; // x - 1
x--; // x - 1
console.log(x);

//Comparison operators
console.log(ageBianca > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

console.log(now - 1991 > now - 2018);
*/
////Template Literals
// const firstName = "Bianca";
// const job = "programmer";
// const birthYear = 1997;

// const introduction = `Hi! I'm ${firstName}, a ${
//   2025 - birthYear
// } years old ${job}.`;

// console.log(introduction);

//If/Else statements
// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("You are old enough to drive a car.");
// } else {
//   console.log(`You need to wait ${18 - age} more years to drive a car.`);
// }

// const birthYear = 1997;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

//Type Conversion and Coercion
// const inputYear = "1997";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Bianca"));
// console.log(Boolean({}));

// const money = 10;
// if (money) {
//   console.log("Don't spend it all.");
// } else {
//   console.log("You should get a job.");
// }

// let height;
// if (height) {
//   console.log("YEY! Height is defined!");
// } else {
//   console.log("OH! NO! Height is not defined!");
// }

//Equality operators
// const age = 18;
// if (age === 18) {
//   console.log("You are exactly 18 years old.");
// }

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// if (favourite === 69) {
//   console.log("You have a dirty mind! I like u!");
// } else {
//   console.log("Think dirtier!");
// }

//Logical Operators
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive!");
// }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired);
// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive!");
// }

const day = "Saturday";

// switch (day) {
//   case "Monday":
//     console.log("Go to work.");
//     console.log("Go to the gym.");
//     console.log("Learn for my next job.");
//     break;
//   case "Tuesday":
//     console.log("Have a walk in the park.");
//     break;
//   case "Wednesday":
//   case "Thursday":
//     console.log("Go to the doctors.");
//     break;
//   case "Friday":
//     console.log("Go to the doctors again.");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Live a little, laugh a little!");
//     break;
//   default:
//     console.log("Input a real day of the week.");
// }

// if (day === "Monday") {
//   console.log("Go to work.");
//   console.log("Go to the gym.");
//   console.log("Learn for my next job.");
// } else if (day === "Tuesday") {
//   console.log("Have a walk in the park.");
// } else if (day === "Wednesday" || day === "Thursday") {
//   console.log("Go to the doctors.");
// } else if (day === "Friday") {
//   console.log("Go to the doctors again.");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("Live a little, laugh a little!");
// } else {
//   console.log("Input a real day of the week.");
// }

//Statement and Expressions
const bill = 430;

let tip = bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
