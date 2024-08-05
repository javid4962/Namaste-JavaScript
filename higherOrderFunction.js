// function x() {
//   console.log("Namaste");
// }

// function y(x) {
//   x();
// }
// y(x);

// const radius = [3, 6, 2, 5];

// const calculateArea = function(radius) {
//   const output1 = [];
//   for (let i = 0; i < radius.length; i++) {
//     output1.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output1;
// }
// const calculateCircumference = function(radius) {
//   const output2 = [];
//   for (let i = 0; i < radius.length; i++) {
//     output2.push(2 * Math.PI * radius[i]);
//   }
//   return output2;
// }
// const calculateDiameter = function(radius) {
//   const output3 = [];
//   for (let i = 0; i < radius.length; i++) {
//     output3.push(2 * radius[i]);
//   }
//   return output3;
// }
// console.log("Areas: " + calculateArea(radius));
// console.log("Circumferences: " + calculateCircumference(radius));
// console.log("Diameters: " + calculateDiameter(radius));

// const radius = [3, 6, 2, 5];

// const area = function(radius) {
//   return Math.PI * radius * radius;
// }

// const circumference = function(radius) {
//   return 2 * Math.PI * radius;
// }

// const diameter = function(radius) {
//   return 2 * radius;
// }

// const calculate = function(radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// }

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));

// const arr = [5, 1, 3, 2, 6];

// // Double
// function double(x) {
//   return 2 * x;
// };
// const output1 = arr.map(double);
// console.log(output1);

// // Triple
// function triple(x) {
//   return 3 * x;
// };
// const output2 = arr.map(triple);
// console.log(output2);

// // Binary
// function binary(x) {
//   return x.toString(2);
// };
// const output3 = arr.map(binary);
// console.log(output3);

// const arr = [5, 1, 3, 2, 6];
// // filter odd values
// const output = arr.filter(isOdd);
// console.log(output);

// function isOdd(x) {
//   return x % 2;
// };


// const arr = [5, 1, 3, 2, 6];

// function findSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(findSum(arr));


const arr = [5, 1, 3, 2, 6];

const output = arr.reduce(function(acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);