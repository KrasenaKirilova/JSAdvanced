function timeToWalk(steps, footprint, speed) {
    let distance = (steps * footprint) / 1000;
    // console.log(distance);

    let rest = parseInt(distance / 0.5);
    //console.log(rest);

    let timePerHour = distance / speed;

    let timePerMinute = timePerHour * 60;
    let totalHour = timePerHour | 0;
    // console.log(totalHour);
    let totalMin = timePerMinute | 0;
    // console.log(totalMin);

    let timePerSeconds = timePerMinute - totalMin;
    let totalSec = Math.round(timePerSeconds * 60);

    if (rest >= 0) {
        totalMin += (rest) | 0;
    }
    if (totalHour < 10) {
        console.log(`0${totalHour}:${totalMin}:${totalSec}`);
    } else {
        console.log(`${totalHour}:${totalMin}:${totalSec}`);
    }
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);