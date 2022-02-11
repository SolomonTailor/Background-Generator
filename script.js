// JS challange #1 and #2

// Test #1 var's
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// Test #2 var's
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// Equasion
// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(`John's BMI is ${BMIJohn}, Mark's BMI is ${BMIMark}`);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher then John's (${BMIJohn})!`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher then Mark's (${BMIMark})!`);
// }

///////////////////////////////////////////////////////

// JS challange #3

// const dolphins = 99.9 //(96 + 108+ 90) / 3;
// const koalas = 20 //(88 + 91 + 110) / 3;

// console.log(`Dolphins Avarage (${dolphins}), Koalas Avarage (${koalas})`);

// if (dolphins > koalas && dolphins >= 100) {
//     console.log(`Dolphins is the WINNER 🏆`);
// } else if (koalas > dolphins && koalas >= 100) {
//     console.log(`Koalas is the WINNER 🏆`);
// } else if (dolphins === koalas) {
//     console.log(`IT'S A DRAW 🙌`);
// } else {
//     console.log(`No one meet's the minimum of 100 😭`);
// }

//////////////////////////////////////////////////////////////

// Switch statmen converted to if statment

// const day = "wednesday";

// if (day === "monday") {
//     console.log(`plan course theory, Go to coding meetup`)
// } else if (day === "tuesday") {
//     console.log(`prepare theory videos`);
// } else if (day === "thursday" || day === "wednesday") {
//     console.log(`write code examples`);
// } else if (day === "friday"){
//     console.log(`record videos`);
// } else if ( day === "sunday" || day === "saturday") {
//     console.log(`Enjoy the weekend :D`);
// } else {
//     console.log(`Not a valid day`)
// }

///////////////////////////////////////////////////////////////

//challange #4

// const bill = 40;

// const tip = bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;

// console.log(`The bill was (${bill}), the tip was (${tip}), and the total value is (${tip + bill})`);

////////////////////////////////////////////////////////////////

//Function practice

// 'use strict';

// function logger() {
//     console.log('My name is Suliman');
// }

// //calling, running , invoking function
// logger();
// logger();
// logger();

// ///Fruite Prosessor Function decloration///

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// const appleOrangeJuice = fruitProcessor(4, 2);

// console.log(`apple ${appleJuice}
// apple orange ${appleOrangeJuice}`);

// ///Function declaration///
// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }
// const age1 = calcAge1(1992);

// ///Function expression///
// const calcAge2 = function (birthYear) {
//     return 2021 - birthYear;
// }
// const age2 = calcAge2(1992);

// ///Arrow Function///
// const calcAge3 = birthyear => 2021 - birthyear;
// const age3 = calcAge3(1992);

// console.log(calcAge1(1992), calcAge2(1992), calcAge3(1992));
// console.log(age1,age2,age3);// Both the same

// ///Arrow Function with multiple paramaters///
// const yearsTilRetirement = (birthyear, name) => {
//     const age = 2021 - birthyear;
//     const retirement = 65 - age;
//     return `${name} is gonna retire in ${retirement} years`;
// }
// console.log(yearsTilRetirement(1992, 'suliman'));
// console.log(yearsTilRetirement(1985, 'bob'));

// ///Functios calling functions fruite proseesor///

// function cutFruitPieces(fruit){

// }

// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

///////////////////////////////////////////////////////////////////////////////////

// functions challange
// 'use strict'

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(85, 54, 41);
// let scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log(`No one wins`);
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(44, 23, 71);
// scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(111, 576);

/////////////////////////////////////////////////////////////////////

// Arrays

// const friends = ['Steve', 'Mark', 'John']
// console.log(friends);

// const y = new Array(1992, 1988, 2020, 2030);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// // friends = ["John", "Mike", "Jason"]; // it's illigal to change the whole
// // array but you can change one element in it

// const firstName = "Solomon";

// const solomon = [firstName, "khayyat", 2022 - 1992, "Web Dev", friends];
// console.log(solomon);
// console.log(solomon.length);

// function calcAge(birthYear) {
//     return 2021 - birthYear;
// }

// const years = [1992, 1988, 2003, 1960];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])] ;

// console.log(ages);

///////////////////////////////////////////////////////////////////////////////////////////////

//  // Array's challange

//  ///First Attempt///

// const bills = [125, 555, 44]

// const tip = bills[0] <= 300 && bills[0] >= 50 ? bills[0] * .15 : bills[0] * .20;
// const tip1 = bills[1] <= 300 && bills[1] >= 50 ? bills[1] * .15 : bills[1] * .20;
// const tip2 = bills[2] <= 300 && bills[2] >= 50 ? bills[2] * .15 : bills[2] * .20;

// console.log(tip, tip1, tip2);

// if (bills[0] <= 300 && bills[0] >= 50) {
//     console.log(bills[0] * .15)
// } else {
//     console.log(bills[0] * .20)
// }
// if (bills[1] <= 300 && bills[1] >= 50) {
//     console.log(bills[1] * .15)
// } else {
//     console.log(bills[1] * .20)
// }
// if (bills[2] <= 300 && bills[2] >= 50) {
//     console.log(bills[2] * .15)
// } else {
//     console.log(bills[2] * .20)
// }

// ///Correct Answer///

// const calcTip = function (bill) {
//      return bill <= 300 && bill >= 50 ? bill * .15 : bill * .20;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

/////////////////////////////////////////////////////////////////////////////////////

// //Objects practice #1

// const solomon = {
//     firstName: "Solomon",
//     lastName: "Tailor",
//     age: 2022 - 1992,
//     job: "Programer",
//     friends: ["John", "Micheal", "Mark"],
// };

