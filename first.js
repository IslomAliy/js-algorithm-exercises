// This algorithm exercises are taken from https://www.w3resource.com/javascript-exercises/ . Visit this web site for more algorithm exercises;

/* 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

//first solution

// var d = new Date(),
//     minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
//     hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
//     ampm = d.getHours() >= 12 ? 'pm' : 'am',
//     months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
//     days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// console.log(days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm);


//second solution

let today = new Date();
let day = today.getDay();
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
console.log(`Today is: ${dayList[day]}`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    }
    else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    }
    else {
        hour = 12;
        prepand = ' AM';
    }
}

console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`)

