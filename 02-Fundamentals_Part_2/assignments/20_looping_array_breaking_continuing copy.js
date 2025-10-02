// Looping Arrays, Breaking and Continuing

// 1)Let's bring back the populations array from a previous assignment.

// 2)Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.

// 3)Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.

const worldPopulation = 7900;
function percentageOfWorld(population) {
  return (population / 7900) * 100;
}
const populations = [10, 1441, 1600, 332];
// console.log(populations.length === 4);

const percentage1 = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

const percentage2 = [];
for (let i = 0; i < populations.length; i++) {
  // percentage2[i] = percentageOfWorld(populations[i]);
  percentage2.push(percentageOfWorld(populations[i]));
}
console.log(percentage1);
console.log(percentage2);