// console.log(solomon);
// console.log(solomon.lastName);
// console.log(solomon["lastName"]);

// const nameKey = "Name";

// console.log(solomon["first" + nameKey]);
// console.log(solomon["last" + nameKey]);

// const intrestedIn = prompt("what do you want to know about solomon ? choose between firstName, lastName, age, job and friends")

// if (solomon[intrestedIn]) {
//     console.log(solomon[intrestedIn]);
// } else {
//     console.log(`Please choose one of the provided options`)
// }

// //adding objects after the fact
// solomon.location = "Saudi";
// solomon['twitter'] = "@sulimankhayyat";
// console.log(solomon)

// //Challange
// //"solomon has 3 friends and his best friend is called micheal. write this in the console"

// console.log(`${solomon.firstName} has ${solomon.friends.length} friends, and his best friend is called ${solomon.friends[1]}`)

//Objects practice #2

// const solomon = {
//     firstName: "Solomon",
//     lastName: "Tailor",
//     birthYear: 1992,
//     job: "Dreamer",
//     friends: ["John", "Micheal", "Mark"],
//     hasDriversLicense: true,

//     // calcAge: function (birthyear) {
//     //     return 2022 - birthyear;
//     // }

//     // calcAge: function() {
//     //     console.log(this);
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear;
//         return this.age;
//     },
//     getSummery: function () {
//         return `${this.firstName} is ${this.age} years old ${this.job},
//         and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`
//     }
// };

//  console.log(solomon.calcAge());
// //  console.log(solomon.age);
// //  console.log(solomon['calcAge'](1992));

// console.log(solomon.getSummery(), )

////////////////////////////////////////////////////////////////////////

// Object's coding challange

// const mark = {
//   fullName: "mark Miller",
//   mass: 78,
//   hight: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / this.hight ** 2;
//     return this.BMI;
//   },
// };
// console.log(mark.calcBMI());

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   hight: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / this.hight ** 2;
//     return this.BMI;
//   },
// };
// console.log(john.calcBMI());

// if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is  higher then ${mark.fullName}'s BMI (${mark.BMI})`)
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is  higher then ${john.fullName}'s BMI (${john.BMI})`)
// }

// Using turnary oporarator instead of if/else
// john.BMI > mark.BMI
//   ? console.log(
//       `${john.fullName}'s BMI (${john.BMI}) is  higher then ${mark.fullName}'s BMI (${mark.BMI})`
//     )
//   : console.log(
//       `${mark.fullName}'s BMI (${mark.BMI}) is  higher then ${john.fullName}'s BMI (${john.BMI})`
//     );

/////////////////////////////////////////////////////

//Loop practise 1

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
// }

//////////////////////////////////////////////////////////

//Loop practice 2

// const solomon = [
//   "Solomon",
//   "Tailor",
//   2022 - 1992,
//   "Devoloper",
//   ["Jonas", "Stephan", "Andrew", "Grant", "Matt", "Bruce", "Nathan"],
//   true,
// ];

// ///adding types of array to a new array///

// const types = [];

// for (i = 0; i < solomon.length; i++) {
//   console.log(solomon[i], typeof solomon[i]);

//   // types[i] = typeof solomon[i];
//   types.push(typeof solomon[i]);
// }

// console.log(types);

// ///Pushing ages into a new array///
// const years = [1992, 2011, 1980, 2005];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }

// console.log(ages);

// ///Break and Continue Looping///

// console.log(`----STRINGS ONLY----`);
// for (i = 0; i < solomon.length; i++) {
//   if (typeof solomon[i] !== "string") continue;

//   console.log(solomon[i], typeof solomon[i]);
// }

// console.log(`----BREAK AT NUMBER----`);
// for (i = 0; i < solomon.length; i++) {
//   if (typeof solomon[i] === "number") break;

//   console.log(solomon[i], typeof solomon[i]);
// }

/////////////////////////////////////////////////////////////////////

//Loop practice 3

// const solomon = [
//   "Solomon",
//   "Tailor",
//   2022 - 1992,
//   "Devoloper",
//   ["Jonas", "Stephan", "Andrew", "Grant", "Matt", "Bruce", "Nathan"],
//   true,
// ];

// ///Looping backward///

// for (let i = solomon.length - 1; i >= 0; i--) {
//   console.log(i, solomon[i]);
// }

// ///Loop inside a loop///

// for (let excercise = 1; excercise < 4; excercise++) {
//   console.log(`--------- Excercise ${excercise} ---------`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Execercise ${excercise}: Lifting weights ${rep} 🏋️‍♂️`);
//   }
// }

//////////////////////////////////////////

//Loop Challange

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);

//   console.log(`Bill: ${bills[i]}
// Tip: ${tips[i]}
// Total: ${totals[i]}`);
// }

//End of JS fundamentals

/////////////////////////////////////////////////

// for (let i = 7; i < 18; i++) {
//   console.log(`number`);
// }

// const bills = 230 + 150;
// const fund = 598;

// console.log(`my bills are ${bills} my funds are ${fund}`);

// console.log(fund - bills);

///////////////////////////////////////////////////

//coder hub challanges

//challange 1
//calculate an avrage of an array

// function average(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   sum = sum / array.length;

//   console.log(sum);
//   return sum;
// }

// average([2, 5, 6, 4]);

//challange 2
//calculate an addition of an array plus the array length in an array output

function cumulativeAddition(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  const cumulative = [sum, array.length];

  return cumulative;
}

cumulativeAddition([5, 6, 55]);
