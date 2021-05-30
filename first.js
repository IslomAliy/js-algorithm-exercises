// This algorithm exercises are taken from https://www.w3resource.com/javascript-exercises/ . Visit this web site for more algorithm exercises;

/* 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

let days  = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today = new Date();
let getDay = today.getDay();
let getHours = today.getHours();
console.log(`Today is ${days[getDay]}. And the time is ${getHours}`);
