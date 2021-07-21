// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-6.php
// JavaScript: Check whether a given year is a leap year in the Gregorian calendar

//first solution
const isLeapYear = (year) => {
    if(year % 4 || year % 100 || year % 400 === 0 ){
        console.log(`The ${year} is leap year`);
    }else {
        console.log(`The ${year} is not leap year`);
    }
}

isLeapYear(2000);

// second solution with ternary operator
let yearTer = 2014;
let isTheYearLeap = (yearTer % 4 || yearTer % 100 || yearTer % 400 === 0) ? `Yes the ${yearTer} is leap year` : `No, the ${yearTer} is not leap year`;
console.log(isTheYearLeap);

// w3resource's solution

function leapyear(yearW)
{
return (yearW % 100 === 0) ? (yearW % 400 === 0) : (yearW % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));