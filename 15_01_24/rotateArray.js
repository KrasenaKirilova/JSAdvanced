// function rotateArray(arr, count) {
//     let sorted = [];

//     for(let i = 0; i <= count; i++) {
//     sorted = arr.sort((a,b) => b.localCompare(a));
//     }
//     console.log(sorted);

// }


function rotateArray(arr, rotations) {
    rotations = rotations % arr.length; // За да избегнем излишно въртене

    // Вземаме последните rotations елемента и ги поставяме в началото
    let rotatedPart = arr.slice(-rotations);
    let rotatedArray = rotatedPart.concat(arr.slice(0, arr.length - rotations));

    console.log(rotatedArray.join(' '));
}


rotateArray(['1',

'2',

'3',

'4'],

2);
console.log('===========');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);