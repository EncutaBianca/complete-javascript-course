"use strict";

// const mark = {
//   fullName: "Mark",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const markBMI = mark.calcBMI();
// const johnBMI = john.calcBMI();

// if (johnBMI > markBMI) {
//   console.log(
//     `John Smith's BMI (${john.calcBMI()}) is higher than Mark Miller's (${mark.calcBMI()})!`
//   );
// } else {
//   console.log(
//     `Mark Miller's BMI (${mark.calcBMI()}) is higher than John Smith's (${john.calcBMI()})!`
//   );
// }

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
// };
// const romania = describeCountry("Romania", 18, "Bucharest");
// const france = describeCountry("France", 23, "Paris");
// const india = describeCountry("India", 100, "New Delhi");

// console.log(romania);
// console.log(france);
// console.log(india);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
// const romania = percentageOfWorld1(18);
// const france = percentageOfWorld1(23);
// const india = percentageOfWorld1(1000);
// console.log(romania);
// console.log(france);
// console.log(india);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

// const romania2 = percentageOfWorld1(18);
// const france2 = percentageOfWorld1(23);
// const india2 = percentageOfWorld1(1000);
// console.log(romania2);
// console.log(france2);
// console.log(india2);

// const percentageOfWorld3 = (population) => (population / 7900) * 100;

// const romania3 = percentageOfWorld3(18);
// console.log(romania3);

// const describePopulation = function (country, population) {
//   return `${country} has ${population} million people, which is about ${percentageOfWorld1(
//     population
//   )} of the world`;
// };

// console.log(describePopulation("Romania", 18));
// console.log(describePopulation("Italy", 28));
// console.log(describePopulation("China", 1443));

const populations = [18, 23, 52, 6];

// if (populations.length === 4) {
//   console.log(populations.length === 4);
// }

// const percentages = [];

// for (let i = 0; i < populations.length; i++) {
//   percentages.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentages);

// const neighbours = ["Bulgaria", "Rep Moldova", "Serbia", "Ungaria", "Ucraina"];

// neighbours.push("Utopia");
// neighbours.pop();

// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a Central European country :D");
// }

// neighbours[neighbours.indexOf("Rep Moldova")] = "Republica Moldova";
// console.log(neighbours);

// const myCountry = {
//   country: "Romania",
//   capital: "Bucharest",
//   language: "Romanian",
//   population: 18,
//   neighbours: ["Bulgaria", "Rep Moldova", "Serbia", "Ungaria", "Ucraina"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsland: function () {
//     this.isIsland = this.neighbours.length > 0 ? false : true;
//   },
// };

// myCountry.describe();
// myCountry.checkIsland();

// myCountry.population = myCountry.population + 2;
// console.log(myCountry.population);
// myCountry["population"] = myCountry["population"] - 2;
// console.log(myCountry["population"]);
// console.log(myCountry.isIsland);

// for (let i = 1; i <= 50; i++) {
//   console.log(`Voter number ${i} is currently voting.`);
// }

// let percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentages2);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let j = 0; j < listOfNeighbours[i].length; j++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }
// let percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld2(populations[i]));
// }
// console.log(percentages2);

// let i = 0;
// while (i < populations.length) {
//   percentages2.push(percentageOfWorld2(populations[i]));
//   i++;
// }
// console.log(percentages2);
