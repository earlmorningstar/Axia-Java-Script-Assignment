// TEST 1

const language = "English";

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers.");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers.");
    break;
  case "English":
    console.log("3rd place in number of native speakers.");
    break;
  case "Hindi":
    console.log("4th place in number of native speakers.");
    break;
  case "Arabic":
    console.log("5th most spoken language.");
    break;
  default:
    console.log("Great language too.");
    break;
}

// 

// TEST 3

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);

// TEST 4

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const firstCountry = describeCountry("Finland", 6, "Helsinki.");
const secondCountry = describeCountry("Nigeria", 213, "Abuja.");
const thirdCountry = describeCountry("Canada", 38, "Ottawa.");

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);

// TEST 5



// TEST 6

const populations = [6000000, 213000000, 38000000, 269876432];
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

const hasFourElements = populations.length === 4;
console.log(hasFourElements); // true

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

console.log(percentages);
