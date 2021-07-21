// https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-3.php
//JavaScript : Display the current date


// my solution
let date = new Date();
let month = date.getMonth();
let day = date.getDay();
let year = date.getFullYear();

if (day<10){
    day=`0${day}`
}

if(month<10){
    month=`0${month}`;
}

console.log(`${month}-${day}-${year}`);
console.log(`${month}/${day}/${year}`);
console.log(`${day}-${month}-${year}`);
console.log(`${day}/${month}/${year}`);

// // w3resourses's soluiton

// let today = new Date();
// let dd = today.getDate();

// let mm = today.getMonth()+1; 
// const yyyy = today.getFullYear();
// if(dd<10) 
// {
//     dd=`0${dd}`;
// } 

// if(mm<10) 
// {
//     mm=`0${mm}`;
// } 
// today = `${mm}-${dd}-${yyyy}`;
// console.log(today);
// today = `${mm}/${dd}/${yyyy}`;
// console.log(today);
// today = `${dd}-${mm}-${yyyy}`;
// console.log(today);
// today = `${dd}/${mm}/${yyyy}`;
// console.log(today);