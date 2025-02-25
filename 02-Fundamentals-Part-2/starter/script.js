"use strict";

// function logger() {
//   console.log("My name is Bianca.");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);

// function calcAge1(birthYear) {
//   const age = 2025 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1997);

// const calcAge2 = function (birthYear) {
//   const age = 2025 - birthYear;
//   return age;
// };

// const age2 = calcAge2(1993);
// console.log(age1, age2);

// const calcAge3 = (birthYear) => 2025 - birthYear;
// const age3 = calcAge3(1997);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2025 - birthYear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1997, "Bianca"));
// console.log(yearsUntilRetirement(1996, "Andrada"));

// function cutPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1997, "Bianca"));
//Arays
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);
// // const years = new Array(1997, 2005, 1986);

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// const firstName = "Bianca";
// const bianca = [firstName, "Encuta", 2025 - 1997, "programmer", friends];
// console.log(bianca);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2025 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [age1, age2, age3];
// console.log(ages);

// const bianca = {
//   firstName: "Bianca",
//   lastName: "Encuta",
//   job: "Programmer",
//   birthYear: 1997,
//   friends: ["Michael", "Steven", "Peter"],
//   hasDriversLicense: false,
//   //   calcAge: function (birthYear) {
//   //     return 2025 - birthYear;
//   //   },
//   //   calcAge: function () {
//   //     return 2025 - this.birthYear;
//   //   },
//   calcAge: function () {
//     this.age = 2025 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} y/o ${this.job}. ${
//       this.hasDriversLicense
//         ? "She has a driver's license"
//         : "She does not have a driver's license."
//     }`;
//   },
// };
// console.log(bianca.getSummary());
// // console.log(
// //   `${bianca.firstName} has ${bianca.friends.length} friends and her best friend is called ${bianca.friends[0]}.`
// // );

// console.log(bianca.age);
// console.log(bianca["calcAge"](bianca.birthYear));

// let typeArr = [];
// for (let i = 0; i < bianca.length; i++) {
//   console.log(bianca[i], typeof bianca[i]);

//   //typeArr[i] = typeof bianca[i];
//   typeArr.push(typeof bianca[i]);
// }
// console.log(typeArr);

// const years = [1991, 1997, 2004, 2018];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2025 - years[i]);
// }
// console.log(ages);

//Continue and break
// console.log("----ONLY STRINGS----");
// for (let i = 0; i < bianca.length; i++) {
//   if (typeof bianca[i] !== "string") continue;
//   console.log(bianca[i], typeof bianca[i]);
// }

// console.log("----BREAK WITH NUMBER----");
// for (let i = 0; i < bianca.length; i++) {
//   if (typeof bianca[i] === "number") break;
//   console.log(bianca[i], typeof bianca[i]);
// }

// let arr2 = [];
// for (let i = bianca.length - 1; i >= 0; i--) {
//   arr2.push(bianca[i]);
// }
// console.log(arr2);

// for (let exercise = 1; exercise <= 4; exercise++) {
//   console.log(`-----------Starting Exercise ${exercise}----------`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}.`);
//   }
// }

// const bianca = [
//   "Bianca",
//   1997,
//   "Encuta",
//   "Programmer",
//   ["Michael", "Steven", "Peter"],
// ];

// console.log("---FOR LOOP---");
// for (let rep = 1; rep < 10; rep++) {
//   console.log(`Lifting weight repetition ${rep}.`);
// }

// console.log("----WHILE LOOP----");
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}.`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}.`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Loop is about to end.");
//   }
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let tip = 0; tip < bills.length; tip++) {
//   tips.push(calcTip(bills[tip]));
// }

// for (let i = 0; i < bills.length; i++) {
//   totals.push(bills[i] + tips[i]);
// }
// console.log(tips);
// console.log(totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   let avg = sum / arr.length;
//   return avg;
// }

// console.log(calcAverage(totals));
