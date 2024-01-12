function roadRadar (speed, type){
    let maxSpeed = 0;
   switch (type) {
    case 'motorway': maxSpeed = 130; break;
    case 'interstate': maxSpeed = 90; break;
    case 'city': maxSpeed = 50; break;
    case 'residential': maxSpeed = 20; break;
   }

   if (speed <= maxSpeed) {
    console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
   } else {
    let difference = speed - maxSpeed;
    let status = '';
    //console.log('Too fast!');
        if (difference <=20) {
            status = 'speeding';
        } else if (difference <=40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving'
        }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
   }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');
