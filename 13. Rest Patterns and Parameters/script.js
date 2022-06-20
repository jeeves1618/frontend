'use strict';

let iplTeams = [
  `Chennai Super Kings`,
  `Delhi Capitals`,
  `Gujarat Titans`,
  `Kolkata Knight Riders`,
  `Lucknow Super Giants`,
  `Mumbai Indians`,
  `Punjab Kings`,
  `Rajasthan Royals`,
];

document.querySelector(`.title0`).textContent = iplTeams;

//Spread, because ... is on the right side of the equal sign
let iplTeamsSpread = [`Pune Giants`, ...iplTeams];
document.querySelector(`.title1`).textContent = iplTeamsSpread;

//REST, because ... is on the left side of the equal sign
let [champion, ...others] = iplTeamsSpread;
let message = `The Champion is ${champion} and the other teams are ${others}`;
document.querySelector(`.title2`).textContent = message;

/*REST Element Rules
1. There should be only one REST element
2. 
*/
let [team1, team2, ...othersAgain] = iplTeamsSpread;
let message1 = `The first team is ${team1}, the second team is ${team2} and the other folks are ${othersAgain}`;
document.querySelector(`.title3`).textContent = message1;

/*
Usinf REST operator to Pass Multiple parameters*/

const add = function (...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) sum = sum + nums[i];
  return sum;
};

console.log(add(1982, 18));
console.log(add(1982, 18, 16, 17, 17));

let [a, b, ...c] = [10, 20, 23, 45, 67, 78, 9];
console.log(`a = ${a} and b = ${b} and c = ${c}`); //will print a = 10 and b = 20 and c = 23,45,67,78,9
console.log(c[1]); //will print 45
let d = [a, ...c];
console.log(`a = ${a} and d = ${d}`);
