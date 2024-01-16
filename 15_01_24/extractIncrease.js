function extractIncrease(arr) {
    let result = [];
    let maxNum = arr.shift();
    result.push(maxNum);

    arr.forEach(el => {
        if(el >= maxNum) {
            result.push(el);
            maxNum = el;
        }
    });

    return result;
}

console.log(extractIncrease([1, 3, 8, 4, 10, 12, 3, 2, 24]));

extractIncrease([20, 3, 2, 15, 6, 1]);