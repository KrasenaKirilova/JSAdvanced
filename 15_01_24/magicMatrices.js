function magicMatrices(arr) {
    let sum = arr[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for(let i = 0; i < arr.length; i ++) {
        let rowSum = arr[i].reduce((a, b) => a + b, 0);
        let colSum = arr.map((x) => x[i]).reduce((a, b) => a + b, 0);

        if (rowSum !== sum || colSum !== sum) {
            isMagic = false;
            break;
        }

    }
console.log(isMagic);
}


magicMatrices([[4, 5, 6],

[6, 5, 4],

[5, 5, 5]]);

console.log('============');

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);