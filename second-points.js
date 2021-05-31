checkspeed(81);

var maxSpeed = 70;
var count = 5;


function checkspeed(speed){
    let points = 0;
    if(speed - maxSpeed <= maxSpeed) {
        console.log('Okay');
    }
    else if(speed - maxSpeed == true){
        points += Math.round(speed % count );
    }
    else if(points => 12) {console.log('Jarima!');}

    else {console.log(speed);}
}

// agar 70 dan oshiq bo'lsa maxSpeedni ayriymiz va 5 ga bo'lamiz

