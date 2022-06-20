'use strict';

let subject;
let startDate;
let currentDate;

let things = [
  new Object(subject, startDate, currentDate),
  new Object(subject, startDate, currentDate),
];

//let item = Number(prompt('Enter the item number: '));

function describeSomething(item) {
  let globalAges = [1953, 1982, 1979];
  document.querySelector(`.content${item}`).textContent = `${
    things[item].subject
  } was introduced ${
    things[item].currentDate - things[item].startDate
  } years back and syllabus has been current as of 
    ${things[item].currentDate - things[item].startDate + globalAges[item]}. ${
    things[item].subject
  } is perceived to be in existence for ${
    things[item].currentDate - things[item].startDate + 1
  } years.`;
}

things[0].subject = `Education`;
things[0].startDate = 1966;
things[0].currentDate = 2002;
things[1].subject = `Music`;
things[1].startDate = 1982;
things[1].currentDate = 2002;

describeSomething(0);
describeSomething(1);
console.log(phil); //Though the variable is defined below, because of hoisting this statement will not fail. It will just display undefined.

var phil = 'Socrates';

var philosopher = {
  subject: `Philosophy`,
  startDate: 1980,
  currentDate: 2002,
};
things.push(philosopher);
describeSomething(2);

//Below will write to the console as 23 since function declarations are hoisted
//The function is used before it is written down here.
console.log(addNumberDecl(12, 13));

//Below will result in error saying Uncaught ReferenceError: Cannot access 'addNumberXpr' before initialization
//Because function expressions defined using const or let are not hoisted.
//console.log(addNumberXpr(12, 13));

//Below will result in error saying Uncaught ReferenceError: Cannot access 'addNumberArrow' before initialization
//Because arrow functions defined using const or let are not hoisted.
//console.log(addNumberArrow(12, 13));

//Below will write to the console 'Uncaught TypeError: addVariables is not a function' Why?????
//console.log(addVariables(12, 13));

function addNumberDecl(x, y) {
  return x + y;
}

const addNumberXpr = function (x, y) {
  return x + y;
};

let addNumberArrow = (x, y) => x + y;

var addVariables = function (x, y) {
  return x + y;
};

//Destructuring Arrays
let [x, y, z] = things;

console.log(x);
document.getElementById('content3').textContent = x.subject;
document.getElementById('content4').textContent = z.subject;
document.getElementById('content5').textContent = y.subject;
