// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;
// // let massMark = 95;
// // let heightMark = 1.88;
// // let massJohn = 85;
// // let heightJohn = 1.76;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / (heightJohn * heightJohn);
// let markHigherBMI = bmiMark > bmiJohn;
// // console.log(bmiMark, bmiJohn, markHigherBMI);
// if (markHigherBMI) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }
