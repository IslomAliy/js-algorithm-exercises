checkspeed(82);

var maxSpeed = 70;
var count = 5;
var points = 0;

function checkspeed(speed){
    if(speed - maxSpeed <= maxSpeed) {
        console.log('Okay');
    }
    else if(speed - maxSpeed > maxSpeed ){
        speed % count 
    }
}

console.log('Sizga ${points}ta point berildi');

// agar 70 dan oshiq bo'lsa maxSpeedni ayriymiz va 5 ga bo'lamiz