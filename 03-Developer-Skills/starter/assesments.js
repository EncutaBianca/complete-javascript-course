'use strict';
// 1) Use a for loop and iterate thru the array;
// 2) Take each value and cl a string like "... temperatureC in 1 day"
// 3) Combine all the strings you have into one big string and log it into the console.

// My approach
const temperatures = [17, 21, 23];

const dottedString = function (arr) {
  let finalString = '';
  for (let i = 0; i < arr.length; i++) {
    finalString += ` ${arr[i]}°C in ${arr.indexOf(arr[i]) + 1} days ...`;
  }
  return '... ' + finalString;
};

// console.log(dottedString(temperatures));
// console.log(dottedString([2, -6, 11, 7]));

// Jonas' approach
/*
1) Understanding the problem
- Array transformed to string, separated by ...
- What is the X days? A: index + 1

2) Breaking up into sub-problems
- Transform array into string
- Transform each element to string with C
- String needs to contain day (index + 1)
- Add ... between elements and start and end of string
- Log string to console
*/

// const data1 = [12, 0, 9, -3];
// const data2 = [22, 10, 3, 5];

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += ` ${arr[i]}°C in ${i + 1} days`;
//   }
//   console.log(str);
// };

// printForecast(data1);

// Using AI to solve a problem:
function analyzeWorkWeek(hours) {
  // Days of the week for reference
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  // 1. Total hours worked
  const totalHours = hours.reduce((acc, curr) => acc + curr, 0);

  // 2. Average daily hours (rounded down to one decimal place)
  const averageDailyHours = Math.floor((totalHours / hours.length) * 10) / 10;

  // 3. The day with the most hours worked (actual day of the week)
  let maxHours = Math.max(...hours);
  let maxDay = daysOfWeek[hours.indexOf(maxHours)];

  // 4. Number of days worked (days with more than 0 hours)
  const daysWorked = hours.filter(hour => hour > 0).length;

  // 5. Whether the week was full-time (worked 35 hours or more)
  const fullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    maxDay,
    daysWorked,
    fullTime,
  };
}

// TEST DATA
const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const result = analyzeWorkWeek(hours);
console.log(result);
