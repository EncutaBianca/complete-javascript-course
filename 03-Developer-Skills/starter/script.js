// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 1997;

// const calcAge = birthYear => 2025 - birthYear;
// console.log(calcAge(x));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is the temp amplitude? A: Difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error and what to do when it occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max values in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (curTemp > max && typeof curTemp === 'number') {
//       max = curTemp;
//     } else if (curTemp < min && typeof curTemp === 'number') {
//       min = curTemp;
//     }
//   }
//   console.log(`Maximum temperature was: ${max}!`);
//   console.log(`Minimum temperature was: ${min}!`);
//   return max - min;
// };

// const amp = calcTempAmplitude([3, 6, 7], [32, 12, -5]);
//console.log(amp);

// const calcTempAmplitudeNew = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (curTemp > max && typeof curTemp === 'number') {
//       max = curTemp;
//     } else if (curTemp < min && typeof curTemp === 'number') {
//       min = curTemp;
//     }
//   }
//   console.log(`Maximum temperature was: ${max}!`);
//   console.log(`Minimum temperature was: ${min}!`);
//   return max - min;
// };

// const amplitude = calcTempAmplitudeNew(temperatures, [24, -3, 'error', -16]);
// console.log(amplitude);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // value: prompt('Degrees celsius'),
//     value: 10,
//   };
//   const kelvin = Number(measurement.value) + 273;
//   return kelvin;
// };

// const kelvinTemp = measureKelvin();
// console.log(kelvinTemp);

// const calcTempAmplitudeBug = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (curTemp > max && typeof curTemp === 'number') {
//       max = curTemp;
//     } else if (curTemp < min && typeof curTemp === 'number') {
//       min = curTemp;
//     }
//   }
//   console.log(`Maximum temperature was: ${max}!`);
//   console.log(`Minimum temperature was: ${min}!`);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// // IDENTIFY
// console.log(amplitudeBug);
