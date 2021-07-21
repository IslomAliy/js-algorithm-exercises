//https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-4.php
//JavaScript: Find the area of a triangle where lengths of the three of its sides are 5, 6, 7

let sideOne = 5;
let sideTwo = 6;
let sideThree = 7;
let s = (sideOne + sideTwo + sideThree) / 2;
let result = Math.sqrt(s * (s - sideOne) * (s - sideTwo) * (s - sideThree));
console.log(result);