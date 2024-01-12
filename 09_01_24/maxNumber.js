// function maxNum(a, b, c) {
//     let first = Math.max(a, b);
//     let second = Math.max(first, c);
//     console.log(`The largest number is ${second}.`);
// }


function maxNum(...params) {
    let largest = Math.max(...params);
    
    console.log(`The largest number is ${largest}.`);
}
maxNum(5, -3, 16, 30, 54, -23);
maxNum(-3, -5, -22.5);