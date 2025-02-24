//Values and Variables

const country = "Romania";
const continent = "Europe";
let population = 18_000_000;

// console.log(country, continent, population);

//Data Types
// const isIsland = false;
// const language = "Romanian";

// console.log(
//   typeof isIsland,
//   typeof population,
//   typeof country,
//   typeof language
// );

//Let, Var and Const

//Basic Operators
// let peopleOnHalf = population / 2;
// console.log(peopleOnHalf);
// population++;
// console.log(population);
// let finlandPopulation = 6_000_000;
// let morePopulationThanFinland = population > finlandPopulation;
// console.log(morePopulationThanFinland);
// let averagePopulation = 33_000_000;
// let morePopulationThanAverage = population > averagePopulation;
// console.log(morePopulationThanAverage);
// let description = `${country} is in ${continent} and its ${--population} people speak ${language}.`;
// console.log(description);

//Template Literals
// const firstName = "Bianca";
// const job = "programmer";
// const birthYear = 1997;

// const introduction = `Hi! I'm ${firstName}, a ${
//   2025 - birthYear
// } years old ${job}.`;

// console.log(introduction);

//If/Else statements
// if (!morePopulationThanAverage) {
//   console.log(
//     `${country}'s population is ${33_000_000 - population} below average.`
//   );
// }
//Type Conversion and Coercion
// console.log("9" - "5"); // -> 4
// console.log("19" - "13" + "17"); // -> 617
// console.log("19" - "13" + 17); // -> 617
// console.log("123" < 57); // -> false
// console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143

//Falsy Values
//Equality operators == vs. ===
// const neighbour = Number(
//   prompt("How many neighbour countries does your contry have?")
// );

// if (neighbour === 1) {
//   console.log("Only 1 border!");
// } else if (neighbour >= 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No borders!");
// }

// if (language === "English" && population < 50_000_000 && isIsland === false) {
//   console.log(`You should live in ${country}.`);
// } else {
//   console.log(`${country} does not meet your criteria.`);
// }
// const language = "Mandarin";

// switch (language) {
//   case "Mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "Spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "English":
//     console.log("3rd place");
//   case "Hindi":
//     console.log("Number 4");
//     break;
//   case "Arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
//     break;
// }

// const averagePopulation = population > 30_000_000 ? "above" : "below";

// if (population)
//   console.log(`${country}'s population is ${averagePopulation} average.`);
