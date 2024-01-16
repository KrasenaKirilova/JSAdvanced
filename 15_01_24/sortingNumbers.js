
function sortingNumbers(arr) {
    let result = [];
    arr.sort((a, b) => a - b);

    while (arr.length != 0) {
        result.push(arr.shift(), arr.pop());
        
    }

    return result;
}
// function sortingNumbers(arr) {
//     let result = [];
//     let minNum = 0;
//     let maxNum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         minNum = Math.min(...arr);
//         maxNum = Math.max(...arr);
//         result.push(minNum, maxNum);

//         arr = arr.filter(function (num) {
//             return num !== minNum && num !== maxNum;;
//         });

//         if (arr.length === 2) {
//             arr.sort((a, b) => a - b);
//             result.push(...arr);
//         }
//         if (arr.length === 1) {
//             result.push(arr[0]);
//         }
//     }
//     return result;
// }


// function sortingNumbers(arr) {
//     let result = [];
//     arr.sort((a, b) => a - b);

//     while (arr.length >= 2) {
//         let minNum = Math.min(...arr);
//         let maxNum = Math.max(...arr);

//         result.push(minNum, maxNum);

//         arr = arr.filter(function (num) {
//             return num !== minNum && num !== maxNum;
//         });

//         if (arr.length === 1) {
//             result.push(arr[0]);
//             break; 
//         }
//     }

//     return result;
// }




console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log('====================');
console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));