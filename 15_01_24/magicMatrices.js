function magicMatrices(arr) {

    for (let row = 0; row < arr.length; row++) {
        // console.log(arr[row]);
        for (let col = 0; col < row.length; col++) {
            console.log(arr[row][col]);
        }
    }



}


magicMatrices([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);

console.log('============');

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);