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

// TEST 2

const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const dolphinsAverage =
  dolphinsScores.reduce((sum, score) => sum + score, 0) / dolphinsScores.length;

const koalasAverage =
  koalasScores.reduce((sum, score) => sum + score, 0) / koalasScores.length;

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win the competition!");
} else if (
  dolphinsAverage === koalasAverage &&
  dolphinsAverage >= 100 &&
  koalasAverage >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("No one wins the trophy.");
}

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAverageBonus1 =
  dolphinsScoresBonus1.reduce((sum, score) => sum + score, 0) /
  dolphinsScoresBonus1.length;

const koalasAverageBonus1 =
  koalasScoresBonus1.reduce((sum, score) => sum + score, 0) /
  koalasScoresBonus1.length;

if (
  dolphinsAverageBonus1 > koalasAverageBonus1 &&
  dolphinsAverageBonus1 >= 100
) {
  console.log("Dolphins win the competition! (Bonus 1)");
} else if (
  koalasAverageBonus1 > dolphinsAverageBonus1 &&
  koalasAverageBonus1 >= 100
) {
  console.log("Koalas win the competition! (Bonus 1)");
} else if (
  dolphinsAverageBonus1 === koalasAverageBonus1 &&
  dolphinsAverageBonus1 >= 100 &&
  koalasAverageBonus1 >= 100
) {
  console.log("It's a draw! (Bonus 1)");
} else {
  console.log("No one wins the trophy. (Bonus 1)");
}

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAverageBonus2 =
  dolphinsScoresBonus2.reduce((sum, score) => sum + score, 0) /
  dolphinsScoresBonus2.length;

const koalasAverageBonus2 =
  koalasScoresBonus2.reduce((sum, score) => sum + score, 0) /
  koalasScoresBonus2.length;

if (
  dolphinsAverageBonus2 > koalasAverageBonus2 &&
  dolphinsAverageBonus2 >= 100
) {
  console.log("Dolphins win the competition! (Bonus 2)");
} else if (
  koalasAverageBonus2 > dolphinsAverageBonus2 &&
  koalasAverageBonus2 >= 100
) {
  console.log("Koalas win the competition! (Bonus 2)");
} else if (
  dolphinsAverageBonus2 === koalasAverageBonus2 &&
  dolphinsAverageBonus2 >= 100 &&
  koalasAverageBonus2 >= 100
) {
  console.log("It's a draw! (Bonus 2)");
} else {
  console.log("No one wins the trophy. (Bonus 2)");
}

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

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percentageOfWorld3 = (population) => (population / 7900) * 100;

// Test data
const population1 = 1441;
const population2 = 328;
const population3 = 126;

const percentage1 = percentageOfWorld(population1);
const percentage2 = percentageOfWorld(population2);
const percentage3 = percentageOfWorld(population3);

console.log(`Percentage of world population: ${percentage1}%`);
console.log(`Percentage of world population: ${percentage2}%`);
console.log(`Percentage of world population: ${percentage3}%`);

const percentage4 = percentageOfWorld2(population1);
const percentage5 = percentageOfWorld2(population2);
const percentage6 = percentageOfWorld2(population3);

console.log(`Percentage of world population: ${percentage4}%`);
console.log(`Percentage of world population: ${percentage5}%`);
console.log(`Percentage of world population: ${percentage6}%`);

const percentage7 = percentageOfWorld3(population1);
const percentage8 = percentageOfWorld3(population2);
const percentage9 = percentageOfWorld3(population3);

console.log(`Percentage of world population: ${percentage7}%`);
console.log(`Percentage of world population: ${percentage8}%`);
console.log(`Percentage of world population: ${percentage9}%`);

// TEST 6

const populations = [1441, 328, 126, 66];

const hasFourElements = populations.length === 4;
console.log(hasFourElements); // true

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

console.log(percentages);
