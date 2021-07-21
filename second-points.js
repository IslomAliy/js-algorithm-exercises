// https://youtu.be/wKyle38qsmM?list=PL_WK6W0Gn1I7bL0pRUxYSbTj6g8tHU6Yq - savol
const SPEED_LIMIT = 70;
const KM_PER_POINT = 5;
const MAX_POINTS = 12;

checkSpeed(200);

function checkSpeed(speed){
    if(speed < SPEED_LIMIT + KM_PER_POINT)
        console.log('Okay');
    else {
        let points = Math.floor((speed - SPEED_LIMIT) / KM_PER_POINT);
        if(points > MAX_POINTS ){
            console.log('Guvohnoma olib qo\'yiladi.');
        }
        else {
            console.log(`Sizda ${points}ta jarima bor.`);
        }
    }
}

// agar 70 dan oshiq bo'lsa maxSpeedni ayriymiz va 5 ga bo'lamiz

