'use strict';

let subject;
let startDate;
let currentDate;

const floorPlan = {
  planName: `Project Apartment`,
  plantType: [`Antique`, `Contemporary`],
  location: `No 2, Forest Drive, Seaward City, Los Angeles, CA`,
  curtains: [
    `top frils and skirting`,
    `full draping`,
    `night liner`,
    `half length vertical slide`,
  ],
  surface: [`smooth`, `textured`],
  roomOptions: [`Drawing Room`, `Bath Room`, `Master Bedroom`, `Utility Area`],
  mainActivities: [
    `plinth concreting`,
    `lintel sealing`,
    `reverse grouting`,
    `cement pumping`,
  ],

  iCanTakeObjects: function (obj) {
    console.log('I can take objects: ' + obj.location);
  },

  iCanNotTakeItOutOfOrder: function (planName, location, mainActivities) {
    console.log(
      'I can not take properties out of order : 😭' + location + ', ' + planName
    );
  },

  iCanTakeItOutOfOrder: function ({ planName, location, mainActivities }) {
    console.log(
      'I can take properties out of order : 😀' + location + ', ' + planName
    );
  },
};

//Adding the addional activities using the spread operator.
let loadedActivities = [`seepage arresting`, ...floorPlan.mainActivities];
console.log(`Spread Operator : ${loadedActivities}`);
console.log(
  `Just using spread operator will print individual elements of array to the console log`
);
console.log(...loadedActivities);

loadedActivities = [...floorPlan.mainActivities, `soil testing`];
console.log(`Spread Operator : ${loadedActivities}`);

//Creating a shallow copy of an array using a spread operator
let loadedActivitiesCopy = [...loadedActivities];
console.log(`Copied using spread operator : ${loadedActivitiesCopy}`);

//Join two arrays into one
let joinedArray = [...loadedActivities, ...floorPlan.roomOptions];
console.log(`Joined array is : ${joinedArray}`);

//Spread operator works on all iterables. That is on arrays, Strings, maps, sets. NOT objects.
//Since ES6 spread operator is working on objects also.
console.log(...floorPlan.curtains[0], ` AND `, ...floorPlan.surface[1]);

//Spread operator cannot be used in a template literal. Below will not work. Because it is not expecting comma separated values there.
//console.log(`Joined array is : ${...joinedArray}`);

//Lets create a new object using spread operator.
const newFloorPlan = {
  infoClassification: `public`,
  ...floorPlan,
  electricalFittings: [`Fans`, `Lights`, `Heater`],
};
console.log(newFloorPlan);

//Looks like spread operator can make deep copy of the objects

const floorPlanCopy = { ...newFloorPlan };
floorPlanCopy.infoClassification = `private`;
console.log(newFloorPlan);
console.log(floorPlanCopy);

//Spread operator can be used to pass comma separated arguments to a function
let argumentsForSpread = [
  prompt(`Let\'s think about the location. Whats in your mind?`),
  prompt(`What activity do you want to perform?`),
  prompt(`Do you want to assign a plan name?`),
];
console.log(`Using spread operator to pass arguments`);
floorPlan.iCanNotTakeItOutOfOrder(...argumentsForSpread);

//passing objects to a method
floorPlan.iCanTakeObjects(floorPlan);

//passing properties out of order to a method
floorPlan.iCanNotTakeItOutOfOrder(
  floorPlan.location,
  floorPlan.mainActivities,
  floorPlan.planName
);

//passing properties out of order to a method
floorPlan.iCanTakeItOutOfOrder({
  location: floorPlan.location,
  mainActivities: floorPlan.mainActivities,
  planName: floorPlan.planName,
});

//Object Deconstruction with same name
let { planName, surface, curtains } = floorPlan;
console.log(
  'Object Deconstruction with same names : ',
  planName,
  surface,
  curtains
);

//Object Deconstruction with new names
let {
  planName: designElement,
  surface: painingPlan,
  curtains: curtainSelection,
} = floorPlan;
console.log(
  'Object Deconstruction with new names : ',
  designElement,
  painingPlan,
  curtainSelection
);
//let item = Number(prompt('Enter the item number: '));

//Now if you want to assign, you can't just remove the curly braces
document.querySelector('.generate').addEventListener('click', function () {
  let randNum = Math.random();
  let curtainSelector = Math.trunc(randNum * floorPlan.curtains.length);
  randNum = Math.random();
  let plantTypeSelector = Math.trunc(randNum * floorPlan.plantType.length);
  randNum = Math.random();
  let roomSelector = Math.trunc(randNum * floorPlan.curtains.length);
  randNum = Math.random();
  let activitySelector = Math.trunc(randNum * floorPlan.curtains.length);
  randNum = Math.random();
  let surfaceSelector = Math.trunc(randNum * floorPlan.surface.length);
  console.log(
    curtainSelector,
    plantTypeSelector,
    roomSelector,
    activitySelector
  );
  let planOfAction = `The plan is to do the house in a ${floorPlan.plantType[plantTypeSelector]} style. The walls should be ${floorPlan.surface[surfaceSelector]} and the windows should be upholstered with ${floorPlan.curtains[curtainSelector]}. We will start working in the ${floorPlan.roomOptions[roomSelector]}. The major activity of the day will be ${floorPlan.mainActivities[activitySelector]}. `;
  console.log(planOfAction);
  document.querySelector('.content3').textContent = planOfAction;
});

function describeSomething(title, text, item) {
  let globalAges = [1953, 1982, 1979];
  document.querySelector(`.title${item}`).textContent = title;
  document.querySelector(`.content${item}`).textContent = text;
}

let [first, second] = floorPlan.curtains;
describeSomething(
  `Given Array : [${floorPlan.curtains}]`,
  `let [first, second] = floorPlan.curtains will give ${first + ', ' + second}`,
  0
);

let [firs, , third] = floorPlan.curtains;
describeSomething(
  `Given Array : [${floorPlan.curtains}]`,
  `let [firs, third] = floorPlan.curtains will give ${firs + ', ' + third}`,
  1
);

[firs, third] = [third, firs];
describeSomething(
  `Now I want to swap the elements in [firs, third]`,
  `[firs, third] = [third, firs]; will give ${firs + ', ' + third}`,
  2
);

const interiorAreas = [
  `In the wash`,
  `In front of TV`,
  [`Two in One`, `Three in Two`],
];

[firs, , third] = interiorAreas;

const typicalHouseObject = {
  drawingRoom: {
    floor: 'italian marble',
    walls: 'textured emulsion',
    roof: 'corniced',
  },
  kitchen: {
    floor: 'vitrified tiles',
    walls: 'silky finish',
    roof: 'none',
  },
  bathRoom: {
    floor: 'anti skid tiles',
    walls: 'granite',
    roof: 'plaster of paris',
  },
  balcony: {
    floor: 'antique weathering course',
    walls: 'weather coad',
    roof: 'exposed concrete',
  },
};
//Deconstructing Nested Objects with Same names
let {
  drawingRoom: { floor },
  balcony: { roof },
} = typicalHouseObject;
console.log(floor, roof);

//Deconstructing Nested Objects with different names
let {
  drawingRoom: { floor: drawingRoomFloor },
  balcony: { roof: balconyRoof },
} = typicalHouseObject;
console.log(drawingRoomFloor, balconyRoof);
