'use strict';

let subject;
let startDate;
let currentDate;

const floorPlan = {
  planName: `Project Apartment`,
  plantType: [`antique`, `contemporary`],
  location: `No 2, Forest Drive, Seaward City, Los Angeles, CA`,
  curtains: [
    `top frils and skirting`,
    `full draping`,
    `night liner`,
    `half length vertical slide`,
  ],
  surface: [`smooth`, `textured`],
  loadBearing: [`yes`, `no`],
  roomOptions: [`Drawing Room`, `Bath Room`, `Master Bedroom`, `Utility Area`],
  mainActivities: [
    `plinth concreting`,
    `lintel sealing`,
    `reverse grouting`,
    `soil removal`,
  ],
  siteEngineerResponsibilities: [
    `seepage sponging`,
    `termite searching`,
    `power blowing`,
    `posterior curing`,
  ],
};

//let item = Number(prompt('Enter the item number: '));

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
  let loadSelector = Math.trunc(randNum * floorPlan.loadBearing.length);
  let siteEnggSelector = Math.trunc(
    randNum * floorPlan.siteEngineerResponsibilities.length
  );
  console.log(
    curtainSelector,
    plantTypeSelector,
    roomSelector,
    activitySelector
  );
  let planOfAction = `The plan is to do the ${
    floorPlan.loadBearing[loadSelector] == 'yes'
      ? `load bearing`
      : `non load bearing`
  } structure in a ${
    floorPlan.plantType[plantTypeSelector]
  } style. The walls should be ${
    floorPlan.surface[surfaceSelector]
  } and the windows should be upholstered with ${
    floorPlan.curtains[curtainSelector]
  }. We will start working in the ${
    floorPlan.roomOptions[roomSelector]
  } and the site engineer will be focussed on ${
    floorPlan.siteEngineerResponsibilities[siteEnggSelector]
  }. We will be ending the day with completion of ${
    floorPlan.mainActivities[activitySelector]
  }. `;
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
